// class creation
class Car{
    engine;
    power;
    engineCC;
    colour;
    brand;

    // constructor
    constructor(engine, power, engineCC, colour, brand){
        // to access properties from same class
        this.engine = engine;
        this.power = power;
        this.engineCC = engineCC;
        this.colour = colour;
        this.brand = brand;
    }
}

// object creation
var nano = new Car("Diesel", "200bhp", "1000", "Red", "Tata");
console.log(nano);

console.log("Car 2");

var audi = new Car("Diesel", "650bhp", "2000", "Blue", "Audi");
console.log(audi);

// to know about properties in different cars 
console.log(nano.brand);

console.log(audi.power, audi.brand);

console.log("---------------------------------------------------")