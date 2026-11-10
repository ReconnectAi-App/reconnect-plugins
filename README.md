# reconnect-plugins

This repo is the Claude Code marketplace for [Reconnect](https://github.com/ReconnectAi-App/reconnect-api).
It has one plugin, `reconnect`. The plugin sends your Claude Code session events to Reconnect, so you
can get back into any lane in about 30 seconds. It never blocks Claude Code.

## Install

You need Node.js 22 or later (`node -v`). In Claude Code, type:

```text
/plugin marketplace add ReconnectAi-App/reconnect-plugins
/plugin install reconnect@reconnect-plugins
```

Claude Code asks for the **Reconnect address** and the **Reconnect token**. Leave the token empty.
Reconnect Cloud: `https://api.reconnect-ai.me`. Self-hosted: for example `http://localhost:4317`.
Restart Claude Code, then type `/reconnect:connect <address>` (plugin 1.3.0 or later), for example
`/reconnect:connect https://api.reconnect-ai.me`. If your organization set Reconnect up for you,
leave both fields empty.

While this repo is private, your machine needs git read access to it (for example `gh auth login`).

## Update

Turn on auto-update once: `/plugin` > Marketplaces > `reconnect-plugins` > Enable auto-update. Or
update now in a terminal:

```sh
claude plugin marketplace update reconnect-plugins
```

## Uninstall

```text
/plugin uninstall reconnect@reconnect-plugins
```

## For organizations

To put the plugin, the address and the token on every machine with managed settings, see
[Org rollout](https://github.com/ReconnectAi-App/reconnect-api/blob/main/docs/ORG-ROLLOUT.md).

## Generated files

Files under `plugins/reconnect/` are generated from github.com/ReconnectAi-App/reconnect-api. Do not
edit them here. Change `packages/hooks` in reconnect-api, bump its `version`, and run
`pnpm sync:plugin ../reconnect-plugins` there (after merge, a workflow in reconnect-api opens the PR
here by itself).

CI (`node scripts/check.mjs`) checks the marketplace and plugin files, and that a PR which changes
`plugins/reconnect/` also changes the plugin `version`.

## License

The plugin is under the Functional Source License, Version 1.1, ALv2 Future License
([LICENSE.md](LICENSE.md), SPDX `FSL-1.1-ALv2`). You may use, change and self-host it for free, for
any purpose except a competing hosted service. Each version becomes Apache-2.0 two years after its
release.
