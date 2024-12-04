// class creation
class Product{
    name;
    price;
    category;

    // constructor
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category; 
    }

    // methods
    applyDiscount(amount){
        this.discount = this.price - amount;
    }

    getPriceAfterDiscount(){
        console.log(`Price after discount: ₹${this.discount}`);
    }
}

var laptop = new Product("Laptop", 50000, "Electronics");
console.log(laptop);

laptop.applyDiscount(200);
laptop.getPriceAfterDiscount();

console.log("-----------------------------------------------------");

var smartPhone = new Product("Mobile", 20000, "Electronics");
console.log(smartPhone);

smartPhone.applyDiscount(20);
smartPhone.getPriceAfterDiscount();