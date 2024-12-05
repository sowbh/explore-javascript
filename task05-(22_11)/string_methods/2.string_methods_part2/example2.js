// 1. slice() method
// slice method always moves from left to right direction not reverse
// identifier.slice(starting_index, ending_index(optional))

// in slice, substring last index won't be considered whereas, last but one(second last) index is considered
var str = "Javascript is awesome";

console.log(str.slice(0,4));

console.log(str.slice(0,4)+str.slice(10));

// negative index
console.log(str.slice(-7));

// if reverse direction
console.log(str.slice(-1,-7));

console.log(str.slice(-4,0));

// both + and - index values
console.log(str.slice(4, -7));

console.log("--------------------------------------------------------");

// 2. substring() method
// substring won't work in reverse direction instead reverses the indexes(-ve index) into 0 and if necessary, the pair of index is reversed
console.log(str.substring(4));

// what if we give same index value
console.log(str.substring(4,4));

// negative index
console.log(str.substring(-4));

// both + and - index values
console.log(str.substring(-6,5));
// (-6,5) => (0,5); -6 is replaced with 0

console.log(str.substring(10, -1));
// (10,-1) => (10,0) => (0,10); -1 is replaced with 0 and the pair of index is reversed

console.log("--------------------------------------------------------");

// 3.substr() method
// substr method always moves from left to right direction
// substr(starting_index, length_of_string_we_need)
console.log(str.substr(4));

console.log(str.substr(4,7));

// negative index
console.log(str.substr(6,-1));
// left to right(length can not be -1 so empty string)

console.log(str.substr(-5,10));
// left to right

console.log("--------------------------------------------------------");

// 4. split() method
// based on space, we can separate the sentence
// we can provide characters/space
// split() converts string into array
console.log(str.split());

// what if give space
console.log(str.split(" "));
// one sentence converts into 3 words

// empty
console.log(str.split(""));

console.log(str.split("a"));
// if str contains any A then it will be present and all small a's are separated

// identifier.split(separator, limit)
console.log(str.split("",5));

console.log(str.split("",1));

console.log("--------------------------------------------------------");
// console.clear();

// 5. toUpperCase() method
console.log(str.toUpperCase());

console.log("--------------------------------------------------------");

// 6. toLowerCase() method
console.log(str.toLowerCase());

console.log("--------------------------------------------------------");

// 7. concat() method
// use instead of + operator
console.log(str.concat(" language"));

// to get: Javascript Is Awesome
console.log(str.at(0).toUpperCase()
.concat(str.slice(1, 11))
.concat(str.at(11).toUpperCase())
.concat(str.slice(12, 14))
.concat(str.at(14).toUpperCase())
.concat(str.slice(15)));
