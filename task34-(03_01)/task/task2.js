// 2.
let products = [
{ id: 701, name: "Action Camera", price: 299, category: "Electronics", stock: 20, rating: 4.8 },
{ id: 702, name: "Toaster", price: 29, category: "Appliances", stock: 40, rating: 4.2 },
{ id: 703, name: "Tennis Racket", price: 129, category: "Sports", stock: 60, rating: 4.5 },
{ id: 704, name: "Dining Table", price: 799, category: "Furniture", stock: 5, rating: 4.6 },
{ id: 705, name: "VR Headset", price: 599, category: "Electronics", stock: 15, rating: 4.9 }
];

let container = document.getElementById("products");

products.forEach(prod => {
  let card = document.createElement("div");
  card.className = "card";

  let name = document.createElement("h3");
  name.innerText = prod.name;

  let price = document.createElement("p");
  price.innerText = `Price: $${prod.price}`;

  let rating = document.createElement("p");
  rating.innerText = `Rating: ⭐ ${prod.rating}`;

  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(rating);

  container.appendChild(card);
});