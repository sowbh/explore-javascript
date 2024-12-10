/**
 *  given an object student with the properties name, age, grade, and school. Perform the following operations:
Access the school property and print it.
Modify the grade property to 95.
Add a new property hobbies to the student object with the value ["reading", "sports"].
Delete the age property from the student object.

 */
var student = {
    "name" : "Abhimanyu",
    "age" : "19",
    "grade" : "87",
    "school" : "SJS"
}

console.log(student);

console.log(student.school);

student.grade = "95";
console.log(student);

student["hobbies"] = ["reading", "sports"];
console.log(student);

delete student.age;
console.log(student);