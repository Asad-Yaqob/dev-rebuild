// Defination: It is the behavior of JavaScript that moves the declaration to the top, while initialization are not hoisted,
// only declaration are. the let and const keyword are hoisted to the top but not initialized and because of this it throws 
// the reference error. var is hoisted and automatically initialized to undefined before the code runs. 
// So accessing it early doesn't crash

// Code Examples.
// Example 1: var hoisting example.

// x = 10; 
// console.log(x); // 10
// var x; 

// Example 2: var hoisting with initalization.
// here we have an error because we are initlizing the variable after we have used it. but javascript only hoist declarations not initalizations. so it will throw a reference error.

// x = 10; 
// console.log("Sum", x + y); 
// var x; 
// var y = 2;

// Example 3: let and const hoisting example.

x = 5; 
y = 10; 

console.log("Sum", x + y);

let x;
let y; 