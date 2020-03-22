---
title: Random JavaScript function
date: "2020-01-21T23:46:37.121Z"
description: Easy way to remember how to randomize something with JavaScript
---

```javascript
let min = 20;
let max = 30;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
```
