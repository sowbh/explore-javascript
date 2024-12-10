/**
 *  given an object car with the properties make, model, year, and color. Perform the following operations:
Access the make property and print it.
Modify the color property to “Black”.
Add a new property engineType to the car object with the value “V6”.
Delete the year property from the car object.

 */
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Red"
}

console.log(car);

console.log(car.make);

car.color = "Black";
console.log(car);

car["engineType"] = "V6";
console.log(car);

delete car.year;
console.log(car);