// create a function checkEven that takes a number and a Callback. the callback should return true if the number is event, otherwise false 
function checkEven(a, callback){
    console.log(callback(a));
}
let res = a => {
    return a%2 === 0;
}
checkEven(10, res);

// write a function addToArray that accepts an array and a callback. the callback should add a number to the array and return the updated array
function addToArray(arr, callback){
    console.log(callback(arr));
}
addToArray([2,3,4,5], arr => {
    arr.push(6);
    return arr;
});
