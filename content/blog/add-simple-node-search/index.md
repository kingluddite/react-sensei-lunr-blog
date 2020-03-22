---
title: Add Simple Node Search
date: "2020-01-31T23:46:37.121Z"
description: Easy way to use Handlebars to search your docs
---

## Link your handlebars doc to a new search route
`index.handlebars`

* **note** It will be a GET request (only would be POST if we were changing or adding data to the server - we are just "requesting" data from the server)

```javascript
  <section id="search" class="search-wrap">
    <h1>Find A Coding Gig</h1>
    <form action="/gigs/search" class="search-form">
      <i class="fas fa-search"></i>
      <input type="search" name="term" placeholder="Javascript, PHP, Rails, etc...">
      <input type="submit" value="Search">
    </form>
  </section>
```

* **note** The input field above has a `name` of **term** and we need to grab onto that

`routes/gigs.js`

```javascript
// MORE CODE

// Search for gigs
// note: we are already in the gigs route by being in the gigs file so we just use /search
// note: To use the SQL "like" operator in sequelize you need to use and import the OP object
router.get('/search', (req, res) => {
  let { term } = req.query;

  // Make lowercase for case insensitive search
  term = term.toLowerCase();

  Gig.findAll({ where: { technologies: { [Op.like]: `%${term}%` } } })
    .then(gigs => res.render('gigs', { gigs }))
    .catch(err => console.log(err));
});

// MORE CODE
```

### OP
* We are using the SQL "LIKE" in Sequelize so we need to import the following:

`routes/gigs.js`

```javascript
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');
const Sequelize = require('sequelize'); // add this line
const Op = Sequelize.Op; // add this line

router.get('/', (req, res) =>
```

## Test it out
* You should be able to enter a technology and if a match is found 1 or more technologies will appear in the search results page
* The search term is captured from the name attribute value in the handlebars server side template and we use that term when we query the Database

