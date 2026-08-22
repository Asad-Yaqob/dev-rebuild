// Code Examples Of Promises.

// const firstPromise = new Promise(function (resolve, reject) {
//   // using setTimeout to simulate async operation
//   setTimeout(function () {
//     console.log("Promise is resolved");
//     resolve();
//   }, 1000);
// });

// firstPromise.then(() => {
//   console.log("Promise is consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Another way of writing Promise is resolved");
//     resolve();
//   }, 1000);
// }).then(() => console.log("Another way of writing Promise is consumed"));

// const secondPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;

//     if (!error) {
//       console.log("Second Promise is resolved");
//       resolve();
//     } else {
//       console.log("Second Promise is rejected");
//       reject("Error: Something went wrong");
//     }
//   }, 1000);
// });

// secondPromise.then().catch((error) => console.log(error));

// const thirdPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;

//     if (!error) {
//       console.log("Third Promise is resolved");
//       resolve({ username: "Asad", age: 22, city: "Karachi" });
//       // resolve([1,2,3,4,5]);
//     } else {
//       console.log("Third Promise is rejected");
//       reject("Error: Something went wrong");
//     }
//   }, 1000);
// });

// thirdPromise
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => console.log(username))
//   .catch((error) => console.log(error));

// promises can also be consumed using async/await syntax.

// async function consumePromise() {
//   try {
//     const response = await firstPromise;
//     console.log("Promise is consumed using async/await syntax");
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise();

// async function getAllUsers() {
//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

// used fetch method.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch simulator.
// 1. it should return a promise
// 2. delay with setTimeout
// 3. resolve with user object
// 4. reject with error message
// 5. for error can use math.Random() to simulate error.

// const fetchSimulator = new Promise(function(resolve,reject){
//     console.log("Simulation Started...");

//     setTimeout(function(){
//         let error = Math.random() < 0.5;

//         if (!error) {
//             console.log("Fetch Simulator is resolved");
//             resolve({ username: "Asad", age: 22, city: "Karachi" });
//         }
//         else {
//             console.log("Fetch Simulator is rejected");
//             reject("Error: Something went wrong");
//         }
//     }, 1000);

// });

// fetchSimulator
// .then((user) => console.log(user))
// .catch((error) => console.log(error))
// .finally(() => console.log("Fetch Simulator is completed"));


// fetch simulation with asyn-await
async function fetchSimulator() {
  console.log("Simulation Started...");
  try {

   let promise =  await new Promise((resolve, reject) => {
     // causing delay with setTimeout.

       setTimeout(function () {
       let error = Math.random() < 0.5;

       if (!error) {
         console.log("Promise resolved.");
         const user = { username: "Asad" };
         resolve(user);

       } else {
         console.log("Promise Rejected.");
         reject("simulation failed.")
       }
     }, 1000);
   })

   return promise;
    
  } catch (error) {
    console.log(error);
    throw error;
  }
}

fetchSimulator()
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

console.log(fetchSimulator);