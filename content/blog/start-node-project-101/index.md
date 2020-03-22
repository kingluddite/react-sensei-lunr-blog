---
title: Start a node project
date: "2020-01-23T23:46:37.121Z"
description: Essentials for starting a new node project 
---

## Create your root app folder
`$ mkdir myApp`

## Change into that directory
`$ cd myApp`

## Initialize Git
`$ git init`

## Create a `.gitignore` file
`$ touch .gitignore`

* Add `node_modules` to the `.gitignore`

`$ echo "node_modules" >> .gitignore`

* You never want to have `node_modules` in your GitHub repo!

## Create a remote GitHub repo
* On Mac OS you can speed up this process using `Hub`
* Or do it the longer way of creating a new repo on GitHub and syncing your local app with Github

## Initialize npm
`$ npm init`

* You will get a series of questions, while you can click enter to accept all defaults or just run `$ npm init -y` to bypass the questions I suggest going through the questions for production apps
* The default name needs to be lowercase and have no spaces, use dashes instead of spaces
* Give the app a short description of what its purpose is
* You can use the default entry point of `index.js` or another popular entry point name is `app.js` (personal preference)
* Because you defined a remote GitHub this should automatically plug in your GitHub repo URL
* Enter your name as author
* Enter `MIT` as the license (or whatever other license you want to use)

## Install all your npm modules
`$ npm install mysql2 express express-handlebars` (or whatever you need)

## Install nodemon locally to your project (As a dev dependency)
`$ npm i nodemon -D`

* `i` is a shortcut for `install`
* `-D` is a shortcut for saving npm module as a dev dependency

## Update `package.json` with start scripts for production and development

`package.json`

* Below is a fragment of my `package.json` - you can not put comments in a JSON file

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

* Now you can start your app in development with `npm run dev`
* And in production it will start with `$ npm run start`



