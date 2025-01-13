/**
 * break: only for switch case and loops (terminates the loop)
 * continue: only for loops (skips the current iteration)
 */
// ex1
for(k=0;k<5;k++){
    console.log("One");
    break;                   //terminates the loop
    console.log("Two");      //doesn't execute
}

// ex2
var age=18;
if(age>=18){
    console.log("Rahul");
    // break;                //uncomment to see the error message
}

// return terminates the function

// https://www.jsv9000.app/ use this for visualizing effect
function demo1(){
    for(j=0; j<=2; j++){
        console.log("i");
    }
    return "completed";  //function terminates stack is created
}
console.log(demo1());
// this is because of function execution context(FEC)


// fec ex1
var x=10;
function demo(){
    var i=10;
    console.log(i);
}
demo();
// console.log(i);     //uncomment to see the error messagein the console
// after completion of function, FEC gets deleted 

// hoisting ex
function sample(){
    console.log(x);
    return 10;
    var x;
}
sample();
// after completion of function, FEC gets deleted 


// named functions = function definition in memory phase under GEC
function ab(){
    console.log(x,y);
    return 10;
    var x;

    function y(){
        console.log('y');
    }
}
ab();

// ex4
function xyz(x,y,z){
    console.log(x+y+z);
    return pqr(x,y);
}
function pqr(x,y){
    console.log(x-y);
    return x+y;
}
console.log(xyz(3,2,1));

