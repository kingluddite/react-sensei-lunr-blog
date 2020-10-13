---
title: Downgrade Node Version
date: "2020-10-13T23:46:37.121Z"
description: Downgrading Node on a Mac where node was installed using Homebrew
---

## Requirements
* Install Homebrew
* These instructions are for Mac only

## Summary
* I wanted to use Strapi with Gatsby but [strapi only uses version 12](https://strapi.io/documentation/v3.x/installation/cli.html#step-1-make-sure-requirements-are-met) of Node and I had version 14 installed. I needed to downgrade to Node version 12 to get Strapi to work
* This was the specific info that forced me to downgrade my node verison

> Strapi only requires Node.js. The current recommended version to run Strapi is Node v12 (please note that Node v14 is not supported at this time and does not go into LTS until the end of October 2020).

## Instructions
* Check the node version you currently have:

`$ node -v`

* Search for available node versions

`$ brew search node`

* Unlink from current version

`$ brew unlink node`

* You may get instructions in the terminal for this to work

![node instructions](https://i.imgur.com/CbAlUZq.png)

* I ran --force option

`$ brew link node@12 --force`

* I am using `.zshrc` so I need to add a command to my `.zshrc` file

`$ echo 'export PATH="/usr/local/opt/node@12/bin:$PATH"' >> ~/.zshrc`

* That command will not take affect until you source it

`$ source ~/.zshrc`

* Type `$ node -v` in the terminal and you should see 

`v12.19.0.` (Or whatever version of node you downgraded to)

## Conclusion
* Now after successfully downgrading my version of node from node 14 to node 12 I can successfully install strapi

## Troubleshooting
* If try to run `npm` or `npx` or `node` in another terminal and get "command not found", close the terminal (and it's session) open an new one and you should see the commands now are working
