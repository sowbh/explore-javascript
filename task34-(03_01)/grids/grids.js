// create a grid-container and keep adding dynamic data using arr
let users = [
  { id: 1, name: "Alice", age: 25, city: "Bangalore", address: "123 MG Road" },
  { id: 2, name: "Bob", age: 30, city: "Hyderabad", address: "45 Banjara Hills" },
  { id: 3, name: "Charlie", age: 28, city: "Chennai", address: "78 Marina Beach Road" },
  { id: 4, name: "David", age: 35, city: "Delhi", address: "12 Connaught Place" },
  { id: 5, name: "Eva", age: 22, city: "Pune", address: "56 FC Road" },
  { id: 6, name: "Frank", age: 27, city: "Mumbai", address: "34 Marine Drive" },
  { id: 7, name: "Grace", age: 29, city: "Kolkata", address: "67 Park Street" },
  { id: 8, name: "Hannah", age: 24, city: "Jaipur", address: "89 Pink City Bazaar" },
  { id: 9, name: "Ian", age: 33, city: "Ahmedabad", address: "21 SG Highway" },
  { id: 10, name: "Jane", age: 26, city: "Goa", address: "99 Baga Beach Road" }
];

let div = document.createElement("div");
div.className = "grid-container";

users.forEach(obj => {
    let item = document.createElement("div");
    item.className = "item";

    for(let key in obj){
        let p = document.createElement("p");
        p.innerText = `${key} : ${obj[key]}`;
        
        item.appendChild(p);
    }
    div.appendChild(item);
})
document.body.appendChild(div);
