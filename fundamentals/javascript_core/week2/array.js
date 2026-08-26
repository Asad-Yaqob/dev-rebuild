// Defination:
// Array is used to store ordered collection of multiple values of different
// datatypes under a single variable name.
// Characteristics:
//1. arrays are resizable and contain mix of different datatypes.
//2. JavaScript arrays are not associative array's means we cant have string based key's to access a value, we have non-negative integers as indexes.
//3. JavaScript arrays are zero indexed, first element is 0 second is 1 and last element is arr.length - 1.
//4. array copy operations, create shallow copies. All standard built-in copy operations with any JavaScript objects create shallow copies.

// Code Examples:

// Map

// Problem: 1, Double the numbers
let numbers = [2, 4, 6, 8];
// Create a new array where every number is doubled.
const doubled = numbers.map((num) => num * 2);
console.log("Doubled Numbers: ", doubled);

// Problem: 2, Extract names
let users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 },
  { name: "John", age: 30 },
];
// Create a new array containing only the names.

const usernames = users.map((user) => user.name);
console.log("Usersnames: ", usernames);

// Problem: 3, Convert temperatures.
// Given temperatures in Celsius:
const temperatures = [0, 10, 20, 30];
// Convert each temperature to Fahrenheit.
// Formula:
// F = (C × 9/5) + 32

const temperaturInFarenheit = temperatures.map((temp) => {
  return (temp * 9) / 5 + 32;
});

console.log("Temperatur in farenheit: ", temperaturInFarenheit);

// Filter

// Problem: 1, Even numbers.
// Given:
numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Create a new array containing only the even numbers.

const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log("Even Numbers: ", evenNumbers);

// Problem: 2, Adults.
users = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "John", age: 15 },
  { name: "Mike", age: 30 },
];

// Return only users whose age is 18 or greater.

const ageGreaterThan18 = users.filter((adult) => adult.age >= 18);
console.log("Users: ", ageGreaterThan18);

// Problem: 3, Long words.
const words = ["cat", "elephant", "dog", "javascript", "sun"];
//Return only words whose length is greater than 5.

const greaterWords = words.filter((word) => word.length > 5);
console.log("Words whose length is greater than 5: ", greaterWords);

// Reduce

// Problem 1: Sum
numbers = [10, 20, 30, 40];
// Use reduce() to calculate the sum.

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum: ", sum);

// Problem 2: Find the maximum
numbers = [12, 45, 7, 89, 23];
// Use reduce() to find the largest number.

const maxNumber = numbers.reduce((acc, curr) => Math.max(acc,curr));

console.log("Max Number: ", maxNumber);

// Problem 3: Given
const cart = [
  { item: "pen", price: 20 },
  { item: "book", price: 150 },
  { item: "bag", price: 800 },
];

// write a reduce() call that returns the total price of all items.

let initialValue = 0;

function reducer(accumulator, currentValue) {
  return accumulator + currentValue.price;
}

const totalPrice = cart.reduce(reducer, initialValue);
console.log("Total Price: ", totalPrice);

// Find

// Problem 1: Find a number
// Find the first number greater than 10.
numbers = [4, 9, 12, 20, 25];

const numberGreaterThan10 = numbers.find((num) => num > 10);
console.log("NumberGreaterThan10: ", numberGreaterThan10);

// Problem 2: Find a user
// Find the user whose id is 2.
users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "John" },
];

const user = users.find((user) => user.id === 2);
console.log("User whose id is 2");

// Problem 3:  Find a product
// Find the first product whose price is greater than 100.
let products = [
  { name: "Book", price: 10 },
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];

const productWhosePriceIsGreaterThan100 = products.find(
  (product) => product.price > 100,
);
console.log(
  "Product Whose Price Is Greater Than 100: ",
  productWhosePriceIsGreaterThan100,
);

//Some.

// Problem 1:  Is there an even number?
// Check whether at least one number is even.
numbers = [1, 3, 5, 8, 9];

const isEven = numbers.some((number) => number % 2 == 0);
console.log("Is Even Number? :", isEven);

// Problem 2:  Is there an adult?
// Check whether at least one user is 18 or older.

users = [
  { name: "Ali", age: 15 },
  { name: "Sara", age: 16 },
  { name: "John", age: 21 },
];

const isAdult = users.some((user) => user.age >= 18);
console.log("Is adult? :", isAdult);

// Problem 3: Is there an expensive product?
// Check whether any product costs more than 1000.

products = [
  { name: "Pen", price: 5 },
  { name: "Book", price: 20 },
  { name: "Laptop", price: 900 },
];

const isExpensive = products.some((product) => product.price > 1000);
console.log("is Expensive? :", isExpensive);

// every.

// Problem 1:  Are all numbers positive?
numbers = [2, 5, 8, 10];

const isPositive = numbers.every((num) => num > 0);
console.log("is Positive? :", isPositive);

// Problem 2: Are all users adults?
// Check whether every user is 18 or older.
users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 },
  { name: "John", age: 17 },
];

const allAdults = users.every((user) => user.age >= 18);
console.log("is all adults? :", allAdults);

// Problem 3: Are all passwords long enough?
// Check whether every password has at least 8 characters.
const passwords = ["hello123", "javascript", "password123"];

const enoughLength = passwords.every((pass) => pass.length >= 8); 
console.log("is enough length? :", enoughLength);

// Check if an array contains a certain item
// This example shows two ways to check if the fruits array contains "Banana" and
// "Cherry": first with the includes() method, 
// and then with the indexOf() method to test for an index value that's not -1.

const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false