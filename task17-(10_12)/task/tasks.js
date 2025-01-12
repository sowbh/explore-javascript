// 1. How would you define a function that takes two numbers as parameters and returns their sum?
function sum(a,b){
    console.log(`a=${a}; b=${b}`);
    return a+b;
}
console.log(sum(50,50));

// 2. If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
function strings(str){
    console.log(`Original string: ${str}`);
    return str.toUpperCase();
}
console.log(strings("apple"));

// 3. In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
function clouds(a){
    return a;
}
console.log(clouds());

// 4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
function empty(arr){
    return arr;
}
console.log(empty([]));

// 5. write a function that takes two numbers as parameters and returns their difference.
function sub(x,y){
    return x-y;
}
var res=sub(10,6);
console.log(res);

// 6. Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
function greeting(name, age){
    return `Hello, ${name}! You are ${age} years old`;
}
console.log(greeting("Mohit", 12));

// 7. Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.
function even(a){
    if(a % 2==0){
        return true;
    }
    return false;
}
var ans=even(27);
console.log(ans);