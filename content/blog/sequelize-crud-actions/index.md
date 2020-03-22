---
title: Sequelize CRUD actions Cheat Sheet
date: "2020-01-24T23:46:37.121Z"
description: Quickly understand CRUD with 
---

## The model
```javascript
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

### Link to Sequelize Quick Start
* Always good to read [the docs](https://nodered.org/) first

