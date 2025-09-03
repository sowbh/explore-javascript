// console.log(document.body);

// to access tags or elements we use api method;

// 1
let div = document.getElementById("text");
console.log(div);

// 3 ways to access its content
// console.log(div.innerHTML);
// console.log(div.innerText);
// console.log(div.textContent);

div.innerText = "Hello World 2";
console.log(div.innerText);

div.innerText = "<i>Hello World</i>";
div.innerHTML = '<span style="color:red">Hello World</span>';
console.log(div.innerText);
console.log(div.innerHTML);

console.log("---");

// 2
let container = document.getElementById("container");

let arr = [{"id" : 1}, {"id": 2}, {"id" : 3}, {"id" : 4}, {"id" : 5}, {"id" : 6}]

// access this arr and add inside the container using <p> tag

arr.forEach(obj => {
    let p = document.createElement("p");
    p.innerText = `id : ${obj["id"]}`;
    p.className = "ids";
    
    container.appendChild(p);
})

// no need to write document.body.appendChild() because we have already created div tag inside body

// ---

// 3
// using api and json server;

let contain = document.getElementById("cnt");

let getData = async () =>{
    let response = await fetch("http://localhost:5000/products");
    let data = await response.json();
    printData(data);
}

// named functions are hoisted, arrow functions wont work here
function printData(data){
    data.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML = `
        <h2> ${obj.title} </h2>
        <img src='https://placehold.co/400x400.png'>
        <p> ${obj.price} </p>
        <p> ${obj.description} </p>
        `

        contain.appendChild(item);
    })
}

getData();
