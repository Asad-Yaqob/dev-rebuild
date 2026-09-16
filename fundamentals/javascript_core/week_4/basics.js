// Datatypes:
// these are primitive datatypes.
// a primitive is a data that is not an object and has no methods and properties. 
// it reppresent a single immutable value. its value directly stores in memory
// it is call by value.

// number => typeof return value = number
// string => typeof return value = string
// boolean => typeof return value = boolean
// undefined => typeof return value = undefined
// null => typeof return value = object
// sybmol => typeof return value = symbol
// bigint => typeof return value = bigint

// Non-primitive datatypes.
// It Represent complex collentions of data stored by reference. they are mutables. every non-primitive datatype is fundamentally an object.

// functions
// objects
// arrays

// Type Conversions

const someNumber = 42;
const stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);
// console.log(typeof someNumber);

const someString = "25atta";
const stringToNumber = Number(someString);
// console.log(typeof stringToNumber);
// console.log(stringToNumber); // if the string contain only number it will converted to number. if the string contain number and some content it will produces not a number NaN but will converted successfully to a number type.

const stringToBoolean = Boolean(someString);
console.log(typeof stringToBoolean);
console.log(stringToBoolean); // if string is empty it produces false otherwise true.



// Some Other Things

let str1 = "Hello"; 
let str2 = " Asad"; 

// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(true+);






