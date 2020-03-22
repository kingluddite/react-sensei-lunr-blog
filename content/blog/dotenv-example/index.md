---
title: Dotenv Example
date: "2020-01-22T23:46:37.121Z"
description: This is how you install, setup and use dotenv to keep secret stuff secret
---

## Install dotenv
`$ npm install dotenv`

## Create `.env` file
* **note** Make sure to create it in the root of your project

`.env`

```
DB_PASSWORD=password
```

## Add `.env` to your `.gitignore` file

```
node_modules
.env
```

`sample.js`

```javascript
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PASSWORD,
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});
```

