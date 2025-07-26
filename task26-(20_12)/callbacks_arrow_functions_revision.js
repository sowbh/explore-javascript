// create a function add that takes two numbers and a callback function. the callback should log the result of the addition
function add(a,b, callback){
    callback(a,b);
}
let result = (a,b) => console.log(a+b);
add(10,4, result);

// write a function multiplyByTwo that accepts a number and callback function. the callback should multiply the number by 2 and log the result
function multiplyByTwo(p, callback){
    console.log(callback(p));
}
let product = p => p*2;
multiplyByTwo(15, product);