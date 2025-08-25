// 5.
let products = [
{ id: 1001, name: "Noise Cancelling Headphones", price: 349, category: "Electronics", stock: 25, rating: 4.9 },
{ id: 1002, name: "Air Fryer", price: 129, category: "Appliances", stock: 15, rating: 4.6 },
{ id: 1003, name: "Cycling Helmet", price: 79, category: "Fitness", stock: 60, rating: 4.8 },
{ id: 1004, name: "TV Stand", price: 199, category: "Furniture", stock: 12, rating: 4.4 },
{ id: 1005, name: "Smartphone Case", price: 19, category: "Accessories", stock: 100, rating: 4.5 }
];

let container = document.getElementById("products");

products.forEach(prod => {
  let card = document.createElement("div");
  card.className = "card";

  let name = document.createElement("h3");
  name.innerText = prod.name;

  let price = document.createElement("p");
  price.className = "price";
  price.innerText = `$${prod.price}`;

  let category = document.createElement("p");
  category.className = "category";
  category.innerText = prod.category;

  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(category);

  container.appendChild(card);
});
