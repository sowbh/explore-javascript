/**
 * given an object employee with the properties name, age, position, and salary. Perform the following operations:
Access the position property and print it.
Modify the salary property to 50000.
Add a new property department to the employee object with the value “HR”.
Delete the age property from the employee object.

 */
var employee = {
    "name" : "Ruchika",
    "age" : "27",
    "position" : "SDE",
    "salary" : "20K"
}

console.log(employee);

console.log(employee["position"]);

employee["salary"] = "50000";
console.log(employee);

employee["department"] = "HR";
console.log(employee);

delete employee.age;
console.log(employee);