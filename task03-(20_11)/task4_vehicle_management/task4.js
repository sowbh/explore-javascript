class Vehicle{
    model;
    licensePlate;
    mileage;

    constructor(model, licensePlate, mileage){
        this.model = model;
        this.licensePlate = licensePlate;
        this.mileage = mileage;
    }

    drive(miles){
        this.mileage += miles;
    }

    getMileage(){
        console.log(`Current mileage: ${this.mileage} miles`);
    }
}

var harrier = new Vehicle("Tata Harrier", "KA35AB1234", 15000);
console.log(harrier);

harrier.drive(300);
harrier.getMileage();