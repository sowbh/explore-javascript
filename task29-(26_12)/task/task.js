// fetch("https://dummyjson.com/todos")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data); // You can copy it from console
//   })
//   .catch(err => console.error(err));

// write thus in db.json;
// {
//     "data" : []
// }

let data = [
    {
        id: 1,
        todo: 'Do something nice for someone you care about',
        completed: false,
        userId: 152
    },
    { id: 2, 
        todo: 'Memorize a poem', 
        completed: true, 
        userId: 13 
    },
    {
        id: 3,
        todo: 'Watch a classic movie',
        completed: true,
        userId: 68
    },
    {
        id: 4,
        todo: 'Watch a documentary',
        completed: false,
        userId: 84
    }
]

// 1st type;

// for(let i=0; i<data.length; i++){
//     let obj = data[i];
//     let options = {
//         "method" : "POST",
//         "headers" : {
//             "Content-Type" : "application/json"
//         },
//         "body" : JSON.stringify(obj)
//     }

    // on the json-server and get this link; 
//     fetch("http://localhost:4000/data", options)
//     .then(response => {
//         if(response.ok){
//             console.log(response.statusText);
//         }
//     })
//     .catch(err => console.log("Failed"));
// }

// 2nd type;

let options = {
    "method" : "POST",
    "headers" : {
        "Content-Type" : "application/json"
    },
}

for(let i=0; i<data.length; i++){
    let obj = data[i];
    options.body = JSON.stringify(obj);

    fetch("http://localhost:4000/data",options)
    .then(response => {
        if(response.ok){
            console.log(response.statusText);
        }
    })
    .catch(err => console.error(err));
}
