---
title: Add Handlebars to Express
date: "2020-01-24T23:46:37.121Z"
description: Quickly add Handlebars to Express app
---

## Add these 2 lines (see below)

```javascript
// Adding Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
```

## And place inside your Express server file

```javascript
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Database
const db = require('./config/database');

// Adding Handlebars
app.engine('handlebars, exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// test db connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the Database');
  });

const app = express();

// Routes
//  Index 
app.get('/', (req, res) => res.send('INDEX'));
//  Gigs
app.use('/gigs', require('./routes/gigs'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// assign Port for prod and dev environments
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
```

## Create `views` folder
* Inside that a folder called `layout`
* Inside that a file called `main.handlebars` (We name it `main` because in our Express server file we said the `app.engine('handlebars', exphbs({ defaultLayout: 'main' }));`
* **note** Use this exact folder structure as Handlebars and Express require it to work

![folder structure](https://i.imgur.com/akWclHc.png)

```handlebars
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossorigin="anonymous">
  <link rel="stylesheet" href="/css/style.css">
  <title>CodeGig</title>
</head>

<body>
  <header>
    <h2><a href="/"><i class="fas fa-code"></i>
        CodeGig</a></h2>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/gigs">All Gigs</a>
        </li>
        <li>
          <a href="/gigs/add">Add Gig</a>
        </li>
      </ul>
    </nav>
  </header>

    <div class="container">

      {{{body}}}}

    </div>
</body>

</html>
```

## The router page

* Note you will get an error if you install handlebars version 4.6.0, to avoid this error install an earlier version

`$ npm i express-handlebars 4.5.0`

`routers/gigs.js`

```javascript
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');
const Sequelize = require('sequelize');

router.get('/', (req, res) =>
  Gig.findAll()
    .then(gigs => {
      console.log(gigs);
      res.render('gigs', {
        gigs
      })
    })
    .catch(err => console.log(err))
);

// Add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'Angular Sites',
    technologies: 'angular, node, html',
    budget: '$6000',
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
    res.redirect('/gigs')
  }).catch((err) => {
      console.log(err)
  })
});

module.exports = router;
```

`views/gigs.handlebars`

## Here is the gigs Handlebars template
```handlebars
<h1>Gigs Template</h1>

  <section id="gigs" class="container">
    <h1>All Gigs</h1>

    {{#each gigs}}
    <div class="gig">
      <h3>{{this.title}}</h3>
      <p>{{description}}</p>
      <ul>
        <li>Budget: {{budget}}</li>
        <li><a href="mailto:{{contact_email}}" class="btn btn-reverse">Apply Now</a></li>
      </ul>
      <div class="tech">
        <small>Technologies Needed: <span>{{technologies}}</span></small>
      </div>
    </div>

    {{else}}
    <p>No gigs available</p>
   {{/each}}

  </section>
```

## View in browser
`$ node run dev`

* Visit `http://localhost:5000/gigs`

## Change HTTP verbs
* We want the "add a gig" route to be a POST request and not a GET request

`routes/gigs.js`

```javascript
// MORE CODE

// Add a gig
router.post('/add', (req, res) => { // change from get to post
  const data = {
    title: 'Angular Sites',
    technologies: 'angular, node, html',
    budget: '$6000',
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
    res.redirect('/gigs')
  }).catch((err) => {
      console.log(err)
  })
});

// MORE CODE
```

## Render the Add form
`routers/gigs.js`

```javascript
router.get('/add', (req, res) => {
  res.render('add'));
})
```

## Add your form
* It won't work but it will look cool

`views/add.handlebars`

```handlebars
  <section id="add" class="container">
    <div class="form-wrap">
      <h1>Add A Gig</h1>
      <p>Your contact email will be shared with registered users to apply to your gig</p>
      <form>
        <div class="input-group">
          <label for="title">Gig Title</label>
          <input type="text" name="title" id="title" class="input-box" placeholder="eg. Small Wordpress website, React developer"
            maxlength="100" required>
        </div>
        <div class="input-group">
          <label for="technologies">Technologies Needed</label>
          <input type="text" name="technologies" id="technologies" class="input-box" placeholder="eg. javascript, react, PHP"
          maxlength="100">
        </div>
        <div class="input-group">
          <label for="budget">Budget (Leave blank for unknown)</label>
          <input type="number" name="budget" id="budget" class="input-box" placeholder="eg. 500, 5000, 10000">
        </div>
        <div class="input-group">
          <label for="description">Gig Description</label>
          <textarea name="description" id="description" class="input-box" placeholder="Describe the details of the gig"
            rows="10" required></textarea>
        </div>
        <div class="input-group">
          <label for="budget">Contact Email</label>
          <input type="email" name="contact_email" id="contactemail" class="input-box" placeholder="Enter an email"
            required>
        </div>
        <input type="submit" value="Add Gig" class="btn btn-reverse">
      </form>
    </div>
  </section>
```

## Add some css
* We can have static assets by adding this inside our `app.js`

`app.js`

```javascript
// MORE CODE

// Set 'public' as static folder
app.use(express.static(path.join(__dirname, 'public')));

// MORE CODE
```

* And now we can add CSS

`public/css/style.css`

```css
@import url('https://fonts.googleapis.com/css?family=Lato');

:root {
  --primary-color: #568c9b;
  --primary-hover-color: #64a5b7;
  --bg-color: #333;
  --box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.7);
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  color: #333;
  background: #f4f4f4;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: var(--primary-color);
}

.container {
  max-width: 960px;
  padding: 1rem 4rem;
  margin: auto;
  overflow: hidden;
}

.error {
  padding: 5px;
  border: #777 dotted 1px;
  margin-bottom: 15px;
}

/* Header */
header {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  background-color: #000;
}

header nav ul {
  display: flex;
}

header nav li {
  margin: 0 1rem;
}

/* Login Button Spacing */
/*header nav li:last-child {
  margin-left: -5px;
}*/

header.inner {
  background: var(--bg-color);
  border-bottom: 4px solid var(--primary-color);
  position: relative;
  box-shadow: var(--box-shadow);
}

/* Buttons */
.btn {
  color: #fff;
  padding: 0.6rem;
  border: 1px solid #ccc;
  transition: all 0.7s;
}

.btn:hover {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: #fff;
}

.btn-reverse {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-reverse:hover {
  background: var(--primary-hover-color);
  border: 1px solid var(--primary-hover-color);
}

/* Home Search */
.search-wrap {
background: url(/img/showcase.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 1.3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search-wrap h1 {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 1.5rem;
  text-align: center;
}

.search-form input[type='submit'] {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: #fff;
  padding: 0 2rem;
  cursor: pointer;
  transition: all 0.8s;
}

.search-form input[type='submit']:hover {
  background: var(--primary-hover-color);
  border: 1px solid var(--primary-hover-color);
}

.search-form {
  display: flex;
  width: 600px;
  box-shadow: var(--box-shadow);
}

.search-form i {
  color: #333;
}

/* Everything in the search form */
.search-form > * {
  border: 0;
  padding: 0 0 0 10px;
  background: #fff;
  line-height: 50px;
  font-size: 1rem;
  border-radius: 0;
  outline: 0;
}

input[type='search'] {
  flex-basis: 600px;
}

/* Gigs */
.gig {
  background: var(--bg-color);
  border-bottom: 4px solid var(--primary-color);
  color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
}

.gig ul {
  list-style: none;
  display: flex;
}

.gig li {
  margin-right: 0.5rem;
  padding: 0.6rem;
}

.gig .tech span {
  color: var(--primary-color);
}

/* Form */
.form-wrap {
  margin: auto;
  background: var(--bg-color);
  color: #fff;
  padding: 1rem 3rem 3rem;
  margin-top: 3rem;
  border-bottom: 4px solid var(--primary-color);
  box-shadow: var(--box-shadow);
}

.form-wrap.reg-form,
.form-wrap.login-form {
  width: 60%;
}

.form-wrap h1,
.form-wrap h2,
.form-wrap p {
  text-align: center;
}

.form-wrap .btn {
  margin-top: 1rem;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 18px;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

.input-box {
  padding: 0.5rem;
  font-size: 18px;
  width: 100%;
  margin-bottom: 1.2rem;
}

/* Tablets */
@media (max-width: 800px) {
  .container {
    padding: 1rem 2rem;
  }

  header {
    flex-direction: column;
    padding: 0.3rem !important;
  }

  .search-form {
    width: 100%;
  }

  input[type='search'] {
    flex-basis: 100%;
  }

  .search-wrap h1 {
    font-size: 2rem;
  }

  .search-wrap {
    padding: 2.3rem;
  }

  .gig ul {
    flex-direction: column;
  }

  .gig .btn {
    display: block;
    margin-top: 1rem;
    text-align: center;
  }

  .form-wrap.reg-form,
  .form-wrap.login-form {
    width: 80%;
  }
}

/* Smartphones */
@media (max-width: 500px) {
  .container {
    padding: 1rem;
  }

  header nav li {
    margin: 0 10px;
  }

  .search-form {
    display: flex;
    flex-direction: column;
  }

  input[type='search'] {
    flex-basis: 0;
  }

  .search-form i {
    display: none;
  }

  .form-wrap {
    padding: 1rem 2rem 2rem;
  }

  .form-wrap.reg-form,
  .form-wrap.login-form {
    width: 100%;
  }
}
```

## Update path in `views/layouts/main.handlebars`
* We want the css to point to our static CSS file

`main.handlebars`

```handlebars
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossorigin="anonymous">
  <link rel="stylesheet" href="/css/style.css">
  <title>CodeGig</title>
</head>

<!-- MORE CODE -->

```

## Our Home page
* We'll add another layout
* To do this you need to alter `app.js`

`app.js`

```javascript
// MORE CODE

// Routes
// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// Gig routes
app.use('/gigs', require('./routes/gigs'));

// MORE CODE
```

* We tell Express that our index Handlebars template will not point to the main Layout template but instead it will point to a new `landing` Handlebars layout template

## Now define the `landing` template
`views/layouts/landing.handlebars`

```handlebars
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossorigin="anonymous">


  <link rel="stylesheet" href="/css/style.css">
  <title>CodeGig</title>
</head>

<body>
  <header>
    <h2><a href="/"><i class="fas fa-code"></i>CodeGig</a></h2>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/gigs">All Gigs</a>
        </li>
        <li>
          <a href="/gigs/add">Add Gig</a>
        </li>
      </ul>
    </nav>
  </header>

  {{{body}}}
</body>

</html>
```
## And the `index` template

`views/index.handlebars`

```handlebars
  <section id="search" class="search-wrap">
    <h1>Find A Coding Gig</h1>
    <form action="gigs.html" class="search-form">
      <i class="fas fa-search"></i>
      <input type="search" name="term" placeholder="Javascript, PHP, Rails, etc...">
      <input type="submit" value="Search">
    </form>
  </section>
```

## Navigate the 3 pages of the site
* The site UI is complete
* Now we need to make the form functional so we can add Gigs, Show all Gigs and Search for Gigs

## Good news if you are using Express 4.16+
* You know longer need to install `body-parser`
* `body-parser` is now built into Express
* If you are using Express 4.16+ use these 2 lines:

```javascript
app.use(express.json()); //Used to parse JSON bodie
app.use(express.urlencoded()); //Parse URL-encoded bodies
```

### If you want to convert old pre Express 4.16 apps with the latest code
* Remove these 2 lines:

```javascript
app.use(bodyparser.json()); //utilizes the body-parser package
app.use(bodyParser.urlencoded({extended: true}));
```

* And replace those 2 lines with the other lines mentioned above
* [Here is more documentation on this](https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c)

## Houston we have a problem
* Currently everytime we visit `/gigs/add` we have a static object that will populate our Database adn this is not what we want. Currently our Database is filled with duplicate records
* A better approach would be to add user input to create Gigs and they could do this with the form we have set up on `/gigs/add`
* We just need to wire this form up so that when the users fill the form out and hit submit the data gets added to our Database

## Forms and actions
* We will add an `action` and point it to this route `/gigs/add` and add a `method` form attribute that will be set to `POST`

`views/add.handlebars`

```
// MORE CODE

      <h1>Add A Gig</h1>
      <p>Your contact email will be shared with registered users to apply to your gig</p>
      <form action="/gigs/add" method="POST">

// MORE CODE
```

* We can get rid of our sample data object in `routes/gigs.js`

```javascript
  const data = {
    title: 'Angular Sites',
    technologies: 'angular, node, html',
    budget: '$6000',
    description: 'Consectetur quae commodi saepe obcaecati necessitatibus? Amet quod voluptas fuga consequatur inventore. Molestias minima consequuntur necessitatibus repellat temporibus Ullam facere nisi magni veritatis laudantium Ab culpa ipsum quis eligendi laudantium',
    contact_email: 'john@fake_email.com'
  };
```

## How we can get our forms to work
* The `name` attributes in our form match the destructured data
* All we need to do is replace our `data` object with the `req.body` object because all the form data will be availabe in the `req.body` once the user fills the form out and submits the form

## Server side validation
* Our form has HTML5 `required` attributes and this will suffice for client side validation but we also should ALWAYS set up server side validation to make sure the data we submit to our Database is as clean as we can make it

### Let's add simple server side validation
* If the object doesn't exist, store error text inside an object with a `text` property

```javascript
// more code

// Add a gig
router.post('/add', (req, res) => {

  // pull out the variables for easy access using desctructuring
  let = { title, technologies, budget, description, contact_email } = req.body;

  // set up errors array
  let errors = [];

  // Simple Validate Fields
  if(!title) {
   errors.push({ text: 'Please add a title' });
  }
  if(!technologies) {
   errors.push({ text: 'Please add a technology' });
  }
  if(!description) {
   errors.push({ text: 'Please add a description' });
  }
  if(!contact_email) {
   errors.push({ text: 'Please add a contact email' });
  }

  // Check for errors first
  // if our errors array has anything inside it re-render the page but with the errors array too
  if (errors.length > 0) {
    res.render('add', {
      errors, title, technologies, budget, description, contact_email 
    })
  } else {
  // If there is no budget then enter `Unknown` 
    if (!budget) {
      budget = 'Unknown';
    } else {
    // If there is a budget, Make sure to preface it with a $
      budget = `$${budget}`;
    }

    // make lowercase and remove space after comma
    // regEx .replace(/, /g, ',') --> for every space globally replace with a comma
    technologies = technologies.toLowerCase().replace(/, /g, ',');

    // Now that we hav passed server side validation, enter the data the end user
    //  entered, into the Database
    Gig.create({
      title,
      technologies,
      budget,
      description,
      contact_email
    }).then((gig) => {
      res.redirect('/gigs')
    }).catch((err) => {
        console.log(err)
    })
  }

});

// more code
```
