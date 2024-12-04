/**
 * Syntax of class:
 *    class className{
 *        --properties of class--
 *      }
 * 
 *  Syntax of object:
 *    variable referenceVariable = new className();
 *  
 * constructors are special methods used to initialize objects when they are created. it is done by using 
 * constructor() keyword
 * 
 * to access properties from class, this keyword is used
 *    this keyword-> current calling object
 *     .  -> belongs to
 * 
 * parameters = data taken by constructor
 * arguments = data sending to constructor
 * 
 */

// class creation
class Mobile{
    // properties of class
    camera;
    powerButton;
    volumeButton;
    speaker;
    mic;
    logo;

    // constructor
    // here, default constructor is used(no parameters passed)
    constructor(){
        // to access properties from same class
        this.camera = "200MP";
        this.powerButton = "Metal";
        this.volumeButton = "Plastic";
        this.speaker = "Harmon";
        this.mic = "Single Mic";
        this.logo = "Apple"
    }
}

// object creation
var apple = new Mobile();
console.log(apple);

console.log("Mobile 2");

var nokia = new Mobile();
console.log(nokia);

// hence the values are hardcoded so we get same data as output for different objects
// use of parameterized constructor to give data dynamically, by passing parameters into the constructor

console.log("----------------------------------------------");