---
title: Destructuring
date: "2020-04-07T23:46:37.121Z"
description: Everything destructuring in JavaScript
---
* Allows us to unpack values from `objects` and `arrays`

## Passing objects around
* In JavaScript we like to pass objects around because objects can hold multiple discrete values
* But in the end when working with those individual values it can be a bit annoying when there all on an object so this is where destructuring comes in where we can "pull things off" an object like this:

`index.js`

```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false
}

const id = todo.id
const text = todo.text
const completed = todo.completed

console.log(id) // asdfdsfasdf
console.log(text) // pay the bills
console.log(completed) // false
```

* You can see that creating a variable for each property can be tedious
* But with destructuring we can do it in one line like this:

## Destructuring is better!
```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false
}

const { id, text, completed } = todo;
console.log(id) // asdfdsfasdf
console.log(text) // pay the bills
console.log(completed) // false
```

* We get the same output but we save time typing

## Change name of destructured variables
* We can change the name of the local variable created

```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
}

const { id, text: todoText, completed } = todo
// console.log(id) // asdfdsfasdf
// console.log(text) // pay the bills
console.log(todoText) // pay the bills
// console.log(completed) // false
```

* We still get the correct output in our new variable `todoText`

## Provide default value to destructured variables
* We can provide a default value for something we are destructuring if it doesn't actually exist on the object

### Example
* Let's say we want to pull off `details` through destructuring
* `delails` does not exist on our object we are destructuring from
* This will give us `ReferenceError: details is not defined`

```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
}

const { id, text: todoText, completed, details } = todo
// console.log(id) // asdfdsfasdf
// console.log(text) // pay the bills
// console.log(todoText) // pay the bills
// console.log(completed) // false
console.log(details) // undefined
```

### Here is how we add a default value through destructuring
```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
}

const { id, text: todoText, completed, details = 'no details provided' } = todo
// console.log(id) // asdfdsfasdf
// console.log(text) // pay the bills
// console.log(todoText) // pay the bills
// console.log(completed) // false
console.log(details) // 'no details provided'
```

## Create another local variable with a default value
```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
}

const {
  id,
  text: todoText,
  completed,
  details: coolDetails = 'no details provided',
} = todo
// console.log(id) // asdfdsfasdf
// console.log(text) // pay the bills
// console.log(todoText) // pay the bills
// console.log(completed) // false
console.log(coolDetails) // 'no details provided'
```

## With destructuring we can use the "rest operator" inside
* If we want to grab every not destructured we can use the rest operator
* Pick a name for the new object

```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
  notFeelingLove: true,
}

const {
  // id,
  text: todoText,
  completed,
  details: coolDetails = 'no details provided',
  ...others
} = todo
// console.log(id) // asdfdsfasdf
// console.log(text) // pay the bills
// console.log(todoText) // pay the bills
// console.log(completed) // false
// console.log(coolDetails) // 'no details provided'
console.log(others) // { id: "asdfdsfasdf", notFeelingLove: true}
```

* You see we create a new object with all the properties in the object we were destructuring

## We can also use destructuring with arrays
* Not as popular as destructuring with objects
* **note** The order we destructure with our arrays is important
    - The first destructured local variable gets the first value in the array
    - The second destructured local variable gets the second value in the array
    - ... keep going to the end of the array

```
const age = [21, 31, 41, 51, 61]
const [firstAge, secondAge] = age

console.log(firstAge) // 21
console.log(secondAge) // 31
```

## You can skip values when you destructure from an array
* What if you don't want the third value but want the forth

```
const age = [21, 31, 41, 51, 61]
const [firstAge, secondAge, , forthAge] = age

console.log(firstAge) // 21
console.log(secondAge) // 31
console.log(forthAge) // 51
```

## We can also choose to provide default values for destructured arrays
* We don't have a lastAge so we give it a default value

```
const age = [21, 31, 41, 51]
const [firstAge, secondAge, , forthAge, lastAge = 100] = age

console.log(firstAge) // 21
console.log(secondAge) // 31
console.log(forthAge) // 51
console.log(lastAge) // 100
```

## We can use the rest parameter when destructuring arrays
* Let's say we only want to destructure the first item in the array and place the others in another array

```
const age = [21, 31, 41, 51]
const [firstAge, ...othersAges] = age

console.log(firstAge) // 21
console.log(othersAges) // [31, 41, 51]
```

## Places to use destructuring
* We can use destructuring with objects and arrays when we have a local variable like in our examples above
* We can also use destructuring inside of function arguments

### Destructuring inside of function arguments
* Normal use of arguments inside of a function

```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
  notFeelingLove: true,
}

const printTodo = (todo) => {
  console.log(todo)
}

printTodo(todo) // outputs todo object
```

* Or we can output like this:

```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
  notFeelingLove: true,
}

const printTodo = (todo) => {
  console.log(`${todo.text}: ${todo.completed}`)
}

printTodo(todo) // pay the bills: false
```

* The problem is we have to grab all those properties off of the todo argument
* A better way (less typing is to use destructuring)

```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
  notFeelingLove: true,
}

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`)
}

printTodo(todo) // pay the bills: false
```

* Same output, less typing
* In arguments use `([one, two])` to destructure from an array
* In arguments use `({one, two})` to destructure from an object
* **tip** You will use this alot because you are passing in an object usually with lots of properties but your function only needs a couple of properties off of that object
* You can also use default values like before
* You can also use the rest parameter like before

```
const todo = {
  id: 'asdfdsfasdf',
  text: 'pay the bills',
  completed: false,
  notFeelingLove: true,
}

const printTodo = ({ text: otherText, completed, ...otherTodoProps }) => {
  console.log(`${otherText}: ${completed} `)
  console.log(otherTodoProps)
}

printTodo(todo)
// pay the bills: false
// { id: "asdfdsfasdf", notFeelingLove: true }
```

