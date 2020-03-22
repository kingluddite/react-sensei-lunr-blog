---
title: Sequelize Models
date: "2020-01-23T23:46:37.121Z"
description: Quickly setup Sequelize Models
---

## About Models
* Common naming convention to capitalize model file name

## Create simple Model
```javascript
const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING,
  },
  technologies: {
    type: Sequelize.STRING,
  },
  budget: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },
});

module.exports = Gig;
```

## Inside routes folder pull in Database and Model to use Express Router
* This will find all records in the gigs table and if you don't have any then you will get an empty array but also you will see that Sequelize outputs the SQL query used which is 

```SQL
SELECT `id`, `title`, `technologies`, `budget`, `contact_email`, `createdAt`, `updatedAt` FROM `gigs` AS `gig`;
```

`routes/gigs.js`

```javascript
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// GET request to /gigs
router.get('/', (req, res) =>
  // grab all records from the gigs table
  Gig.findAll()
     // findAll returns a Promise
    .then(gigs => {
      // log out all the gigs
      console.log(gigs);
      // send a successful 200 server status to the page response
      res.sendStatus(200);
    })
    // in case we have any errors, log them
    .catch(err => console.log(err))
);

// never forget to export or we can't use this code anywhere else
module.exports = router;
```

## Here is our express server pointing to the modular routers folder

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

// Routes
app.use('/gigs', require('./routes/gigs'));

// set up home route
app.get('/', (req, res) => res.send('INDEX'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, console.log(`Server started on port ${PORT}`));
```

## Run the Express server
* Visit `http://localhost:5000/gigs` and you will see `OK` in the browser and if you look at the Terminal you will see an empty array `[]` and that is correct if your Database table is empty and it will also output the SQL used

![first request to Sequelize Database table](https://i.imgur.com/n4FPj6M.png)
