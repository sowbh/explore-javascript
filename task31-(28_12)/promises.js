// 1
console.log(Promise.resolve("Hello World").then(res => console.log(res)));

// ---

// 2
Promise.resolve("Hi")
.then(res => {
    console.log(res);
    return "Promise Object";
})
// to access return use .then
.then(res1 => console.log(res1))

// this .then returns undefined
.then(res2 => console.log(res2));

// ---

// 3
const promise1 = Promise.resolve("Step 1");
promise1.then(res => {
    // this returns step 1
    console.log(res);
    return new Promise((resolve, reject)=> {
        // no resolve so no .then will be called
    });
})
.then(res => console.log(res));

// ---

// 4
const promise2 = new Promise((resolve, reject) => {
    // no resolve and no reject so both .then() and .catch() will not be called
});
promise2.catch(err => {
    console.log(err);
    return "recovered";
})
.then(res => console.log(res));
