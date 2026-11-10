---
description: Show if this computer is connected to Reconnect
allowed-tools: Bash(node:*)
---

Show the Reconnect connection status of this computer.

Use the Bash tool to run exactly this command, with a timeout of 300000 ms:

```sh
node "${CLAUDE_PLUGIN_ROOT}/dist/cli.js" status
```

Then tell the user only the last line of the output. Do not add other text.

Never read, print or show `~/.reconnect/config.json`. It holds the device token.
