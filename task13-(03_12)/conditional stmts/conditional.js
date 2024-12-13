/**
 * conditional stmts are used to perform/execute block of code based on condition.
 * types;
 *    1) simple if -
 *               if(condition){
 *                   //block of stmts
 *               }
 * 
 *    2) if else -
 *               if(condition){
 *                  //block of stmts         
 *              }
 *              else{
 *                  //false part
 *              }
 * 
 *    3) ladder if - 
 *               if(condition){
 *                    //stmts
 *               }
 *               else if(condition){
 *                    //stmts
 *               }
 *               else{
 *                     //stmts
 *               }
 */

// simple if 
var laptop=true;
// var laptop=false;
if(laptop){
    console.log("Attend meeting");
}
// console.log("Cannot attend meeting");
// if you uncomment the above stmt then both the output will be displayed

if(laptop){
    console.log("Attend meeting");
}
if(!laptop){                               //!true = false
    console.log("Cannot attend meeting");
}

console.log("---------------------------------------------------------");

// if else 
var grade = 'A', percentage=70;
if((grade==='A' || grade==='B')&& percentage>75){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

console.log("---------------------------------------------------------");

// ladder if 
var age=24;
if(age<13){
    console.log("Child");
}
else if(age>=13 && age<=19){
    console.log("Teenager");
}
else{
    console.log("Adults");
}

