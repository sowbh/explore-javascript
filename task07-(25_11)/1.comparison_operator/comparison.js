// operators(+,-,*,/) - used to perform operations on 2 or more operands
// operands (x , y) - variables with which we perform

// example1
console.log(20<30);
console.log(20<=20);
console.log(20<=30);
console.log(20==20);
// only checks the data
// 20 == 20 then true

console.log(20===20);
// strict operator(checks data and type of data)
//  num === num then true

// what if?
console.log(20=='20');
// value 20 == 20 but it wont check type of data so true

console.log(20==='20');
// num is not equal to string but value is same so false 

console.log("-----------------------------------------------");

// example2
var a=10, b='10';
console.log(a>=b);
// checks data not the type of data so true

console.log(a==b);
// only checks data not the type of data so true

console.log(a<=b);
// checks data not the type of data so true

console.log(a>b);
console.log(a<b);
console.log(b>a);
console.log(b>=a);
console.log(b===a);
console.log(b==a);

