---
description: Connect this computer to Reconnect (opens your browser)
argument-hint: '[server address, for example https://api.reconnect-ai.me]'
allowed-tools: Bash(node:*)
---

Connect this computer to Reconnect.

The user typed this server address (it can be empty): $ARGUMENTS

Use the Bash tool to run one command, with a timeout of 300000 ms:

- When the address above is empty, run exactly:

  ```sh
  node "${CLAUDE_PLUGIN_ROOT}/dist/cli.js" connect
  ```

- Else run exactly this, with the address as one argument inside single quotes, as the user typed
  it. Do not change, fix or complete the address. The CLI checks it, and refuses anything that is
  not an http:// or https:// address:

  ```sh
  node "${CLAUDE_PLUGIN_ROOT}/dist/cli.js" connect --url '<address>'
  ```

  If the address contains a single quote (`'`), do not run any command. Tell the user only: "Not
  connected. The address must start with http:// or https://, for example
  https://api.reconnect-ai.me or http://localhost:4317."

The command opens the browser. The user signs in to Reconnect there and clicks **Connect**. Wait
for the command to end.

Then tell the user only the last line of the output. Do not add other text.

Never read, print or show `~/.reconnect/config.json`. It holds the device token.
