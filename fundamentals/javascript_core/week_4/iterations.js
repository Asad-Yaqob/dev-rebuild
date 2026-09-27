// for loop

for (let i = 1; i <= 10; i++) {
//   console.log(i);
}

// Printing table of 2 with for loop.

for (let count = 1; count <= 10; count++) {
    // console.log(`2 x ${count} = ${count * 2}`);
    
}

// Nested for loop

for (let i = 0; i < 5; i++) {
//   console.log(`Outer loop value is ${i}`);

  for (let j = 0; j < 5; j++) {
    // console.log(`Inner loop value is ${i}`);
  }
}

// While loop

// let isUser = true;
// while (isUser) {
//     console.log("User can perform actions");
    
//     isUser = false;
// }

const numbers = [1,2,3,4,5]
const string = "Hello World"

for (const str of string) {
//   console.log(str);
}

for (const key in {name: "heon", age: 25, gender: "male"}) {
  console.log(key);
}

numbers.forEach(
    (num, index) => {
        console.log(`Number is ${num} at index ${index}`);
        
    }
);