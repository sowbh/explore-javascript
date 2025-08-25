// 3.
let products = [
{ id: 401, name: "Wireless Mouse", price: 29, category: "Accessories", stock: 150, rating: 4.5 },
{ id: 402, name: "Portable Fan", price: 19, category: "Appliances", stock: 40, rating: 4.3 },
{ id: 403, name: "Resistance Bands", price: 15, category: "Fitness", stock: 120, rating: 4.9 },
{ id: 404, name: "Floor Lamp", price: 99, category: "Furniture", stock: 8, rating: 4.2 },
{ id: 405, name: "Tablet", price: 199, category: "Electronics", stock: 25, rating: 4.7 }
];

let container = document.getElementById("products");

products.forEach(prod => {
  let card = document.createElement("div");
  card.className = "card";

  let name = document.createElement("h3");
  name.innerText = prod.name;

  let price = document.createElement("p");
  price.innerText = `Price: $${prod.price}`;

  let stock = document.createElement("p");
  stock.innerText = `Stock: ${prod.stock}`;

  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(stock);

  container.appendChild(card);
});
