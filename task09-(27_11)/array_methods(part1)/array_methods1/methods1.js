/**
 *  Array methods(part1)-
 *  to check array methods then open console -> Array.prototype -> enter
 *  don't create arrays using constructor(ie; Array())
 *  part2 of arrays will be continued during callback()
 */

// 1. at();
var arr = [10,12,15,14,67,85];
console.log(arr);

console.log(arr.at(4));      //67
console.log(arr.at(0));      //10
console.log(arr.at(-1));     //85

console.log(arr[-1]);        //undefined (because [] doesn't accept negative values)
// to access last element using []
console.log(arr[arr.length-1]);  //85

console.log("----------------------------------------------------------------------------");

// 2. unshift();
// inserts elts at start of array and returns the updated length of array
var arr2 = [10,20,30,40,50];
console.log(arr2);

arr2.unshift(0);
console.log(arr2);

var res=arr2.unshift(1,2,3,4,5);
console.log(arr2);
console.log(res);

console.log("----------------------------------------------------------------------------");

// 3. push();
// adds elts at end of array and returns new length/updated length of array
var arr3=[20,40,60,80];
console.log(arr3);

// using []
// arr3[arr3.length] = 100;
// console.log(arr3);
// but this method fails to push multiple values

arr3.push(100);
console.log(arr3);

var res3=arr3.push(120,140,160);
console.log(arr3);
console.log(res3);

console.log("----------------------------------------------------------------------------");

// 4. pop();
// removes last element and returns the deleted element
var arr4=[10,30,50,70,90];
console.log(arr4);

arr4.pop();
console.log(arr4);

var res4=arr4.pop();
console.log(arr4);
console.log(res4);

// what if arr4 is empty?
arr4=[];
console.log(arr4);

var res4=arr4.pop();
console.log(res4);
