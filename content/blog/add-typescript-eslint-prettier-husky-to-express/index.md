---
title: Dev tools boilerplate
date: "2020-03-22T23:46:37.121Z"
description: Add TypeScript, ESLint, Prettier, Husky To Express app
---

## Setup Node.js project with Typescript, ESLint, Prettier and Husky
### Add Typescript
`$ npm i typescript ts-node -D`

* `typescript` is a core library that helps to compile the TypeScript code to valid JavaScript
* `ts-node` is a utility library that helps to run a development server written using TypeScript directly from the termina

### Add Typescript config file to project root
`$ touch tsconfig.json`

* These are the minimal settings of typescript compiler `tsc`

```
{
  "compilerOptions":
    {
      "target": "es2018",
      "module": "commonjs",
      "rootDir": "./",
      "outDir": "dist",
      "sourceMap": true,
      "esModuleInterop": true
      "strict": true
    },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"],
}
```

* The `compilerOptions` is a mandatory field that needs to be specified
    - The options used in the config above are:
        + `target` allows us to specify the target JavaScript version that compiler will output
            * If you change `target` to `esnext` - this means that TypeScript will not perform any down transpiling of modern JavaScript features
            * This way you can keep using tools like Babel to take care of your transpiling
        + `allowJs: true` - This means the TypeScript compiler will pick up any JavaScript files it will find and run them through the TypeScript compiler
        + `module` allows us to use a module manager in the compiled JavaScript code
            * The `commonjs` is supported and is a standard in `Node.js`
        + `rootDir` is an option that specifies where the TypeScript files are located inside the `Node.js` project
        + `outDir` specifies where the output of the compiled is going to be located
        + `esModuleInterop` allows us to compile ES6 modules to commonjs modules
        + `strict` is an option that enables strict type-checking options
            * `"strict": false` - In order to gracefully move our project to TypeScript without having TS immediately yell at you, we'll disable strict mode for now
        + **note** There are other options but this is a good start

## Install declaration files for Node.js and Express
* Declaration files are predefined modules that describe the shape of JavaScript values (the types present) for the TypeScript compiler
* Type declarations are usually contained in files with a `.d.ts` extension
* These declaration files are available for all libraries that are originally written in JavaScript and not TypeScript
* To install type definitions for `Node.js` and `Express`, run the below command

`$ npm i -D @types/node @types/express`

## To have a `src` directory or not? (your choice at the end of the day)
* Many projects are all in a `src` folder I'll change this up and put all my code in the project root folder

```
{
  "compilerOptions":
    {
      "target": "es2018",
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true,
    },
  "include": ["./**/*.ts"],
  "exclude": ["node_modules"],
}
```

## Add typescript build script
`package.json`

```
// MORE CODE

{
  "scripts":{
    "build": "tsc"
  }
}
// MORE CODE
```

## How to compile code using Typescript
`$ npm run build`

## Create an Express server with .ts extension
* Now you can easily convert server code in `server.js` to `server.ts` file
* That is the first step: Rename the file to `server.ts`
    - The `.ts` extension is a file extension to determine the TypeScript files that are compiled to JavaScript files later when building the server
* Open `server.ts` file
    - You can now use the import statements from ES6
    - The only required package right now in the server.ts file is express
* Replace it with the following statement:

```
import express from 'express';
// rest of the code remains same
const app = express();
// MORE CODE
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
```

* The TypeScript compiler will handle the conversion of import statements to require statements

## Watching file changes with nodemon
* `nodemon` is another development related utility library that saves time

### Install nodemon
* `nodemon` is a tool that helps develop `Node.js` based applications by automatically restarting the Node application when file changes in the directory are detected 

`$ npm i -D nodemon`

## To use nodemon
* Add a start script in the `package.json` file as specified below:

```
// MORE CODE

"scripts": {
    "start": "nodemon server.ts",
},
// MORE CODE
```

* Now, go back to the terminal window, and run `$ npm start`

## Compile a TypeScript project
* To compile a TypeScript project to a valid JavaScript one, start by declaring a new script called build inside the `package.json` file:

`package.json`

