---
title: Simple Sequelize Create record
date: "2020-01-23T23:46:37.121Z"
description: Quickly test add record using Sequelize (using MySQL), Express, Node
---

## Set up the files

## Your Database
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

## Your Express server
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

## Add your Model
`models/Gig.js`

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
  description: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },
});

module.exports = Gig;
```

## Your route
* You never want to add data to a server through a GET request but this is a nice way to get up and running before you make your code more modular

`routes.js`

`routes/gigs.js`

```javascript
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/', (req, res) =>
  Gig.findAll()
    .then(gigs => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

// Add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'Looking for a Node developer',
    technologies: 'react, node, html, css',
    budget: '$3000',
    description: 'Consectetur quae commodi saepe obcaecati necessitatibus? Amet quod voluptas fuga consequatur inventore. Molestias minima consequuntur necessitatibus repellat temporibus Ullam facere nisi magni veritatis laudantium Ab culpa ipsum quis eligendi laudantium',
    contact_email: 'john@fake_email.com'
  };

  // pull out the variables for easy access using desctructuring
  let = { title, technologies, budget, description, contact_email } = data;
  // Insert into table
  // Gig.create({
  //   title: title,
  //   technologies: technologies,
  //   budget: budget,
  //   description: description,
  //   contact_email: contact_email
  // })
  // We can use shorthand with ES6 "property value shorthand syntax"
  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email
  }).then((gig) => {
    // after adding redirect user to `/gigs`
    res.redirect('/gigs')
  }).catch((err) => {
      console.log(err)
  })
});

module.exports = router;
```

## Take your code for a test drive
* Make sure you installed your node modules
* Visit `http://localhost:5000/gigs/add`
* Terminal will show you SQL sequelize used to add your record
* Verify that your record is in your Database table

![record in Database table](https://i.imgur.com/GuJCOVZ.png)
