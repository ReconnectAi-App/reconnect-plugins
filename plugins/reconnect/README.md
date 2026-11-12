# Reconnect plugin for Claude Code and Grok Build

This plugin sends your Claude Code and Grok Build session events to Reconnect. Reconnect then shows
each lane, so you can get back into any lane in about 30 seconds. The plugin never blocks your
coding agent.

## What you need

- Node.js 22 or later. Type `node -v` in a terminal to check.
- For Reconnect Cloud, nothing more. For a self-hosted Reconnect, the address of your server. Ask
  the person who runs it.

## Install

In Claude Code, type these two commands:

```text
/plugin marketplace add ReconnectAi-App/reconnect-plugins
/plugin install reconnect@reconnect-plugins
```

Claude Code asks for two values:

- **Reconnect address**: keep the default `https://api.reconnect-ai.me` for Reconnect Cloud. For a
  self-hosted server, type its address, for example `http://localhost:4317` or your Tailscale name.
- **Reconnect token**: leave it empty. You connect this computer in the next step.

If your organization set up Reconnect for you, leave both empty and stop here.

Restart Claude Code. Then type:

```text
/reconnect:connect
```

Your browser opens Reconnect. Click **Connect**, then go back to Claude Code. Your lane shows in
Reconnect after your next session starts. For a self-hosted server, type its address after the
command, for example `/reconnect:connect http://localhost:4317`.

To check the connection, type `/reconnect:status`. To remove this computer, open Reconnect >
Settings > Connected computers.

## Grok Build

Grok Build reads the plugins that Claude Code installed. If the plugin is on in Claude Code on this
computer, Grok Build runs it too. You install nothing more. Use plugin version 1.4.0 or later.

Without Claude Code, type these commands in a terminal:

```sh
grok plugin marketplace add ReconnectAi-App/reconnect-plugins
grok plugin install reconnect --trust
```

Connect the computer one time. One connection serves Claude Code and Grok Build. Without Claude
Code, run the connect command of the plugin in a terminal. Grok Build keeps the plugin under
`~/.grok/installed-plugins/`. This command finds it and connects:

```sh
node "$(find ~/.grok/installed-plugins -path '*reconnect*/dist/cli.js' | head -n 1)" connect --url <address>
```

What is different in Grok Build:

- Grok Build does not add the lane card to a new session.
- Grok Build subagents do not show as separate processes in Reconnect.
- The address and token fields of the Claude Code dialog do not apply. Grok Build uses the
  connection in `~/.reconnect/config.json` (from the connect step).
- To get back into a lane, copy the resume command from Reconnect. It is `grok --resume <id>`.

## What it sends

On each hook event: the session id, the folder, the git branch and diff counts, and a few hook
fields. When a session or a subagent stops, and before a compact, it also sends the end of the
transcript (at most 24 000 characters). Secrets in that text are replaced before it leaves your
computer. The full transcript is never sent. To send no transcript text, set
`RECONNECT_SEND_TRANSCRIPT_TAIL=off` in your environment.

## Update

Updates come by themselves when auto-update is on. To turn it on: `/plugin` > Marketplaces >
`reconnect-plugins` > Enable auto-update. To update now, type this in a terminal:

```sh
claude plugin marketplace update reconnect-plugins
```

## Uninstall

```text
/plugin uninstall reconnect@reconnect-plugins
```

## When something goes wrong

The plugin never shows errors in Claude Code. It writes them to `~/.reconnect/hooks.log`. When it
says "Token refused. Run /reconnect:connect.", type `/reconnect:connect` again. When
Reconnect cannot be reached, events wait in `~/.reconnect/queue.jsonl` and are sent later.
