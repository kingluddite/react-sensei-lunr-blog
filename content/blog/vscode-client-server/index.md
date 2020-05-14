---
title: VS Code Server/Client BG color settings
date: "2020-05-14T23:46:37.121Z"
description: Make working in VS Code in server and client visually obvious
---

## VS Code client
* Make VS Code client yellow

```json
{
  "workbench.colorCustomizations": {
    "titleBar.activeForeground": "#000",
    "titleBar.inactiveForeground": "#000000CC",
    "titleBar.activeBackground": "#FFC600",
    "titleBar.inactiveBackground": "#FFC600CC"
  }
}
```

### backend - .vscode/settings.json
* Make VS Code server pink
```json
{
  "workbench.colorCustomizations": {
    "titleBar.activeBackground": "#FF2C70",
    "titleBar.inactiveBackground": "#FF2C70CC"
  }
}
```
