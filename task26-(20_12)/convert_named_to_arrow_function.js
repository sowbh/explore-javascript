// ex1
// function square(number){
//     return number * number;
// }
let square = number => number*number;
console.log(square(12));

// ex2
// function isEven(num){
//     return num%2===0;
// }
let isEven = num => console.log(num%2 === 0);
isEven(16);

// ex3
// function greet(name){
//     return "Hello, " +name;
// }
let greet = name => console.log("Hello, " +name);
greet("Diganth");

// ex4
// function getMin(a,b){
//     return a<b?a:b;
// }
let getMin = (a,b) => console.log(a<b ? a:b);
getMin(2, 14);

// ex5
// function findLength(str){
//     return str.length;
// }
let findLength = str => console.log(str.length);
findLength("Birmingham");
