---
title: Variable Scope in JavaScript 
date: "2020-01-22T23:46:37.121Z"
description: Variable Scope in JavaScript
---

* The `scope` of a variable defines where it's accessible in your program based off of where it was created

## This works as we expect
```javascript
let varOne = "varOne";

if (true) {
  console.log(varOne);
}
// Output: varOne
```

## This causes a problem
```javascript
let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
}

console.log(varTwo);
// ERROR - varTwo is not defined
```

## Lexical Scope
* JavaScript using Lexical Scoping (aka Static Scope)

### What does Lexical Scope mean?
* It is the idea that a variable defined in one part of your program might not be accessible everywhere else in your program (the context of the variable that is defined and used comes into play)
* **tip** When dealing with scoping pay attention to the "code blocks"
    - What we put inside of curly braces `{...}`

## There are 2 types of scope
1. Global Scope
    * What is Global Scope?
        - Global scope contains all of the things defined outside of all "code blocks"
        - **note** Above code: `varOne` is a Global Variable
2. Local Scope
    * What is Local Scope?
        - Local Scope are things defined inside a "code block"
        - **note** Above code: `varTwo` is a Local Variable

### Very Important scope rule
* In a scope you can access variables defined in that scope, or in any parent/ancestor scope
* This explains why we can access varOne and varTwo from inside the "code block" but can not access varTwo from outside the "code block"

```javascript
let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);
}

console.log(varTwo);
```

## Let's draw a scope tree for the following:
```javascript
let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

console.log(varTwo);

// here is the scope tree

// Global Scope (varOne)
//  Local Scope (varTwo)
//    Local Scope (varFour)
//  Local Scope (varThree)
```

* Global scope can only access `varOne`
* The first Local Scope can only access `varOne` and `varTwo` and `varFour`
* The second Local Scope can only access `varOne` and `varThree`

## Let's discuss a couple of edge cases when it comes to scope

```javascript
// SCOPE TREE
// Global (name)
//   Local
//     Local
//   Local

let name = "John";
if (true) {
  if (true) {
    console.log(name);
  }
}

if (true) {
}

```

* **note** When we have different scopes we can define variables with the same name in each scope
    - There is a rule that you can't define variable with the same name "in the same scope"

## Check this out
```javascript
// SCOPE TREE
// Global (name)
//   Local
//     Local
//   Local

let name = "John";
if (true) {
  let name = "Jay";
  if (true) {
    console.log(name);
  }
}

if (true) {
}

```

## "Variable Shadowing" in JavaScript
* It is when a variable in a Local scope uses its value instead of variable in a parent scope
    - So the Local variable is shadowing over the parents (<em>basically hiding it from existence</em>)
* The output will be `Jay`
    - Why?
        + Because we start where we log name and we look for the variable `name`, we don't find it so we move to the parent and then we find name is `Jay` so that is what we output

## Now what happens when we do this?
```javascript
// SCOPE TREE
// Global (name)
//   Local
//     Local
//   Local

let name = "John";
if (true) {
  let name = "Jay";
  if (true) {
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
// output
// Jay
// John
```

## What happens when we "assign" a value to a variable?
```javascript
// SCOPE TREE
// Global (name)
//   Local
//     Local
//   Local

let name = "John";
if (true) {
  console.log(name);

  if (true) {
    name = "Jen";
    console.log(name);
  }
}

if (true) {
  console.log(name);
}

```

* So now we overwrite `Jay` with `Jen`
* **note** When assigning values to variables it is important to take scope into consideration

## What if you don't define a variable?
```javascript
// SCOPE TREE
// Global (name)
//   Local
//     Local
//   Local

// let name = "John";
if (true) {
  // let name = "Jay";

  if (true) {
    name = "Jen";
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
```

* You will get `Jen` for both logs
    - How it works:
        + It will look in Local scope for `name` - doesn't find it
        + It moves up and up until it gets to top of Scope tree and if it doesn't find it, it will declare the variable in the root
            * **warning** This is a problem - If we don't define variables we are inadvertently creating a global variable
            * This is referred to as a **leaked global**
                - Leaked Global: when you assign a value to a variable but that variable was never explicitly defined

## How to avoid creating leaked globals?
* Just explicitly declare the variable somewhere in the scope tree
* `let name = 'Tim';`

```javascript
// SCOPE TREE
// Global (name)
//   Local
//     Local
//   Local

// let name = "John";
if (true) {
  // let name = "Jay";

  if (true) {
    let name = "Jen";
    console.log(name);
  }
}

if (true) {
  console.log(name);
}

```

* We will see Jen and then an error because the 2nd log is trying to access a variable that is not defined
