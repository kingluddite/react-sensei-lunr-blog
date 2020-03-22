---
title: Modular Sequelize with Express and MySQL 
date: "2020-01-23T23:46:37.121Z"
description: Quickly get modular when using Sequelize with Express and MyS
---

## Create a separate file to hold your db information

`config/database.js`

```javascript
const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
```

## Point to the Database information on the server file

`app.js`

```javascript
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Database
const db = require('./config/database');

// test db connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the Database');
  });

const app = express();
const PORT = process.env.PORT || 5000;

// set up home route
app.get('/', (req, res) => res.send('INDEX'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, console.log(`Server started on port ${PORT}`));
```

## Run the server to test if it works
* Make sure you have your scripts setup inside `package.json`
* Make sure you installed you node modules
* Make sure you tested your connection to your MySQL Sequelize Database