```
// MORE CODE

"scripts": {
    "build": "tsc --project ./",
},
// MORE CODE
```

* TypeScript provides a command to compile the code called `tsc`
    - This command demands a flag to specify as to what to compile
    - The `--project` (shorthand: -p) is used to specify the project directory that the compiler can pick the code files from to compile to valid JavaScript
    - The `./` specifies the root project

# From the terminal window, run the build command to compile the code:
`$ npm run build`

* There is a new `dist` directory created after this command executes successfully
* Inside this new `dist` directory, there is the TypeScript code compiled to valid JavaScript

## ESLint
* The de-factor standard these days for typescript is ESLint
* Partnering `ESLint` with `prettier` improves consistency and productivity of a development team which will look something like:

```
// MORE CODE

'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const app = express_1.default();
const PORT = 8000;
app.get('/', (req, res) =>
  res.send('Express + TypeScript Server is awesome!!!')
);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
// MORE CODE
```

* **note** If you specify any other directory named as the value of the property `outDir` in the `tsconfig.json` file that name of the directory would have reflected here instead of `dist`

### Adding the dev dependencies

`$ npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`

* **note** ESLint does not support typescript out of the box
    - Fortunately we are able to add the typescript support by these two packages:
        + @typescript-eslint/eslint-plugin
        + @typescript-eslint/parser
        + (thanks to the ESLint team's modular design)

### The next thing is to create a .eslintrc file
* It does not have a file extension but the default is JSON format:
* Add in root of project

`$ touch .eslintrc`

* This tells the ESLint linter to:
    - Use Typescript parser
    - Use Recommended Typescript preset for linting
    - Use ES2018 and module sourceType to match `ts.config` settings

```
{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parserOptions": { "ecmaVersion": 2018, "sourceType": "module" },
  "rules": {}
}
```

* You can run the linter with `$ npm run line`
* You can format the code with `$ yarn format`

## Prettier
* Prettier drastically improves team consistency by automatically formatting the code

`$ npm i prettier -D`

* Configure prettier by adding a `.prettierrc` to the root of the project with the following content

`$ touch .prettierrc`

`.prettierrc`

* Ensure semi colon at the end of each statement
* Ensure trailing comma at the end of each statement
* Convert all double quotes to single quotes where applicable
* Break into new lines for all lines greater than 120 characters wide
* Ensure tab width is 2 characters

```
{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 120,
    "tabWidth": 2
}
```

## Add Husky
* If you find yourself committing without linting this will lead to failure CI builds and wasted time
* **Best practice** Lint before commit
* `Husky` is a very popular plugin to let you accomplish this

### Install husky
`$ npm i husky -D`

* Add it to your `package.json`

`package.json`

* `Husky` does not have its own configuration files so we add its config into `package.json`

```
// MORE CODE

{
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  }
}
// MORE CODE
```

* Next time you commit, `husky` would exit the git commit when the code does not pass linting

## After deploying you want to change the main file to the dist folder like this
![main file pointing to dist folder](https://i.imgur.com/TPgg7Vv.png)

* From this:

```
// MORE CODE

"main": "src/index.js",
 "scripts": {

// MORE CODE
```

* To this:

```
// MORE CODE

"main": "src/index.ts",
 "scripts": {
    
// MORE CODE
```

## Now a deeper dive
* After accomplishing all that [read this article](https://www.twilio.com/blog/move-to-typescript#you-might-use-ts) and it will take you to the next steps in getting all of this to work nicely

## Troubleshooting
* If you get an error like: `Could not find a declaration file for module 'module-name'. '/path/to/module-name.js' implicitly has an 'any' type` here are two solutions:
    * When a module is not yours - try to install types from `@types`:

`$ npm i -D @types/module-name`

* If the above install errors - try changing import statements to require:

```
// import * as yourModuleName from 'module-name';
const yourModuleName = require('module-name');
```

## Resources
* https://gist.github.com/silver-xu/1dcceaa14c4f0253d9637d4811948437
* https://blog.logrocket.com/typescript-with-node-js-and-express/
* https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
* https://www.twilio.com/blog/move-to-typescript#you-might-use-ts
