---
title: Vim Surround Plugin
date: "2020-01-21T23:46:37.121Z"
description: Surround.vim is all about "surroundings" parentheses, brackets, quotes, XML tags, and more.  The plugin provides mappings to easily delete, change and add such surroundings in pairs.  While it works under Vim 6, much of the functionality requires Vim 7.
---

## Vim Surround
* Is a useful plugin for easily surrounding tags or text with what you want

This plugin is very powerful for HTML and XML editing, a niche which currently seems underfilled in Vim land.  (As opposed to HTML/XML *inserting*, for which many plugins are available).  Adding, changing, and removing pairs of tags simultaneously is a breeze.

### Install Vim Surround
* [repo](http://github.com/tpope/vim-surround)
* Add this plugin to `.vimrc`

`Plugin 'tpope/vim-surround'`

### Let's play around with vim surround
* **note** Press `cs"'` means type `c`, `s`, `"`(double quote), `'`(single quote) inside

## Keyboard Shortcuts 
| Command | Description |
| ------- | -------- |
| `csw<strong>` | Will turn `word` into `<strong>word</strong>` | 
| `ysiw}` | Makes hello become `{hello}` | 
| `ds"` | Makes `"hello"` become `hello` | 
| `cs"'` | Makes `"Hello world!"` become `'Hello world!'` | 
| `cs'<q>` | Makes `'Hello world!'` become `<q>Hello world!</q>` | 
| `cst"` | Makes `<q>Hello world!</q>` become `"Hello world!"` |
| `ds"` | Removes delimiters entirely to become `Hello world!` |
| `ysiw]` | `Hello world!` becomes `[Hello] world!` (note: `iw` is a text object) |
| `cs]{` | `[Hello] world!` becomes `{ Hello } world!` |
| `cs]}` | `[Hello] world!` becomes `{Hello} world!` |
| `yssb` | `{Hello} world!` becomes  `({ Hello } world!)` |
| `yss)` | `{Hello} world!` becomes  `({ Hello } world!)` |
| `ds{ds)` | `({ Hello } world!)` becomes `Hello world!` |
| `ysiw<em>` | `Hello world!` becomes `<em>Hello</em> world!` |
| `V` |  This turns vim into linewise visual mode |
| `VS<p>` | `<p>Hello world!</p>` |
| `.` | This "dot" command will work with `ds`, `cs` and `yss` if you install `repeat.vim` plugin |
