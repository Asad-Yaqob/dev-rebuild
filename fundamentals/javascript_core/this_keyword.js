// "use strict";

// function normalFunction(){
//     console.log(this);
// }

// normalFunction(); // this will refer to the global object (window in browsers) in non-strict mode, or undefined in strict mode.

// var x = 10;
// console.log(this);

// const obj = {
//     name: "Asad",
//     greet: function() {
//         function inner() {
//             console.log(this.name);
//         }
//         inner();
//     }
// };

// obj.greet(); // ?


const obj = {
    name: "Asad",
    greet: function() {
        function inner() {
            console.log(this.name);
        }
        inner();
    }
};

obj.greet(); // ?