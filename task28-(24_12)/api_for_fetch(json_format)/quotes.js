fetch("https://dummyjson.com/quotes")
.then(response => response.json())

// to view all the quotes; 
// .then(data => {
//     for(let i=0; i<data.quotes.length; i++){
//         console.log(data.quotes[i]);
//     }
// })

// to view last quote;
.then(data => console.log(data.quotes[data.quotes.length-1]))
.catch(err => console.error("Not found"));