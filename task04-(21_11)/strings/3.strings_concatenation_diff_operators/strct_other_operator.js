// console always debugs from left to right
console.log(2+2); //addition

// anything + string = string
console.log(2+"2");

console.log("100"-2);
// -, *, / cannot be used for concatenation
// here, "100" -> converts to number so 100-2=98
// this is done by type conversion

console.log("2"+true);
// anything + string = string

console.log("10"/-2);
// -, *, / cannot be used for concatenation
// "10" -> converted to number 10 so 10/-2=-5

console.log("4"*2);
// -, *, / cannot be used for concatenation
// "4" -> converted to number 4 so 4*2=8

console.log("2"+2+"10"+(100+30));
// "2"+2=22
// 22+"10"=2210
// 2210+130=2210130

console.log(typeof+"100");

console.log(10+ +"100"*2); //BODMAS
// "100" ->converts to number 100 so 100*2=200
// 10+200 = 210


