// var is a global scope variable
var a=10;  //global scope 
if(true){
    var a=40;  //block scope - works within block {keeping var inside block acts as a global scope}
}
console.log(a); // 10

console.log("*****");

var b=20;
if(true){
    var b=90;
}
for(var i=2; i<=5; i++){
    
}
console.log(i);         //6
console.log(a);         //20

console.log("*****");

function x(){           //function scope/local scope
    var c=50;
    console.log(c);     //50
}
x();
// console.log(c);        //not defined

console.log("*****");

console.log(d);         //undefined
if(true){
    var d=100;         //block scope - but var acts like global scope
}
console.log(d);        //100

console.log("*****");

function y(){                //function scope
    var e=25;
    console.log(e);          //25
}
y();                         
console.log(y);             //y function definition
// console.log(e);          //not defined
