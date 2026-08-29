// "use strict"

// Definition:
// An object is a dynamic data structure (means it can be changed after creation)
// that stores related data in key value pairs, each key uniquely identifies its value.

// Key Points:
// 1. the values of properties can be primitives(string,boolean,undefined), objects and functions.
// 2. objects are mutable and dynamic properties can be added,modifed and deleted at any time.
// 3. objects allow data grouping and encapsulation, making it easier to manage related information and behavior together.

// Creating objects
// we can create objects in two ways, using object literals {} and usine object constructor new Object().

// Using object literals
// object literal directly inherits from Object.prototype

const obj = {
  name: "Asad",
  age: "22",
  city: "Karachi",
};

console.log(obj);

// Using object constructor
// there is an abstraction layer envolved, we are creating an instance of object
// and calling the builtin Object constructor of javascript.

const obj2 = new Object();
obj2.name = "Asad";
obj2.age = 22;

console.log(obj2);

// Operations on Objects

// 1. Accessing properties : dot notation and [] brackets

// Using dot notation
console.log(obj.name);

// using square [] brackets
console.log(obj["name"]);

// Difference:
// the dot notation looks for the specified property in the object if not found it returns undefined, while 
// the [] notation evaluates the expression then use the result as key.
// so when have key with spaces, symbols, access dynammic keys, call a property that we dont know before hand. the dot notation fails.

// [] use cases.
// 1. when we dont know the key before hand
// 2. access dynamic keys
// 3. access keys with symbol, spaces.

// 2. Modifying Object Properties

console.log(obj);

obj.age = 23;
console.log(obj);

// 3. Adding Properties

obj.gender = "male";

console.log(obj);

// 4. Removing Properties

delete obj.gender;

console.log(obj);

// 5. Checking if a Property Exists, in operator and hasOwnProperty method. 
console.log("age" in obj);
console.log(obj.hasOwnProperty("ghanta"));

// 6. Object Methods

// 1. Object.freez()

Object.freeze(obj); 
// This method freezez an object means its existing properties now cannot be changed, removed and new cannot be added it becomes immutable. 
// trying to modify it will throw and error in strict mode.

obj.name = "Ali";
console.log("Calling obj.name after freez method: ", obj.name);

// 2. Object.entries()
// This method return the array of a given object containing its own key value pairs.
// where each key value pair is represent as [key, value].
console.log(Object.entries(obj));

// 3. Object.keys()
// This method returns an array containing the names of an object's own enumerable string-keyed properties.

console.log(Object.keys(obj));

// 4. Object.values()
// This method returns an array containing the values of an object's own enumerable string-keyed properties.

// 5. Object.assign()
// this method copies all enumrable own properties of one or more source objects
// to the target object and returns the modified target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true


// Key Points: 
// 1. Properties in the target object can be overwritten by properties in the sources if they have the same key as target. 
// Later Properties also overwrite earlier ones.

// Example: 
const target1 = {
  name: "Ali",
  age: 20,
};

const source1 = {
  age: 25,
  city: "Karachi",
};

const source2 = {
  city: "Lahore",
  country: "Pakistan",
};

const result = Object.assign(target1, source1, source2);

// You can use it to create a new object by giving it an empty object as the target:
Object.assign({}, source);

// Warning for deep clone
// if the source value is reference to an object, it only copies the reference. means we can still mutate the original value
// while modifying the copy of it because in memory it reference the same object not the value it self. 
// For deep cloning, we need to use alternatives like structuredClone(), 
// because Object.assign() copies property values. 

const obj5 = { a: 0, b: { c: 0 } };
const obj6 = Object.assign({}, obj5);
console.log(obj6); // { a: 0, b: { c: 0 } }

obj5.a = 1;
console.log(obj5); // { a: 1, b: { c: 0 } }
console.log(obj6); // { a: 0, b: { c: 0 } }

obj6.a = 2;
console.log(obj5); // { a: 1, b: { c: 0 } }
console.log(obj6); // { a: 2, b: { c: 0 } }

obj6.b.c = 3;
console.log(obj5); // { a: 1, b: { c: 3 } }
console.log(obj6); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj7 = { a: 0, b: { c: 0 } };
const obj8 = structuredClone(obj7);
obj7.a = 4;
obj7.b.c = 4;
console.log(obj8); // { a: 0, b: { c: 0 } }

// 8. Destructuring

let myObj = { 
  userName : "babloXyz",
  pass: "secret",
}

let {userName, pass} = myObj;
console.log("Desctructuring: ");

console.log(userName);
console.log(pass);

// Renaming while destructuring

console.log("Renaming With Desctructuring: ");
let {userName: name} = myObj;
console.log(name);

// Default values during destructuring

console.log("Default values during destructuring: ");
let { role = "Admin"} = myObj;
console.log(role);

// Nested object destructuring

const user = {
  name: "Ali",
  age: 20,
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};

let {address: {city}, age} = user;
console.log(city);
console.log(age);

// Destructuring in function parameters

function greet({name, age, address: {city}}){
  console.log("Welcome: ", name + " " + age + " " + city);
}

greet(user);

// Rest destructuring: extract the properties you specifically want, 
// and collect the remaining properties into a new object.
const user2 = {
  uname: "Ali",
  age: 20,
  city: "Karachi",
};

const { uname, ...rest } = user2;
console.log(uname);
console.log(rest);

// Spread: take the contents of an object and spread/copy its properties into another object.

const copy = {...user2}; 

// 7. Iterating Through Object

// for in loop. 

// for(let key in obj) {
//     console.log(key + " " , obj[key]);
// }

// Object.keys() with for each and map method.

// Object.keys(user2).forEach((key) => {
//   console.log(user2[key]);
// })

// Map method.

// Object.keys(user2).map((key) => console.log(key));

// Object.Eneries  with for each and map method
Object.entries(user2).forEach(([key, value]) => {
   console.log(key + " " + value);
});
 
Object.entries(user2).map(([key, value]) => {
  console.log("Key: ", key + " " + ", " + "Value: " + value);
});

const objA = { x: 1, y: { z: 10 } };
const objB = { ...objA };

objB.y.z = 999;

console.log(objA.y.z); // ?
console.log(objB.y.z); // ?