---
title: Find one item in array
date: "2020-01-22T23:46:37.121Z"
description: JavaScript to find one item in array of objects
---

```javascript
const notes = [
  {
    title: 'indexOf()',
    body: 'Helps you find stuff inside an array',
  },
  {
    title: 'forEach()',
    body: 'array method to loop through an array',
  },
  {
    title: 'toUpperCase()',
    body: 'String method to make a string upper case',
  },
  {
    title: 'to be or not to be',
    body: 'that is the question',
  },
];

const findNote = function(notes, noteTitle) {
  const index = notes.findIndex(function(note, index) {
    return note.title === noteTitle;
  });
  return notes[index];
};

const note = findNote(notes, 'forEach()');
console.log(note);
```
