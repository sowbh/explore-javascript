// 1

const URL1 = "https://dummyjson.com/quotes";
fetch(URL1)
.then(response => response.json())

.then(data1 => console.log(data1))
.catch(err => console.log("Error"));

// console.log("------");

// 2

const URL2 = "https://dummyjson.com/todos";
fetch(URL2)
.then(response => response.json())

.then(data2 => console.log(data2))
.catch(err => console.log("Error"));

// console.log("------");

// 3

const URL3 = "https://jsonplaceholder.typicode.com/photos";
fetch(URL3)
.then(response => response.json())

.then(data3 => console.log(data3))
.catch(err => console.log("Error"));

// console.log("------");

// 4

const URL4 = "https://randomuser.me/api/";
fetch(URL4)
.then(response => response.json())

.then(data4 => console.log(data4))
.catch(err => console.log("Error"));

// console.log("------");

// 5

const URL5 = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(URL5)
.then(response => response.json())

.then(data5 => console.log(data5))
.catch(err => console.log("Error"));
