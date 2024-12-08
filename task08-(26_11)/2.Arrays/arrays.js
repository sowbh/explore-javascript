/**
 *  arrays are object in javascript, which can store any type of datatype without any length restrictions in a single variable in thr form of continuous memory location.
 * array indexes always starts from 0
 * there are several ways to create an array;
 *    using [ ]
 *    new Array( )
 *    Array.from( )
 * 
 * syntax;
 *     variable refVar =[ ];
 */
var arr = [];
console.log(arr, typeof arr);
console.log(arr.length);

// non-primitive, mutable
arr = [1,2,3,4,5,6];
console.log(arr);

// can be displayed in the form of table
console.table(arr);
console.log(arr.length);

console.log("----------------------------------------------------------");

arr = [1,2,3,4,5,6];
console.log(arr);

// to access first element
console.log(arr[0]);

// to access last element
console.log(arr[arr.length]);
// undefined because in arr[6] there's no value so;
console.log(arr[arr.length-1]);

// non-primitive, mutable
arr[0]=10;
console.log(arr);

console.log("----------------------------------------------------------");

// arrays can store homogeneous(stores same data) and heterogeneous(different type of data) datas
arr = ['krishna', 'tunga', 'bhadra', 12, false, true, 3.222222222, NaN, undefined, {}];
console.log(arr);
console.table(arr);

arr = ['CSK', 'MI', 'SRH', 'KKR', 'RCB', 'Delhi', 'LSG', 'PBKS', 'GT', 'RR'];
// to display every elements in an array;
console.log("The array elements are:")
for(var i=0; i<=arr.length-1; i++){
    console.log(arr[i]);
}
//(i<=arr.length-1) or (i < arr.length) both are same