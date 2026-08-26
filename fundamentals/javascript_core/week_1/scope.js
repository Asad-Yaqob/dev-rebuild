// Definition: Scope means where a variable can be used or not whether it is accessible or not,  we have global scope, 
// function scope and block scope, before Es 6 we have global and function scope and after it we have block scope and let or const keywords. 
// var has the function scope, it escapes if, loops blocks etc to the nearest function boundary or to the global scope. 
// but let/const defined in block cannot be accessed outside the  block. 

// Code Examples.
// Example 1: Global Scope Example.

// var x = 10; 

// console.log("Outside Functions", x);  

// function logValue() {
//     console.log("Inside function", x); 
// };

// logValue();

// {
//     console.log("Inside Block", x);
// }

// Example 2: Function Scope Example.

// function exampleFunction(){
//     if(true){
//     var x = 10;
//     }
//     console.log("Inside Function", x); 
// }

// exampleFunction();

// console.log("Outside Function", x);

// Example 3: Block Scope (let/const) Example.


function exampleFunction(){

    if(true){
        let x = 10;
        const y = 20;

        console.log("Accessing Let Inside Block", x); 
        console.log("Accessing Const Inside Block", y); 
    }

    console.log("Accessing Let Inside Function", x); 
    console.log("Accessing Const Inside Function", y); 
}

exampleFunction();

console.log("Accessing Let Outside Function", x);
console.log("Accessing Const Outside Function", y);
