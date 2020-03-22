---
title: Quickly set up modular routes for Express
date: "2020-01-23T23:46:37.121Z"
description: Quickly get up and going with modular routes in Express
---

## Setup your Express server
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

## Then point to your modular routes file
`routes/gig.js`

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('GIGS'));

module.exports = router;
```

## Test routes
* Run server
* Visit the home route `http://localhost:5000/` and you should see `INDEX`
* Visit `http://localhost:5000/gigs` and you should see `GIGS`
