---
title: Solution for Mac XCode issues
date: "2020-05-03T23:46:37.121Z"
description: Use this when you have Xcode issues
---

## Problem
As a developer on a Mac you will have XCode issues from time to time.

## Solution
* Most like you just have to update it
* A large portion of users are landing on this answer in an attempt to update the Xcode Command Line Tools. The easiest way to achieve this is by removing the old version of the tools, and installing the new one

`$ rm -rf /Library/Developer/CommandLineTools`

`$ xcode-select --install`

A popup window will appear and guide you through the rest of the process. It takes about 5 minutes to complete

* If you try to install without updating first you'll get this annoying error

```
$ xcode-select --install

xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```

* [source](https://stackoverflow.com/questions/34617452/how-to-update-xcode-from-command-line)

### Here is how you install Xcode
* [install-command-line-tools-on-macos-catalina](https://medium.com/flawless-app-stories/install-command-line-tools-on-macos-catalina-anansewaa-com-6f8c63120fd8)


