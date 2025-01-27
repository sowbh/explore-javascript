// return keyword example
function one(a,b){
    console.log("one");
    return a+b+two(a,b);
}
function two(a,b){
    console.log("two");
    return a*b;
}
one(10,30);
console.log("*****");
two(12,40) + one(12,40);
console.log("*****");
console.log(two(12,40) + one(12,40));

console.log("--------------------------------------------");

function funOne(a,b,c){
    console.log("one");
    return funThree(a+10) + funThree(a+b+c);
}
function funTwo(a,b){
    console.log("two");
    return funThree(funOne(a,32,b));
}
function funThree(a){
    console.log("three");
    return a+10;
}
console.log(funTwo(10,30));
