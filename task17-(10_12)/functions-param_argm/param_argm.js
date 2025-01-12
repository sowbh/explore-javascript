// ex1 - arithmetic operations using functions
function sumofTwo(a,b){
    console.log(`a=${a}; b=${b}`);
    console.log(`Sum = ${a+b}`);
}
sumofTwo(2,2);
function subtract(a,b){
    console.log(`a=${a}; b=${b}`);
    console.log(`Difference = ${a-b}`);
}
subtract(8,2);
function mul(a,b){
    console.log(`a=${a}; b=${b}`);
    console.log(`Product = ${a*b}`);
}
mul(10,10);
function div(a,b){
    console.log(`a=${a}; b=${b}`);
    console.log(`Division = ${a/b} (Quotient)`);
}
div(81,9);
function mod(a,b){
    console.log(`a=${a}; b=${b}`);
    console.log(`Modulus = ${a%b} (Remainder)`);
}
mod(46,13);

console.log("-----------------------------------------------------------------");

// ex2
function funOne(a,b){
    console.log(a + "" + b);
    funTwo(a+b);
    funTwo(a,b);
}
function funTwo(a){
    console.log(a);
}
funOne(12,14);

console.log("-----------------------------------------------------------------");

// ex3
function one(a,b,c){
    console.log(a,b+c);
    two(a+b,b+c);
    console.log("One completed");
}
function two(a,b){
    console.log("two started");
    console.log(a+b);
    console.log("two ended");
}
one(10,30,21);

console.log("-----------------------------------------------------------------");

// return keyword example
function sample(a){
    return a+10;
}
console.log(sample(10));
// or
var res= sample(10);
console.log(res);