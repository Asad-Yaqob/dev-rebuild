// Code Examples Of Promises.

const firstPromise = new Promise(function (resolve, reject) {

    // using setTimeout to simulate async operation
    setTimeout(function () {
        console.log("Promise is resolved");
        resolve();
    }, 1000);
});

firstPromise.then(() => {
    console.log("Promise is consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Another way of writing Promise is resolved");
        resolve();
    }, 1000);
}).then(() => console.log("Another way of writing Promise is consumed"));

const secondPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;

        if (!error) {
            console.log("Second Promise is resolved");
            resolve();
        } else {
            console.log("Second Promise is rejected");
            reject("Error: Something went wrong");
        }
    }, 1000);
});

secondPromise.then().catch((error) => console.log(error));

const thirdPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (!error) {
            console.log("Third Promise is resolved");
            resolve({ username: "Asad", age: 22, city: "Karachi" });
            // resolve([1,2,3,4,5]);
        } else {
            console.log("Third Promise is rejected");
            reject("Error: Something went wrong");
        }
    }, 1000);
});

thirdPromise
    .then((user) => { console.log(user); return user.username })
    .then((username) => console.log(username))
    .catch((error) => console.log(error));

// promises can also be consumed using async/await syntax.

async function consumePromise() {
    try {
        const response = await firstPromise;
        console.log("Promise is consumed using async/await syntax");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise();

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

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data));
