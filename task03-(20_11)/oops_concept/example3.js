// class creation
class Vehicle{
    brand;
    model;
    fuelType;
    colour;

    // constructor
    constructor(brand, model, fuelType, colour){
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
        this.colour = colour;
    }

    // method creation
    start(){
        console.log("Engine Started", this.brand);
    }

    stop(){
        console.log("Engine Stopped", this.brand);
    }

    // we can take parameters inside a method
    accelerate(speed){
        console.log(speed,"Press")
    }
}

// object creation
var scooty1 = new Vehicle("Honda", "Activa 6G", "Petrol", "Red");
console.log(scooty1);

// these are non-static methods - invoked using object reference/ variable reference
scooty1.start();

var scooty2 = new Vehicle("TVS", "Jupiter 125", "Petrol", "Matte Black");
console.log(scooty2);

// these are non-static methods - invoked using object reference/ variable reference
scooty2.start();
scooty2.accelerate("20Kmph");

// static methods - pre defined methods which are related to class