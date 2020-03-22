---
title: Advanced JavaScript If Statements
date: "2020-01-22T23:46:37.121Z"
description: Advanced If statements in JavaScript
---

* This is the Not operator `!`
* `else if` and `else` are optional in if statements

`boolean-advanced.js`

```javascript
let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
  console.log('The account is  locked');
} else if (userRole === 'admin') {
  console.log('Welcome admin');
} else {
  console.log('Welcome');
}
// output --> Welcome admin
```

## Challenge
* Print "too hot", "too cold" or "just a perfect day"

```javascript
let temp = 132;
if (temp >= 110) {
  console.log('too darn hot!');
} else if (temp <= 32) {
  console.log('too darn cold!');
} else {
  console.log('what a perfect day');
}
```


