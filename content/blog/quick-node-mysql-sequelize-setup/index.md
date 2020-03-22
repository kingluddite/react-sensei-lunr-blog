---
title: Quick Express with MySQL and Sequelize Setup
date: "2020-01-23T23:46:37.121Z"
description: Get quickly started with Express server connecting to a MySQL Database using Sequelize
---

```javascript
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// db stuff
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('codegig', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

// test db connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the Database');
  });

const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up prod and dev PORT
const PORT = process.env.PORT || 5000;


// set up home route
app.get('/', (req, res) => res.send('INDEX'));

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.listen(PORT, console.log(`Server started on port ${PORT}`));
```

