---
title: Using NerdTree with Vim
date: "2020-01-21T23:46:37.121Z"
description: The NERD tree, a plugin for Vim, allows you to explore your filesystem and to open files and directories. It presents the filesystem to you in the form of a tree which you manipulate with the keyboard and/or mouse. It also allows you to perform simple filesystem operations.
---

## NerdTree
| Command | Description |
| ------- | -------- |
| `r` | Refresh current directory listing |
| `R` | Refresh root directory listing |

`:help NERDTreeMappings`

* **note** If windows are open you can maximize current and minimize all others with `Ctrl-Wo`

```
(Ctrl-Wo means holding Ctrl press W, and then o)
```

### Split Current window
* A better way: `:tab sp` splits current window into new tab
* To close current window and return to splits `ctrl` + `w` and press `c`

| Command | Description |
| ------- | -------- |
| `t` | Open the selected file in a new tab |
| `i` | Open the selected file in a horizontal split window |
| `s` | Open the selected file in a vertical split window |
| `I` | Toggle hidden files |
| `m` | Show the NERD Tree menu |
| `R` | Refresh the tree, useful if files change outside of Vim |
| `?` | Toggle NERD Tree's quick help |

### Directories
| Command | Description |
| ------- | -------- |
| `o` | open & close |
| `O` | recursively open |
| `x` | close parent |
| `X` | close all children recursively |
| `e` | explore selected director |


### Tree navigation
| Command | Description |
| ------- | -------- |
| `p` | Go to parent |
| `P` | Go to first child |
| `K` | Go to first child|
| `J` | Go to last child |

### Refresh NerdTree
| Command | Description |
| ------- | -------- |
| `r` | Refresh current directory |
| `R` | refresh root directory's listing |

* If you created a file/folder and Nerdtree isn't showing it to you
    - You need to refresh Nerdtree

### Adding files using Nerdtree
| Command | Description |
| ------- | -------- |
| `m` | Roggles menu open/closed |
| `a` | To add a file |

* If there is no `/` it's a file
* If there is a  `/` it's a folder
* After adding refresh Nerdtree with `r`
* You can also delete, rename and move files/directories
