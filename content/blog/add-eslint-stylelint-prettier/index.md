---
title: Add Eslint, Stylelint and Prettier
date: "2020-05-03T23:46:37.121Z"
description: Add eslint to alert you to code errors and stylelint to format css
---

## Add eslint
* Create `eslintrc` in the root of your project

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
    "prettier"
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

## Add Prettier
 
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

## Add stylelint
* Create `.stylelintrc.json` in root of your project

`.stylelintrc.json`

```
{
  "extends": "stylelint-config-standard",
  "plugins": [
		"stylelint-order"
	],
	"rules": {
		"order/order": [
			"custom-properties",
			"declarations"
		],
    "order/properties-order": [
      { "properties": [ "content", "quotes" ] },

      { "properties": [ "display", "visibility" ] },
      { "properties": [ "position", "z-index", "top", "right", "bottom", "left" ] },
      { "properties": [ "box-sizing" ] },
      { "properties": [ "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "align-content", "align-items", "align-self", "justify-content", "order" ] },
      { "properties": [ "width", "min-width", "max-width", "height", "min-height", "max-height" ] },
      { "properties": [ "margin", "margin-top", "margin-right", "margin-bottom", "margin-left" ] },
      { "properties": [ "padding", "padding-top", "padding-right", "padding-bottom", "padding-left" ] },
      { "properties": [ "float", "clear" ] },
      { "properties": [ "overflow", "overflow-x", "overflow-y" ] },
      { "properties": [ "clip", "zoom" ] },
      { "properties": [ "columns", "column-gap", "column-fill", "column-rule", "column-span", "column-count", "column-width" ] },
      { "properties": [ "table-layout", "empty-cells", "caption-side", "border-spacing", "border-collapse", "list-style", "list-style-position", "list-style-type", "list-style-image" ] },

      { "properties": [ "transform", "transform-origin", "transform-style", "backface-visibility", "perspective", "perspective-origin" ] },
      { "properties": [ "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay" ] },
      { "properties": [ "animation", "animation-name", "animation-duration", "animation-play-state", "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction" ] },

      { "properties": [ "border", "border-top", "border-right", "border-bottom", "border-left", "border-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width" ] },
      { "properties": [ "border-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style" ] },
      { "properties": [ "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius" ] },
      { "properties": [ "border-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color" ] },
      { "properties": [ "outline", "outline-color", "outline-offset", "outline-style", "outline-width" ] },
      { "properties": [ "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset", "stroke" ] },

      { "properties": [ "opacity" ] },
      { "properties": [ "background", "background-color", "background-image", "background-repeat", "background-position", "background-size", "box-shadow", "fill" ] },

      { "properties": [ "color" ] },
      { "properties": [ "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-effect", "font-style", "font-variant", "font-weight" ] },
      { "properties": [ "font-emphasize", "font-emphasize-position", "font-emphasize-style" ] },
      { "properties": [ "letter-spacing", "line-height", "list-style", "word-spacing" ] },
      { "properties": [ "text-align", "text-align-last", "text-decoration", "text-indent", "text-justify", "text-overflow", "text-overflow-ellipsis", "text-overflow-mode", "text-rendering", "text-outline", "text-shadow", "text-transform", "text-wrap", "word-wrap", "word-break" ] },
      { "properties": [ "text-emphasis", "text-emphasis-color", "text-emphasis-style", "text-emphasis-position" ] },
      { "properties": [ "vertical-align", "white-space", "word-spacing", "hyphens" ] },
      { "properties": [ "src" ] },

      { "properties": [ "tab-size", "counter-reset", "counter-increment", "resize", "cursor", "pointer-events", "speak", "user-select", "nav-index", "nav-up", "nav-right", "nav-down", "nav-left" ] }
    ]
	}
}
```

* Add these as your dev-dependencies

`package.json`

```
// MORE CODE

  "devDependencies": {
    "node-sass": "^4.14.0",
    "stylelint": "^13.2.1",
    "stylelint-config-standard": "^20.0.0",
    "stylelint-order": "^4.0.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.1.0",
    "eslint-config-prettier": "^6.10.1",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.2"
  },

// MORE CODE
```

