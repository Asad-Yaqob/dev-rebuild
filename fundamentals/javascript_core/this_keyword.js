// "use strict"

// Defination:
// the value of this keyword is depend on how a function is being called, in most cases. it is different in global,
// normal function, arrow function, object scope, and dom elements also in stric and non-strict mode.

// Code Examples: 

// Global Scope:
// console.log("this in global scope", this); 

// Normal Function Scope:
// function testFunc(){
//     console.log("this is normal function",this);
// }
// testFunc();

// Call, Apply, Bind Methods:

// Basic Approach
// const person = {
//     name: "Asad", 
//     age: 22, 
//     introduce: function(){
//         console.log("Hello, Myself" + " " + this.name);
//     }
// }

// const person2 = { name: "Ali", age: 25 };
// const person3 = { name: "Ahmed", age: 30 };

// person.introduce();
// person.introduce.call(person2);
// person.introduce.apply(person3);

// Good Approach

// function greeting(age, city){
//     console.log("Hello, Welcome" + " " + this.name, " ", "Age:", age, "City:", city);
// }

// const asad = { name: "Asad"};
// const ahmed = { name: "Ahmed"};

// greeting.call(asad, 22, "Karachi");
// greeting.apply(ahmed, [25, "Lahore"]);

// const bindMethod = greeting.bind(asad, 22, "Karachi");
// bindMethod();

// Arrow Function Scope:

// const arrFunc = () => {
//     console.log("this in arrow function", this);
// }

// Object Scope:
// this behavior with normal function.
// const person = {
//     name: "Asad", 
//     age: 22, 
//     introduce: function(){
//         console.log("this is function", this);
//        function innerFunc(){
//             console.log("this in inner function", this);
//        }
//        innerFunc();
//     }
// }
// person.introduce();

// this behavior with arrow function.
const person2 = {
    name: "Asad", 
    age: 22, 
    introduce: () => {
        
        console.log(this);

        function greeting(){
            console.log("Welcome", this);
            
        }
        greeting();

       let innerFunc = () => {
            console.log("this in inner function", this);
       }
       innerFunc();

    }
}
person2.introduce();
