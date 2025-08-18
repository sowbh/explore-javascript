// fetch("http://localhost:3000/students")

// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error("Error Raised"));

// http methods;
/**
 * get - to receive data
 * post - to send data
 * put - to update data (updates whole obj)
 * patch - to update data (partial update (only selected item- id, name etc))
 * delete - to delete/erase data
*/

//1. get method
// let options = {
//     "method" : "GET"
// }

// using limit in a url;
// fetch("http://localhost:3000/students?_limit=3", options)

// sort based on name
// fetch("http://localhost:3000/students?_sort=name", options)

// sort based on id
// ascending
// fetch("http://localhost:3000/students?_sort=id", options)

// descending
// fetch("http://localhost:3000/students?_sort=-id", options)

// sort and limit
// fetch("http://localhost:3000/students?_sort=name&_limit=3")

// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error("Error Raised"));


// 2. post method
let options = {
    "method" : "POST",
    "headers" : {
        // from my application, i'm sending json file
        "Content-Type" : "application/json"
    },
    // body wont accept obj. it only accepts img, text so use 
    // JSON.stringify() - converts obj to string
    // JSON.parse() - converts string to obj

    "body" : JSON.stringify({
        "id" : "6",
        "name" : "Amulya"
    })
}

fetch("http://localhost:3000/students", options)

.then(response => {
    if(response.ok){
        console.log("Data submitted", response.status, response.statusText);
    }
    else{
        console.log("Failed to Store");
    }
})
.catch(err => console.error(err));
