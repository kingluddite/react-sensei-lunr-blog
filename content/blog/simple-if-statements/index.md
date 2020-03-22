---
title: Simple if Statements
date: "2020-01-22T23:46:37.121Z"
description: Simple if statements in JavaScript
---

```javascript
let temp = 32;
let isFreezing = temp <= 32;

console.log(isFreezing);

if (isFreezing) {
  console.log('It is freezing outside!');
}
```

* This is known as "Flow Control"
    - We are controlling the `flow` of our program using a series of statements and conditions

## Convert to using if statements
```javascript
let age = 4;
// BELOW IS OLD CODE WE WANT TO CONVERT
// Calculate is child - if they are 7 or under
// let isChild = age <= 7;
// // Calculate is senior - if they are 65 or older
// let isSenior = age >= 65;
// // Print is child value
// console.log(isChild);
// // Print is senior value
// console.log(isSenior);

if (age <= 7) {
  console.log('Student Discount!');
}
if (age >= 65) {
  console.log('Senior Discount');
}
```
 

