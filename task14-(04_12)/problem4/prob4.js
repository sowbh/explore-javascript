/**
 * var obj = {
 *     "number" : 2
 * }
 * if number property is even then print first 1-10 even numbers,
 * if number property is odd then print first 1-10 odd numbers,
 * if number property is 0 then print 0
 */
var obj = {
    'number' : 2
}
if(obj.number == 0){
    console.log("0");
}
else if(obj.number % 2 == 0){
    for(var i=2; i<=10; i=i+2){
        console.log(i);
    }
}
else {
    for(var i=1; i<=10; i=i+2){
        console.log(i);
    }
}