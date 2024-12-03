// Asynchronous capability example
// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log(3);
// },0);
// console.log(4);

console.log("--------------------------------------------");

// declaration
// var a;

// assignment
// a=10;

// initialization (declaration + assignment)
// var a=10;

// accessing value before assignment(default value of var is undefined)
var b;
console.log(b);

console.log("--------------------------------------------");

var c;
console.log(c);
c=10;
console.log(c);

console.log("--------------------------------------------");

// re-assignment
var a;
console.log(a);
a=10;
a=20;
console.log(a);

console.log("--------------------------------------------");

// here, comes automatic variable so it doesn't give any error if declared again;
var d;
console.log(d);
d=10;
d=20;
var d;  //re-declared same variable name again
console.log(d);

console.log("--------------------------------------------");

// identifiers/variable name are case-sensitive. Begin or end with _ or $ and can't start with numbers
var _name = "Cindrella";
console.log(name);   //blank/empty space/empty string
//_name stores its value in a separate window
// name variable it is yet to be removed from js(it is rolling out)

console.log(_name);

console.log("--------------------------------------------");

// syntax error if uncommented the below initialization line
// var 123=456;
console.log(123);

console.log("--------------------------------------------");

var _123=456;
console.log(_123);

console.log("--------------------------------------------");

// var A123_X=345;
// console.log(A123_x); //error because check if both identifiers are same or not(X and x)

console.log("--------------------------------------------");

// if you want to use special character ("") then use _ or $ at last
// var a$123_" ="Hey";
// console.log(a$123_"); //error

console.log("--------------------------------------------");

var _$=20;
console.log(_$);

console.log("--------------------------------------------");

// can't use var variable_type as variable_name
// var var=20;
// console.log(var);

console.log("--------------------------------------------");

// for let variable_type we can use it as an identifier

// keyword let is not a reserved word in strict mode or non-strict mode prior to ECMAScript 6 (ES6). This means that in older environments, you could use let as a variable name
// Strict Mode: Follows all the rules, like a careful student.
// Non-Strict Mode: Allows shortcuts and sloppy behavior, which might cause issues later
var let=30;
console.log(let);

console.log("--------------------------------------------");

// error because we can't use const as identifier
// var const=40;
// console.log(const);


// about automatic variable
// When you assign a value to e without declaring it using var, let, or const, JavaScript implicitly creates a global variable.
e=40;
console.log(e);

// delete is a pre-defined keyword
// var delete=30;
// console.log(delete);

// can't access before initialization it shows undefined
let f;
console.log(f);

// keywords are case-sensitive
// VAR p=10;
// console.log(p);