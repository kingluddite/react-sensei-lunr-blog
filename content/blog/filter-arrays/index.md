---
title: Filter arrays
date: "2020-01-22T23:46:37.121Z"
description: Basic intro to how to filter arrays
---

## filtering
* A concept where we only show results if they meet a certain criteria
* Only show tasks that are completed
* Only show notes that have a title with "gym" inside the string
* We take an array and make a new array with some of the items based on whatever the filter is
* Filter just completed tasks
* Filter books by a specific author
* Emails from a specific person

## filter docs
* [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* **note** `filter()` does not mutate the array on which it is called
* Creates a new array with all elements that pass the test implemented by the provided function
* `filter()` gets called with a single function
    - This function is a callback and we pass it 2 things
        + 1. The individual item
        + 2. The index (call it whatever but we'll call it index)

`notes.js`

```javascript
const notes = [
  {
    title: 'Go to gym',
    body: 'Work out shoulders',
  },
  {
    title: 'Go to gym',
    body: 'work out arms',
  },
  {
    title: 'Go to school',
    body: 'Teach a good class',
  },
  {
    title: 'Do homework',
    body: 'Write lots of JavaScript',
  },
];

const filteredNotes = notes.filter(function(note, index) {
  // inside here we return a boolean
  // if true, keep the item inside the new array we are generating
  // if false, keep the item out of the new array we are generating
  // Remember this creates a new array, it does not change the original array
  //  So you can store this new array in a new variable
  return true;
});

console.log(filteredNotes);
```

### Well that really didn't accomplish anything useful
* This will output a new array that is identical to the old array because all we did was create a new variable and use filter to store all same items because we just returned `true` for our condition
* Here is the output:

```javascript
[
  { title: 'Go to gym', body: 'Work out shoulders' },
  { title: 'Go to gym', body: 'work out arms' },
  { title: 'Go to school', body: 'Teach a good class' },
  { title: 'Do homework', body: 'Write lots of JavaScript' }
]
```

* If we returned `false` it would be an empty array in our new array because there was no matches

## Method chaining
* We can add methods onto other methods

```javascript
const filteredNotes = notes.filter(function(note, index) {
  const isTitleMatch = note.title.toLowerCase().includes('gym');
  const isBodyMatch = note.body.toLowerCase().includes('gym');
  if (isTitleMatch || isBodyMatch) {
    return true;
  }
});

console.log(filteredNotes);
```

* That will return 2 items in the new array

```javascript
[
  { title: 'Go to gym', body: 'Work out shoulders' },
  { title: 'Go to gym', body: 'work out arms' }
]
```

## Wrap our filter into a function
```javascript
const findNotes = function(notes, query) {
  const filteredNotes = notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    // if (isTitleMatch || isBodyMatch) {
    //   return true;
    // }
    return isTitleMatch || isBodyMatch;
  });
  return filteredNotes;
};

const gymNotes = findNotes(notes, 'to');
console.log(gymNotes); // this will return 3 items that match query
```

* **important** You will always get undefined unless you return something from the function
    - The first `return` gives the value to `filteredNotes` but unless you also return `filtered` notes, calling the function will give you `undefined`

## Refactor
* We can remove the last return and just drop it before `filteredNotes` to save us a line of code and having to define another variable

```javascript
const filteredNotes = notes.filter(function(note, index) {
  const isTitleMatch = note.title.toLowerCase().includes('gym');
  const isBodyMatch = note.body.toLowerCase().includes('gym');
  if (isTitleMatch || isBodyMatch) {
    return true;
  }
});
```

## Other example with more refactoring

```javascript
const todos = [
  { text: 'Lift weights', completed: true },
  { text: 'Pay Rent', completed: false },
  { text: 'Do Laundry', completed: true },
  { text: 'Code JavaScript', completed: false },
  { text: 'Run', completed: true },
];

const findIncompleteTodos = function(todos) {
  return todos.filter(function(todo, index) {
    // return (isMatch = todo.completed === false);
    // no reason to store in variable so just use this
    // return todo.completed === false;
    // above line works but we can refactor yet again with the below line
    return !todo.completed;
  });
};

const incompletedTodos = findIncompleteTodos(todos);
console.log(incompletedTodos);
```

* Will return only todos that are incomplete

