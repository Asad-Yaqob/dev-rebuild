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
// and calling the buling Object constructor of javascript.

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
// the dot notation looks for the specified property in the object if not found it returns undefined, while the [] notation evaluates the result then use it as key.
// so when have key with spaces, symbols, access dynammic keys, call a property that we dont know before hane. the dot notatio fails.

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

// 2. Object.entries()
// This method return the array of a given object containing its own key value pairs.
// where each key value pair is represent as [key, value].
console.log(Object.entries(obj));

// 3. Object.keys()
// This method returns an array containing the names of an object's own enumerable string-keyed properties.

console.log(Object.keys(obj));

// 4. Object.values()


// 7. Iterating Through Object

// for in loop. 

// for(let key in obj) {
//     console.log(key + " " , obj[key]);
// }

 