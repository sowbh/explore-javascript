// what if?
// ex1

// resolve is written at wrong position
let promise1 = new Promise((reject, resolve) => {

    // falsy value so moves to else part
    if (0) {
        reject();
    }
    // in the promises syntax resolve is in wrong position so it moves to catch()
    else {
        resolve();
    }
})
promise1.then(() => console.log("Success"))
    .catch(() => console.log("Failure"));


// ex2

// resolve is written at wrong position
let promise2 = new Promise((reject, resolve) => {

    // truthy value so moves inside the truth part
    if (1) {

        // in the promises syntax resolve is in wrong position so it moves to catch()
        resolve();
    }
    else {
        reject();
    }
})
promise2.then(() => console.log("Success"))
    .catch(() => console.log("Failure"));
