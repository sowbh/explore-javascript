/**
 * set of characters combined together to form a text : String
 * 
 * 3 ways to represent strings;
 * '' - single quote
 * "" - double quote
 * `` - back tick/ template literals
 * 
 * 4 ways to create strings
 * '' - single quote
 * "" - double quote
 * `` - back tick
 * new String(); - using constructor
 */

// creation of strings
// these are all hard coded(sending fixed values)
var str1='Hello World';
console.log(str1);

var str2 = "Hello universe";
console.log(str2);

var str3 = `Hi there`; //string literals
console.log(str3);

// this is dynamic creation of string
var str4 = new String("hey there");
console.log(str4);

// arrays, strings are index based(0 to length)

// to access string characters use []
console.log(`The 4th character in ${str1}:`,str1[3]);