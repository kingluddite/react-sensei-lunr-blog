---
title: Add Eslint
date: "2020-03-22T23:46:37.121Z"
description: Take the pain out of adding eslint
---

## Add these dev dependencies
```
$ npm install -D eslint eslint-config-airbnb eslint-config-prettier eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react gatsby-plugin-eslint prettier eslint-plugin-html
```

## Create `.eslintrc` in the root of your project
`.eslintrc`

```
{
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "trailingComma": "es5",
      // "bracketSpacing": false,
      "jsxBracketSameLine": true,
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "comma-dangle": ["error", "only-multiline"],
    "react/no-danger": "off",
    "no-underscore-dangle": [0],
    "react/prop-types": 0,
    "react/jsx-boolean-value": 0,
    "no-console": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "consistent-return": 0,
    "array-callback-return": 0,
  },
  "plugins": [
    "flowtype",
    "react",
    "jsx-a11y",
    "import",
    "prettier",
    "html"
  ],
  "settings": {
    "ecmascript": 7,
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "modulesDirectories": ["node_modules"]
      }
    }
  },
  "globals": {
    "__DEVELOPMENT__": true,
    "__CLIENT__": true,
    "__SERVER__": true,
    "__DISABLE_SSR__": true,
    "__DEVTOOLS__": true,
    "socket": true,
    "mixpanel": true,
    "Raven": true,
    "isCallback": true,
    "returnsPromise": true,
    "webpackIsomorphicTools": true
  }
}
```

## Add .prettierrc
`.prettierrc`

```
{
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## Add .prettierignore
`.prettierignore`

```
.cache
package.json
package-lock.json
public
```

## For Gatsby JS
* Install the `gatsby-plugin-eslint`
* [docs for installing gatsby and eslint](https://github.com/mongkuen/gatsby-plugin-eslint)

`$ npm install  https://github.com/mongkuen/gatsby-plugin-eslint`

## Install ESLint and eslint-loader (we did this above already)

`$ npm install --save-dev eslint eslint-loader`

## Add into to `gatsby-config.js`

`gatsby-config.js`

```
// MORE CODE

module.exports = {
  plugins: [
    'gatsby-plugin-eslint'
  ]
}

// MORE CODE
```

## Disable an eslint rule
* Sometimes you need to turn off an eslint rule

### Turn off one line
```
// MORE CODE

  /*eslint-disable */
  const rootPath = `${__PATH_PREFIX__}/`
  /* eslint-enable */

// MORE CODE
```

### Turn off eslint for file
* Place at top of file

```
/* eslint no-use-before-define: 0 */  // --> OFF
```

### Ignore specific files/directories with eslint
* You can tell ESLint to ignore specific files and directories by creating an `.eslintignore` file in your project’s root directory:

`.eslintignore`

```
build/*.js
config/*.js
bower_components/foo/*.js
```

* The ignore patterns behave according to the .gitignore specification (Don't forget to restart your editor)
