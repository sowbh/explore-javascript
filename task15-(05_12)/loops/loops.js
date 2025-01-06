// 1. for loop
/**
 * for loop is used to execute a block of code a number of times, until the condition becomes false.
 * 
 * syntax;
 *    for (initialization; condition; increment/decrement) {
 *       // code block to be executed
 *   }
 */

// to print 1-10 numbers using for loop;
var a=10;
for(i=1; i<=a; i++){
    console.log(i);
}

// 2. while loop
/**
 * while loop is used to execute a block of code as long as the condition is true.
 * 
 * syntax;
 *   while (condition) {
 *      // code block to be executed
 *  }
 */

// to reverse a string using while loop;
// input = "javascript", output = "tpircsavaj"
var str="javascript";
var i=str.length-1;
var res="";
while(i>=0){
    res+=str[i];
    i--;
}
console.log(res);

// var arr = [1,4,3,5,3,5,6,7,8]
// empty this arr using while loop using pop() method
var arr = [1,4,3,5,3,5,6,7,8];
console.log(arr);
var len=arr.length;
while(len>0){
    arr.pop();
    len--;
}
console.log(arr);

// or
/**
 * var i=0;
 * while(i<arr.length){
 *   arr.pop();
 *  i++;
 * }
 */

// arr = ["javascript", "ruby", "RestAPI", "ReactJS", "python"];
// if any name starts with r or R, convert it to uppercase using while loop
var arr = ["javascript", "ruby", "RestAPI", "ReactJS", "python"];
console.log(arr);
var i=0;
while(i<arr.length){
    if(arr[i][0]=="r" || arr[i][0]=="R"){
        arr[i]=arr[i].toUpperCase();
    }
    i++;
}
console.log(arr);

// same using for loop
/**
 * for(i=0; i<arr.length; i++){
 *   var str=arr[i];
 *   if(str[0]=="r" || str[0]=="R"){
 *     arr[i]=str.toUpperCase();
 *   }
 * }
 * console.log(arr);
 */

// 3. do while loop
/**
 * do while loop is used to execute a block of code once, and then repeats the loop as long as the condition is true.
 * 
 * syntax;
 *  do {
 *     // code block to be executed
 * }
 * while (condition);
 */

// to print 20-1 numbers using do while loop;
var i=20;
do{
    console.log(i);
    i--;
} while(i>0);

console.log("----------------------------------------------------------------");
// ex:2
var j=1;
do{
    console.log(++j);
}while(++j<=10);

console.log("----------------------------------------------------------------");

// ex:3
var k=1;
do{
    console.log(k+3);
} while(k++ * 2 <=14);