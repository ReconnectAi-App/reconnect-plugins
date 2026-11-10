// Checks the marketplace and the Reconnect plugin. No dependencies: plain Node 22.
// On pull requests (GITHUB_BASE_REF set), a change under plugins/reconnect/ needs a new version.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, normalize } from 'node:path';

const root = process.cwd();
const errors = [];
const fail = (msg) => {
  errors.push(msg);
  return null;
};

function readJson(rel) {
  const p = join(root, rel);
  if (!existsSync(p)) return fail(`${rel} is missing.`);
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch (e) {
    return fail(`${rel} is not valid JSON: ${e.message}`);
  }
}

const git = (...args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

const market = readJson('.claude-plugin/marketplace.json');
const entries = Array.isArray(market?.plugins) ? market.plugins : [];
if (market && !entries.length) fail('marketplace.json has no plugins.');
if (market && market.name !== 'reconnect-plugins')
  fail(`marketplace.json name is "${market.name}", expected "reconnect-plugins".`);

for (const entry of entries) {
  const src = entry?.source;
  if (typeof src !== 'string' || !src.startsWith('./')) {
    fail(`Plugin "${entry?.name}": source must be a path that starts with "./".`);
    continue;
  }
  if (src.split(/[\\/]/).includes('..')) {
    fail(`Plugin "${entry.name}": source must not contain "..".`);
    continue;
  }
  const dir = normalize(src);
  if (!existsSync(join(root, dir)) || !statSync(join(root, dir)).isDirectory()) {
    fail(`Plugin "${entry.name}": source folder ${src} does not exist.`);
    continue;
  }
  const manifest = readJson(join(dir, '.claude-plugin/plugin.json'));
  if (manifest && manifest.name !== entry.name)
    fail(`Plugin "${entry.name}": plugin.json name is "${manifest.name}". They must be the same.`);
  if (manifest && typeof manifest.version !== 'string')
    fail(`Plugin "${entry.name}": plugin.json has no version.`);
  if (existsSync(join(root, dir, 'bin')))
    fail(
      `Plugin "${entry.name}": remove the top-level bin/ folder (claude.ai and Cowork refuse it).`,
    );
  if (!existsSync(join(root, dir, 'dist/cli.js')))
    fail(`Plugin "${entry.name}": dist/cli.js is missing.`);

  const hooksFile = readJson(join(dir, 'hooks/hooks.json'));
  const events = hooksFile?.hooks && typeof hooksFile.hooks === 'object' ? hooksFile.hooks : null;
  if (hooksFile && !events) fail(`Plugin "${entry.name}": hooks.json has no "hooks" object.`);
  for (const [event, groups] of Object.entries(events ?? {})) {
    for (const group of Array.isArray(groups) ? groups : []) {
      for (const h of group?.hooks ?? []) {
        const ok =
          h?.type === 'command' &&
          h.command === 'node' &&
          Array.isArray(h.args) &&
          h.args[0] === '${CLAUDE_PLUGIN_ROOT}/dist/cli.js';
        if (!ok)
          fail(
            `Plugin "${entry.name}", ${event}: every hook must be exec form: command "node", args ["\${CLAUDE_PLUGIN_ROOT}/dist/cli.js", ...].`,
          );
      }
    }
  }

  // A PR that changes the plugin files must change the version, else users would not get it.
  const base = process.env.GITHUB_BASE_REF;
  if (base && manifest) {
    const ref = `origin/${base}`;
    let changed = false;
    try {
      changed = git('diff', '--name-only', `${ref}...HEAD`, '--', dir).trim() !== '';
    } catch (e) {
      fail(`Cannot compare with ${ref}: ${e.message.trim()}`);
    }
    if (changed) {
      let baseVersion = null;
      try {
        const rel = join(dir, '.claude-plugin/plugin.json').split('\\').join('/');
        baseVersion = JSON.parse(git('show', `${ref}:${rel}`)).version ?? null;
      } catch {
        // The plugin is new on this branch.
      }
      if (baseVersion !== null && baseVersion === manifest.version)
        fail(
          `Plugin "${entry.name}": files under ${src} changed but version is still ${manifest.version}. Bump the version in reconnect-api (packages/hooks/package.json) and sync again.`,
        );
    }
  }
}

if (errors.length) {
  console.error('Check failed:');
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}
console.log(`Check passed: ${entries.map((e) => e.name).join(', ')}.`);
