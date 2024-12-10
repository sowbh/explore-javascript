// CRUD(Create Read Update Delete) operations-
var object = {
    // keys  :  values
    "empName" : "Shiva",
    "tech" : "JS",
    "isAlive" : true,
    "empName" : "Shiva Kumar",   //re-assigned with new value then it takes the recent/latest one
    "empname" : "Saroj"         //keys are case-sensitive
}

//creating new property and adding into the existing object
object["gender"] = "Male";
console.log(object);

// read
console.log(object.empName);

// update
object["tech"] = "Javascript";
console.log(object);

// delete
delete object.empname;
console.log(object);

console.log("-------------------------------------------------------------------------------------");

//to add address to the existing object
// new object address
var address = {
    "State" : "Karnataka",
    "City" : "Bengaluru",
    "Pincode" : "560001"
}

console.log(address);
// link 2 objects 
object["address"] = address;      //dynamically added object
console.log(object);

// to access obj which is inside object
console.log(object.address);
console.log(object.address.City);

// to access pincode
// these all snippets displays the same
console.log(object["address"].Pincode);
console.log(object.address["Pincode"]);
console.log(object["address"]["Pincode"]);

console.log("-----------------------------------------------------------------");

// example
var employee = {
    'empName' : "John",
    empId : 100,  // without "" keys are internally converted to a string
    // directly assigning value
    'add' : {
        'state' : 'TamilNadu',
        'capital' : 'Chennai',
    },
    0 : "employee"
}

// to delete empId
delete employee.empId;
console.log(employee);

// to access capital
console.log(employee.add.capital);

console.log(employee[0]);
// when keys are numbers then use [] else . for strings but [] accepts both strings and numbers