// let and const are block scoped variable
// var is a global scoped variable

// let a=25;
// let a=10;        //cannot re-declare
// console.log(a);

let a=20;
{
    let a=10;
    console.log(a);      //10
}
console.log(a);         //20

console.log("*****");

// let b=40;
if(true){
    let b=10;
    console.log(b);    //10
}
// console.log(b);        //not defined

console.log("*****");

let c=30;
c=60;                     //re-assign can be done
console.log(c);
{
    let d=90;
    console.log(c,d);
}
function x(){
    console.log(c);
    // console.log(d);    //not defined
}
x();

console.log("*****-*****");

// for const, re-assign can not be done
// initialization is mandatory instead of declaring
// const p;
// console.log(p);  

const p=90;
console.log(p);

console.log("*****");

// const q=70;
// q=35;                  //cannot re-assign
// console.log(q);
// const q=12;            //cannot re-initialize
// console.log(q);

// in order to re-assign use block scope - can access within a block
const q=75;
{
    const q=15;
    console.log(q);          //15
}
console.log(q);              //75

console.log("*****");

const r=12;
{
    const r=97;
    console.log(r);          //97
}
// for(const i=1; i<=2; i++);    //loop doesn't start because of i++ (const can not be changed)
// console.log(r, i);

console.log("*****");

const s=30;
{
    const s=19;
    console.log(s);    //19
}
function x(){
    const i=10;
    console.log(i);    //10
}
x();
// console.log(s,i);     //i not defined


