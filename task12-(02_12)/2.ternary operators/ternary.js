/**
 * ternary operators - shorthand if and else. used to check condition
 *    syntax;
 *           (condition) ? "true part" : "false part";
 */

//1. if age>=18 eligible for licence else not eligible
// var age = 16;
var age=24;
var res= (age>=18) ? "Eligible for licence" : "Not eligible for licence";
console.log(res);

console.log("------------------------------------------------------------------------------");

//2. a=10,b=11 -> a>b then a is big else b is big
var a=10, b=11;
// var res= (a>b) ? "a is big" : "b is big";
// console.log(res);

// what if both are equal?
var res=(a>b)?"a is big" : (a<b) ? "b is big" : "both are equal";
console.log(res);

console.log("------------------------------------------------------------------------------");

//3. a=10, b=20, c=30 find largest between a,b and c
var a=10, b=30, c=30;
var res=(a>b && a>c) ? "a is big" : (b>c) ? "b is big" : (c>a && c>b) ? "c is big" : "equal";
console.log(res);

console.log("------------------------------------------------------------------------------");

// 4. a=10, b=20; swapping using 3rd variable
// before swapping: a=10, b=20;  after swapping: a=20, b=10
var a=10, b=20;
console.log(`Before swapping: a=${a}, b=${b}`);
var temp=a;
a=b;
b=temp;
console.log(`After swapping: a=${a}, b=${b}`);

// without using extra variable
// a. using arithmetic operators
var a=10, b=20;
console.log('Before:',a,b);
a=a+b; //a=10+20=30
b=a-b; //b=30-20=10
a=a-b //a=30-10=20
console.log('After:',a,b);

// b. using xor bitwise operators
var a=10,b=20;
console.log('Before:', a,b);
a=a^b;
b=a^b;
a=a^b;
console.log('After:', a,b);

