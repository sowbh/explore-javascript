// 1. forEach method
// it returns undefined. used for iterating over elements

// let arr1 = [1,2,3,4,5,6,7,8,9, , , ,];
// console.log(arr1);   //forEach wont consider empty elements. it considers datatypes

let arr = ["hemanth", "pavan kalyan", "haritha", "maruthi"];
// output: ["Hemanth", "Pavan kalyan", "Haritha", "Maruthi"]

arr.forEach((val,ind,arr) => {
    arr[ind] = val[0].toUpperCase().concat(val.substring(1));
})
console.log(arr);

// if: dont modify original arr then use separate arr (res = [] empty arr);
// let resArr = [];
// arr.forEach(ele => resArr.push(ele).toUpperCase);
// console.log(resArr);

let arr1 = [1,2,3,4,5,6];
// output: 1 -> 0 , 2 -> 1, 3 -> 2, 4 -> 3 ...

// using arrow function
arr1.forEach((ele, ind, arr1) => console.log(ele + " -> " + ind, arr1));

// using anonymous function
// arr1.forEach(function(ele,ind,arr1){
//     console.log(ele + " -> " + ind);
// })

// ---

// 2. map method
// returns new array by modifying elements

let arr2 = [1,2,3,4,5];
// output: res = ["odd", "even", "odd", "even", "odd"]

// using for loop;
// res2 = [];
// for(let i=0; i<arr2.length; i++){
//     if(arr2[i] % 2 !=0){
//         res2[i] = "odd";
//         // res2.push("odd");
//     }
//     else{
//         res2[i] = "even";
//         // res2.push("even");
//     }
// }
// console.log(res2);

// using map and ternary operator;
let res2 = arr2.map(ele => (ele % 2 != 0) ? "odd" : "even");
console.log(res2);

// ---

// 3. filter method
// expects boolean value. if true returns new array else does nothing

let arr3 = [1,2,3,4,5];
// output: res = [2,4]

// using for loop
// res3 = [];
// for(let i=0; i<arr3.length; i++){
//     if(arr3[i] % 2 == 0){
//         res3.push(arr3[i]);
//     }
// }
// console.log(res3);

// using filter
let res3 = arr3.filter(ele => ele % 2 ==0);
console.log(res3);
