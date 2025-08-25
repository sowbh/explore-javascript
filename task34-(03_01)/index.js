// 1
let div = document.createElement("div");
div.innerText = "Javascript";

let div1 = document.createElement("div");
div1.innerHTML = "Javascript";

// to append multiple child then use append() not appendChild()
document.body.append(div, div1);

// accessing as well as updating
div1.innerHTML = "JS";
console.log(div1.innerHTML);

// innerText and innerHTML difference;
// use single quotes for styles in dom
let divE = document.createElement("div");
divE.innerText = "<i style='color:red'>Javascript</i>";

let dive = document.createElement("div");
// innerHTML accepts multiple tags
dive.innerHTML = "<i style='color:blue'>Javascript</i><p>Hello World</p>";

// console.log(divE.innerText);
// console.log(dive.innerHTML);
// console prints same so observe it in browser display

document.body.appendChild(divE);
document.body.appendChild(dive);

// 2
// create elements using forEach and append it to a container and append the same container to the body
let arr = ["apple","banana","watermelon","graphes","muskmelon"];
// output: <p>apple</p>,<p>banana</p> ...

let div2 = document.createElement("div");
arr.forEach(ele => {
    let p = document.createElement("p");
    p.innerText = ele;

    div2.appendChild(p);
});
document.body.appendChild(div2);

// using for of;
// for(let data in arr){
//     let p = document.createElement("p");
//     p.innerText = ele;
    
//     div2.appendChild(p);
// }

// using for in; //it returns key
// for(let key in arr){
//     // console.log(key);
//     let p = document.createElement("p");
//     p.innerText = ele;
            
//     div2.appendChild(p);
// }

// 3
// generate array of objects in javascript with fake data having 10 elements
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
// output: <div>
//            <p>id:1, name: "Alice", ...

let div3 = document.createElement("div");
users.forEach(ele => {
    let p = document.createElement("p");
    p.innerText = `id : ${ele.id}, name : ${ele.name}, age : ${ele.age}, city : ${ele.city}, address : ${ele.address}`;
    // p.innerText = ele["id"]+ "," +ele["name"]+ "," +ele["age"]+ "," +ele["city"]+ "," +ele["address"];

    div3.appendChild(p);
})
document.body.appendChild(div3);

