---
title: .gitignore
date: "2020-03-24T23:46:37.121Z"
description: What is .gitignore for?
---

## The purpose of .gitignore
* `node_modules` is something we never code
* We don't want to share our app with team members as it is huge
* We can easily generate it with `$ npm install` (`$ npm i` - shortcut)
* So when you pull github projects you'll never see `node_modules`
* So you need to create a `.gitignore` file with `node_modules` inside it
    - This keeps node_modules in your project locally but makes sure git ignores it and when you push your files to github, node_modules doesn't go with the other files
    - When team members clone your project and pull the latest files, they won't see `node_modules`
    - To get it in their repo, they just `$ npm install` and all the dependencies listed in `package.json` will be installed on your team member's local machine
    - You don't need to specify the version numbers because all of that info lives in `package.json`
    - This saves us and our team a ton of time passing our project around

## Test it out
* Delete `package-lock.json` and `node_modules`
* Type `$ npm install`
* You will see your `node_modules` directory is created as well as a fresh new copy of `package-lock.json`
