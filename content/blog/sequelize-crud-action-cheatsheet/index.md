---
title: Sequelize CRUD actions Cheatsheet
date: "2020-07-06T23:46:37.121Z"
description: Cheatsheet for Sequelize CRUD actions
---

* Let's work with a User model

## Create the model first:

`models/user.js`

```
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  return User;
};
```

## Create (The C in CRUD)
* Let's create a new user in our Database

```
// require all our models
const db = require('./models');

// call the Sequelize model "create" method
//  note: All Sequelize models have access to this method
// "create" takes in at least one argument (This argument is an object containing key value pairs describing the new record we want to create)
db.User.create({
  email: 'john.doe@example.com',
  password: 'ishouldnotletyouseemypassword',
  age: 46,
  name: 'John Doe'
  // now we chain a promise with the result
  // note: "then" is a function that is called after our "user" has been created
  // "then" takes in a callback function as an argument, with our newly created user (newUser) as the argument for the callback function
}).then(newUser => {

  // we just log to the terminal what our new user (newUser) will look like
  console.log(`New User ${newUser.name}, with id ${newUser.id} has been created.`);
})
```

* If you run the above the Terminal console log will look like:


```
{
 id: 2,
 email: 'john.doe@example.com',
 password: 'ishouldnotletyouseemypassword',
 age: 46,
 name: 'John Doe',
 updatedAt: Fri Nov 25 2016 12:07:44 GMT-0500 (EST),
 createdAt: Fri Nov 25 2016 12:07:44 GMT-0500 (EST)
}
```

* Our newly created user has all the properties we defined
* But it also adds an `id` automatically (This helps us target this user by this unique id)
* We also get `updatedAt` and `createdAt` automatically
* **note** Even though the object returned from the query is much larger, the snippet above is the only data sent back to the client if we were to use `res.json(dbUser)`
* If you need to explicitly filter out just the data for the row's values, you can do so by accessing `dbUser.dataValues`

## Now let's Read from our User table - The R in CRUD

* We have a few options for reading data from our Database with Sequelize.
* Below are the two most commonly used Read Sequelize methods

### findOne


* `findOne()` takes in a "where" object as an argument
* The `key` of this object is the word `where` and it's value is another object with keys and values describing the `user` we want to find
* We want to find one user where the `id` is equal to `1`

```
const db = require('./models');

db.User.findOne({ 
  where: { id: 1 } 
}).then(user => {
  console.log(`Found user: ${user}`);
});
```

* Let's say I want to be more specific out which user I want

```
const db = require('./models');

db.User.findOne({
  where: {
    id: 1,
    name: 'John Doe',
    age: 46
  }
}).then(user => {
  console.log(`Found user: ${user}`);
})
```

* The above would find one User where the `id` = 1, `name` = 'John Doe', and `age` = 46
* **note** `findOne()` will only return a single result - if there are multiple matches our "where" will only return the first result

## findAll
* `findAll()` returns an array of all of the records found
* In this particular example we would be returning all of our users
* **note** You may optionally pass in a "where" object here if you only want to return specific "users" who match the query

```
const db = require('./models');

db.User.findAll().then(function(users) {
  console.log(`I have ${users.length} users`);
});
```

* We could also find all users with an age of 46:

```
const db = require('./models');

db.User.findAll(
 age: 46
).then(elders => {
  console.log(`Found ${elders.length} matching records.`);
});
```

## Update - The U in CRUD
* This is what we use to update a user
* The "update" method takes in two arguments

1. An object with key/value pairs we want to update (In the below case we want to update the age and email of a "user" to the specified values)
2. A "where" object describing which "user" or "users" we want to update

```
const db = require('./models');

const newJohn = {
  age: 25,
  email: "newjohn@example.com"
};

db.User.update(newJohn, {
  where: {
    id: 1  
  }
}).then(updatedUser => {
  console.log(updatedUser);
})
```

* **note** The result of the update method is a little different the the previous examples. Here the `updatedUser` is an array with a single value, the number of records updated.

## Delete - The D in CRUD
* To delete a record from our Database, we'll use the Sequelize `destroy()` method
* The destroy method takes in a "where" object as an argument
* We use this to specify which record or records we want to delete
* **note** The result of this method (dbUser), is the number of records affected

```
const db = require('./models');

db.User.destroy({
 where: {
  id: 1
 }
}).then(dbUser => {
 console.log(dbUser);
})
```
