// 1. Named functions
function sample(){
    var x=10;
    console.log(x);
}
sample();

console.log("----------------------------");

// 2. Callback function
function greet(callback){
    console.log(callback);
    callback();
}
greet(function wish(){
    console.log("Have a nice day!");
});

console.log("----------------------------");

// 3. Higher order function - function taking callback as parameter
function one(callback){
    
}
function two(a,b){
    console.log(`A+b=${a+b}`);
}
one(two(1,2));

// 4. Lower order function - opposite of higher order function

console.log("----------------------------");

// 5. Anonymous function
var sample = function(x){
    return x+10;
}
console.log(sample(50));

console.log("----------------------------");

// 6. First class function
var print= function demo(a,b){
    console.log("Demo function called,", a*b);
}
print(5,4);
