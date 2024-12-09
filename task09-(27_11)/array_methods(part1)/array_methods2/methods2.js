// 5.shift();
// removes first elt from array and returns the deleted elt
var arr5=[11,12,13,14,15];
console.log(arr5);

arr5.shift();
console.log(arr5);

var res5=arr5.shift();
console.log(arr5);
console.log(res5);

console.log("----------------------------------------------------------------");

// 6.fill();
// changes all array elts from start to end and returns the modified arr
// fill(value, start_ind, end_ind)
var arr6=[21,22,23,24,25];
console.log(arr6);

// to replace all arr elt with 0 using for loop
// for(var i=0;i<arr6.length;i++){
//     arr6[i]=0;
//     console.log(arr6);
// }

// to know arr6 value
// console.log(arr6);  // [0,0,0,0,0]

arr6.fill(0);
console.log(arr6);

arr6=[21,22,23,24,25];
arr6.fill(0,1);        //value, start_ind
console.log(arr6);

arr6=[21,22,23,24,25];
arr6.fill(0,1,3);     //value, start_ind, end_ind
console.log(arr6);

console.log("----------------------------------------------------------------");

// 7.slice();
// returns part of an array without modifying original array
var arr7=[4,8,12,16,20,24,28,32,36,40];
console.log(arr7);

console.log(arr7.slice()); //returns org array
console.log(arr7.slice(2));  //returns new arr without modifying the original arr
console.log(arr7.slice(3,7));

// slice accepts negative value(reverse order of arr indexes)
console.log(arr7.slice(-4));
console.log(arr7.slice(3,-2));
console.log(arr7.slice(-14)); //returns org array
console.log(arr7.slice(-5,-10));  //empty array []

console.log("----------------------------------------------------------------");

// 8.splice();
// remove,replace and addition of elts can be done and original array can be modified
// splice(start,delete,insert)
var arr8=[12,24,36,48,60,72,84,96,108,120];
console.log(arr8);

var res8=arr8.splice(1);  //deletes from ind 1
console.log(arr8);       
console.log(res8);       //displays deleted elts

arr8.splice();
console.log(arr8);

arr8=[12,24,36,48,60,72,84,96,108,120];
arr8.splice(0);    //deletes from ind 0
console.log(arr8);

arr8=[12,24,36,48,60,72,84,96,108,120];
arr8.splice(6,3); //deletes 3 elts from ind 6 
console.log(arr8);

arr8=[12,24,36,48,60,72,84,96,108,120];
arr8.splice(3,1,7);  //deletes 1 elt from 3 ind and inserts 7 in the 3rd ind
console.log(arr8);

arr8=[12,24,36,48,60,72,84,96,108,120];
arr8.splice(3,0,34,454,65,57,67);  //inserts 5 elts from 3rd ind
console.log(arr8);



