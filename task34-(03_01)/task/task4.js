// 4.
let products = [
{ id: 901, name: "Monitor", price: 199, category: "Electronics", stock: 50, rating: 4.6 },
{ id: 902, name: "Microwave Oven", price: 149, category: "Appliances", stock: 20, rating: 4.4 },
{ id: 903, name: "Fitness Tracker", price: 99, category: "Fitness", stock: 80, rating: 4.7 },
{ id: 904, name: "Bookshelf", price: 129, category: "Furniture", stock: 10, rating: 4.3 },
{ id: 905, name: "Gaming Keyboard", price: 99, category: "Electronics", stock: 35, rating: 4.8 }
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
