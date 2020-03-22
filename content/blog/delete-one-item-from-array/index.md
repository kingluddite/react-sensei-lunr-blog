---
title: Delete One item from array
date: "2020-01-22T23:46:37.121Z"
description: JavaScript to delete one item from an array of objects
---

```javascript
const todos = [
  { text: 'Lift weights', completed: true },
  { text: 'Pay Rent', completed: false },
  { text: 'Do Laundry', completed: true },
  { text: 'Code JavaScript', completed: false },
  { text: 'Run', completed: true },
];

const deleteTodo = function(todosArr, todoText) {
  const index = todosArr.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todosArr.splice(index, 1);
  }
};

deleteTodo(todos, 'Paya Rent');

console.log(todos);
```

