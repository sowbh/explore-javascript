// ex1
// let c=function c(x,y){
//     return x+y;
// }
// console.log(c(10,20));

let c = (x,y) => x+y;
console.log(c(10,30));

// ex2
// let isEven = num => {
//     if(num % 2 == 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }
// console.log(isEven(6));

// using ternary function
let isEven = num => (num%2==0) ? "Even" : "Odd";
console.log(isEven(3));

// ex3
function demoFunction(callback1, callback2, callback3){    //main function
    console.log(callback1(10,30));
    console.log(callback2(30));
    console.log(callback3());
}
// arrow function
demoFunction((a,b) => a+b, a=> a+40, () => "hahaha");

// named functions of all three callbacks;
function sum(a,b){
    return a+b;
}

function addForty(a){
    return a+40;
}

function haha(){
    return "hahaha";
}

demoFunction(sum, addForty, haha);