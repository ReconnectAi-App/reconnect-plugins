---
description: Connect this computer to Reconnect (opens your browser)
allowed-tools: Bash(node:*)
---

Connect this computer to Reconnect.

Use the Bash tool to run exactly this command, with a timeout of 300000 ms:

```sh
node "${CLAUDE_PLUGIN_ROOT}/dist/cli.js" connect
```

The command opens the browser. The user signs in to Reconnect there and clicks **Connect**. Wait
for the command to end.

Then tell the user only the last line of the output. Do not add other text.

Never read, print or show `~/.reconnect/config.json`. It holds the device token.
