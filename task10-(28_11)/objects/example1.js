/**
 * Objects - Used to store values
 * types; 
 *   class-based object(new className)
 *   literal based object(key-value)
 * 
 * Literal-based objects: stores values in key-value pairs
 *       key in object should always be string(recommended)
 *       value in object can be any type of data
 * 
 * Syntax;
 *     variable refVar = {}
 *     key-value pairs are separated by , (comma). 
 * 
 * Ways to access value from literal objects;
 *    . notation -> refVar.keyName
 *    [] notation -> refVar["keyName"] (recommended)
 *    object.values(ref) -> static method 
 */

// creation of object
var obj = {}
console.log(obj, typeof obj);  // empty object

console.log("----------------------------------------------------------");

// assigning values to the keys
var object = {
    // keys  :  values
    "empName" : "Shiva",
    "tech" : "JS",
    "isAlive" : true,
    "empName" : "Shiva Kumar",   //re-assigned with new value then it takes the recent/latest one
    "empname" : "Saroj"         //keys are case-sensitive
}

console.log(object);

// to access values
console.log(object.empName);  //Shiva Kumar
console.log(object["tech"]);  //JS

// Hi, My name is Moon. I come during night times. create this using new object
var moon = {
    "name": "Moon",
    "duration" : "night"
}

console.log(`Hi, My name is ${moon.name}. I come during ${moon.duration} times.`);
// or
console.log("----------------------------or------------------------------");

console.log(`Hi, My name is ${moon["name"]}. I come during ${moon["duration"]} times.`)
