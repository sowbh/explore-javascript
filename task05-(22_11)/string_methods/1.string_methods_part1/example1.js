// 1. replace method
//  identifier.replace(target, new value)
var str1= "Hello World";
str1.replace("Hello","HELLO");
console.log(str1);     // can't modify original str because strings are immutable

// re-assign and display it or;
console.log(str1.replace("Hello","HELLO"));

console.log("--------------------------------------------------");

// drawback of replace
console.log("Drawback of replace method:");
// replace method matches with first word/character given as target and changes it
// here, we have 3 World word in this sentence but only first World is changed to There
var str2 = "Hello World Hello World Hello World";
// observe the output
console.log(str2.replace("World", "There"));

// 2. replace all method
// lets take same str2
console.log(str2.replaceAll("World", "There"));

console.log("--------------------------------------------------");

// 3. length property
console.log(`The length of ${str1} is:`, str1.length);

console.log("--------------------------------------------------");

// to access string elements
// index values starts from 0 to length of str -> forward index(left to right)
// index values starts from -1 to length of str (in -ve) -> reverse/backward index(right to left)
// 1. [] notation
var str3= "Javascript is Awesome";
console.log(str3[0]);

console.log(str3[str3.length-4]);

console.log("--------------------------------------------------");

// but [] can not accept negative value
// lets take same str3 value and check the output
console.log(str3[-1]);

// 2. at() method
// this method accepts both positive(forward index: 0 to length of str) and negative(backward index: -1 to length of str(in -ve)) values
console.log(str3.at(-1));

console.log(str3.at(5));

// what if index > str length then;
console.log(str3.at(47));

// what if we didn't give index value then it takes it as 0(first index)
console.log(str3.at());

console.log("--------------------------------------------------");

// 3. charAt() method
// works same as []; even this method won't accept negative value
console.log(str3.charAt(14));

// what if index > str length then;
console.log(str3.charAt(45));  //empty string

// index = -ve
console.log(str3.charAt(-5));   //empty string

// index = empty, it takes it as 0(first index)
console.log(str3.charAt());

console.log("--------------------------------------------------");

// to know about ascii value of a character in a string
// 4. charCodeAt() method
console.log(str3.charCodeAt(3));

// what if we give negative index
console.log(str3.charCodeAt(-1));

// what if index = empty
console.log(str3.charCodeAt());
