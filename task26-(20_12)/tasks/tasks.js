// 1. Write a function called processNumber that accepts a number and a callback function. The processNumber function should double the number and pass the result to the callback function.
function processNumber(num, callback){
    let res = num * 2;
    callback(res);
}
let result = res => console.log(res);
processNumber(14, result);

// 2. Write a function called forEachElement that takes an array and a callback function. The function should iterate over the array and execute the callback function for each element, passing the element as an argument.
function forEachElement(arr, callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i]);
    }
}
forEachElement([1,2,3,4], arr => {
    console.log(arr);
});

// 3. Write a function sayHello that accepts a name and a callback function. Use setTimeout to wait for 1 second and then call the callback function, passing the message "Hello, [name]!" (replace [name] with the provided name).
function sayHello(name, callback){
    setTimeout(() => {
        callback(name);
    }, 1000);
}
let greet= name => console.log("Hello, " +name+ "!");
sayHello("Peter", greet);

// 4. Write a function checkEven that accepts a number and two callback functions. If the number is even, call the first callback with the number. If the number is odd, call the second callback with the number
function checkEven(num, callback1, callback2){
    if(num%2 == 0){
        callback1(num);
    }
    else{
        callback2(num);
    } 
}
let even = n1 => console.log("Even number:", n1);
let odd = n2 => console.log("Odd number:", n2);

checkEven(26, even, odd);
checkEven(97, even, odd);

// 5. Write a function performTasks that accepts a number and two callback functions. First, add 5 to the number using the first callback, and then multiply the result by 2 using the second callback. Log the final result to the console
function performTasks(number, cb1, cb2){
    let add = cb1(number);
    let multiply = cb2(add);
    console.log(multiply);
}
let addFive = a1 => a1 + 5;
let multiplyByTwo = a1 => a1 * 2;

performTasks(5, addFive, multiplyByTwo);
