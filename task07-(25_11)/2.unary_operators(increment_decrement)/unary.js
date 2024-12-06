/**
 * post inc - access and inc
 * pre inc - inc and access
 * 
 * post dec - access and dec
 * pre dec - dec and access
 */

// example1
var a=10;
a++;      //a=a+1
console.log(a);    //11
console.log(a++);   //11

console.log("---------------------------------------------");

// example2
var b=10;
++b;    //b=b+1
console.log(b);   //11
console.log(++b);   //12

console.log("---------------------------------------------");

// example3
var c=10;
console.log(c++ + c);  //10(c=c+1) + 11 = 21

console.log(++c + c);   // 12 + 12 = 24

console.log(++c + c); // 13 + 13 = 26

console.log("---------------------------------------------");

// example4
var d=10;
console.log(d, d++, ++d); //10 10 12

console.log("---------------------------------------------");

// example5
var e=10;
var f=12;
console.log(e++ + e + ++e + f++ + ++f); // 10+11+12+12+14=59

console.log(e, f);  //12 14

console.log("---------------------------------------------");

// example6
var g=10;
var h=12;
console.log(h++ + g++ + ++h + g + ++g + h + g + g++ + h++); //12+10+14+11+12+14+12+12+14=111

console.log(g,h); //13 15

console.log("---------------------------------------------");

// example7
var x=32;
y=12;

console.log(y--); //12

console.log(y); //11

console.log(--y); //10

// to get the below value, comment the above three snippets
//32+32+32+12+12-12-31+12+12+10+31=142
console.log(x++ + --x + x-- + y++ + --y - y - x + y + y-- + --y + x++); 

