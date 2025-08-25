// 1. 
let products = [
{ id: 201, name: "Smartphone", price: 699, category: "Electronics", stock: 50, rating: 4.6 },
{ id: 202, name: "Blender", price: 49, category: "Appliances", stock: 20, rating: 4.3 },
{ id: 203, name: "Yoga Mat", price: 25, category: "Fitness", stock: 100, rating: 4.9 },
{ id: 204, name: "Office Desk", price: 299, category: "Furniture", stock: 10, rating: 4.2 },
{ id: 205, name: "Bluetooth Speaker", price: 79, category: "Electronics", stock: 60, rating: 4.7 }
];

let container = document.getElementById("products");

products.forEach(product => {
  let card = document.createElement("div");
  card.className = "card";

  // product Name
  let name = document.createElement("h3");
  name.innerText = product.name;
  card.appendChild(name);

  // price
  let price = document.createElement("p");
  price.innerText = "Price: $" + product.price;
  card.appendChild(price);

  // category
  let category = document.createElement("p");
  category.innerText = "Category: " + product.category;
  card.appendChild(category);

  // rating
  let rating = document.createElement("p");
  rating.innerText = "Rating: ⭐ " + product.rating;
  card.appendChild(rating);

  // button
  let button = document.createElement("button");
  button.className = "btn";
  button.innerText = "Buy Now";
  button.addEventListener("click", () => {
    alert(product.name + " added to cart!");
  });
  card.appendChild(button);

  container.appendChild(card);
});

