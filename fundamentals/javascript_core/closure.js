// Definations:

// 1. Lexical Scope. 
// Lexical Scope
// it means if we have two functions inner and outer, the inner function has access to its outer function scope, or variables, declarations.
// this is called lexical scoping in JavaScript.
// some-points: 
// the inner function can access the outer function variables but the outer function cannot access to the inner function.
// and if we have two inner functions in one outer function then the both inner function variable are unable to share there variables. 

// 2. Closure
// closure is a function that remembers and access variables from its outer scope even after the  function has been executed,
// this because the inner function still reference those variables, JavaScript garbage collector has one simple rule. It only removes variables 
// when nothing references them anymore. that is the reason the inner function still has access.


// Code Examples. 

//1. Laxical Scoping Example.
// Example 1: 

function myFunc(){
    let name = "Asad";

    function innerFunc(){
        console.log(name);
    }
    
    innerFunc();
}

myFunc();

//2. Closure Examples
// Example 1: basic example of closure is a function that returns another function.

function makeFunc() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc();

// Example 2: function factory example that adds two variables.

function makeAdder(x){

    return function(y){
        return x+y;
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

// Example 3: function factory tax calculator example. 
// You configure pakistanTax once, then use it everywhere in your app without re-passing the tax rate every single time. 
// That's the real value — not doing math, but creating specialized, reusable functions from a general one.

function makeTaxCalculator(taxRate) {
    return function(price) {
        return price + (price * taxRate);
    }
}

const pakistanTax = makeTaxCalculator(0.17);
const dubaiTax = makeTaxCalculator(0.05);

console.log(pakistanTax(1000)); // 1170
console.log(dubaiTax(1000));    // 1050

// Example 4: Data encapsulation example, creating a private variable count that its value can only increment by increment function. 

function counter(){

    let count = 0; 

    return function increment(){
      count++;
      return count;
    }
}

const myCounter = counter();
const myCounter2 = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
console.log(myCounter2()); // 1  
console.log(myCounter2()); // 2  
console.log(myCounter2()); // 3  