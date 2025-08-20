// async and await
// async function is used to overcome promises. async keyword is used to create asynchronous functions, which internally returns promise object

// using promise
// function generate(){
//     return Promise.resolve("Hello World");
// }
// generate().then(res => console.log(res));

// using async
async function generate() {
    return "Hello World";
}
generate().then(res => console.log(res));

// async and await = ES8
// promises = ES6

let promise1 = new Promise((resolve) => {
    resolve("Hey");
})

async function x(){
    let res= await promise1;
    console.log(res);
}
x();

// internally it runs as
// function y(){
//     return promise1.then(res => res);
// }
// y().then(res=> console.log(res));


// if;
// async function x(){
//     let res= await promise1;
//     return res;
// }
// console.log(x());

// // to access value of res
// x().then(res => console.log(res));

// await keyword converts asynchronous code into synchronous way of execution

// using .then
// let promise2 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Oh Wow!")
//     }, 2000);
// })
// promise2.then(res => console.log(res));
// console.log("Completed");

// using async and await
async function printData() {
    let promise2 = new Promise(resolve => {
        setTimeout(() => {
            resolve("Oh Wow!")
        }, 2000);
    })
    let res= await promise2;
    console.log(res);
    console.log("Completed");
}
printData();

// in json-server using .then
// fetch("http://localhost:3000/data")
// .then(response => response.json())
// .then(data => console.log(data));

// in json-server using async and await
async function getData(){
    let response = await fetch("http://localhost:3000/data");
    // console.log(response);
    // console.log(response.json());

    let data = await response.json();
    console.log(data);
}
getData();
