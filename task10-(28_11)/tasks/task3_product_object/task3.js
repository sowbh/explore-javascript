/**
 *  given an object product with the properties id, name, price, and category. Perform the following operations:
Access the price property and print it.
Modify the category property to “Electronics”.
Add a new property inStock to the product object with the value true.
Delete the id property from the product object.

 */
var product = {
    "id" : "1",
    "name" : "Redmi Note 14 Pro 5g",
    "price" : "35000",
    "category" : "Smartphones"
}

console.log(product);

console.log(product["price"]);

product.category = "Electronics";
console.log(product);

product["inStock"] = true;
console.log(product);

delete product.id;
console.log(product);