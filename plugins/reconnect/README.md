# Reconnect plugin for Claude Code

This plugin sends your Claude Code session events to Reconnect. Reconnect then shows each lane, so
you can get back into any lane in about 30 seconds. The plugin never blocks Claude Code.

## What you need

- Node.js 22 or later. Type `node -v` in a terminal to check.
- The address of your Reconnect server. Ask the person who runs Reconnect.

## Install

In Claude Code, type these two commands:

```text
/plugin marketplace add andres-carmona/reconnect-plugins
/plugin install reconnect@reconnect-plugins
```

Claude Code asks for two values:

- **Reconnect address**: for example `http://localhost:4317`, or your Tailscale name.
- **Reconnect token**: leave it empty. You connect this computer in the next step.

If your organization set up Reconnect for you, leave both empty and stop here.

Restart Claude Code. Then type:

```text
/reconnect:connect
```

Your browser opens Reconnect. Click **Connect**, then go back to Claude Code. Your lane shows in
Reconnect after your next session starts. If Reconnect runs on another computer, start Claude Code
one time with `RECONNECT_URL=<address> claude` before you type `/reconnect:connect`.

To check the connection, type `/reconnect:status`. To remove this computer, open Reconnect >
Settings > Connected computers.

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
