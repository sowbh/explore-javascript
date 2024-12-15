/**
 * if name property having any small character, convert to uppercase
 * obj = {
 *    "name" : "SPOORTHY"
 * }
 * if str has small characters then only use uppercase method else dont use it.  -> criteria
 * obj = {
 *    "name" : "spoORTHY"
 * }
 */
var obj ={
    "name" : "spoORTHY"
}
for(var i=0; i<obj.name.length; i++){
    // check how many times the loop runs
    // console.log(i);

    if(obj.name[i] == obj.name[i].toLowerCase()){
        obj.name = obj.name.toUpperCase();
        // to stop the loop after converting all characters to uppercase
        break;
    }
}
console.log(obj);
// without using for loop;
// str == str.toUpperCase()   (checks for whole str at a time)