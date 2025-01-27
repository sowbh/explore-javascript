/**
 * callbacks syntax:
 *   function functionName(parameter){
 *      //stmts (optional)
 *      parameter([arguments]);            //arguments is optional
 * }
 * 
 * //function call
 * functionName(anotherfunctionDefinition);
 */
function sayHi(callback){
    console.log("Hi");
    console.log(callback);
    callback();
}
function goodbye(){
    console.log("Bye");
}
sayHi(goodbye);

console.log("----------------------------------------------------------");

// debugger
function x(callback1, callback2){
    console.log(callback1, callback2);
    // callback1;
    // callback2;
}
function y(){
    console.log("Y Function");
}
function z(){
    console.log("Z Function");
}
x(y,z);