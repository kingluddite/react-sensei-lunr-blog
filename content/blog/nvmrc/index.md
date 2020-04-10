---
title: Add .nvmrc
date: "2020-04-09T23:46:37.121Z"
description: Add Node version to your project
---

I was pushing my gatsby project to Netlify and was getting an error that the node version was older than the one Gatsby needed

[docs for creating a .nvmrc](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript)

* So in the root of your project (base directory) create a .nvmrc

## Contents of .nvmrc
```
12
```

* This is all you need in the the file. When you push it to Netlify their servers will read this file and install the latest 12 version of Node.js

