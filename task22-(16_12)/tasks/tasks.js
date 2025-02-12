// 1. an arrow function that takes two parameters, a and b, and returns their sum
let c=(a,b) => a+b;
console.log(c(6,4));

console.log("*****");

// 2. an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
let greet = name => `Hello, ${name}!`;
console.log(greet("Butterfly"));

console.log("*****");

// 3. an arrow function that checks if a number is even and returns true if it is, or false otherwise
let findEven = num => (num%2 == 0) ? true : false;
console.log(findEven(7));

console.log("*****");

// 4. an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise
let greater = n => (n>10) ? true : false;
console.log(greater(15));

console.log("*****");

// 5. an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length”
let findLength = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1;
    } else if (str2.length > str1.length) {
        return str2;
    } else {
        return "Equal length";
    }
};
console.log(findLength("Sky","Stars"));

