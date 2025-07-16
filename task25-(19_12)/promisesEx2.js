let promise1 = new Promise((resolve, reject) => {
    console.log("Promise 1");
    setTimeout(() => {
        resolve("Promise 1 success");
    }, 4000);
})
let promise2 = new Promise((resolve, reject) => {
    console.log("Promise 2");
    setTimeout(() => {
        resolve("Promise 2 success");
    }, 3000);
})
let promise3 = new Promise((resolve, reject) => {
    console.log("Promise 3");
    setTimeout(() => {
        resolve("Promise 3 success");
    }, 1500);
})

// resolve(...) successfully completes the Promise, but unless you explicitly use .then() to handle the result, nothing is displayed

promise1.then(res => console.log(res));
promise2.then(res => console.log(res));
promise3.then(res => console.log(res));
