// syntax;
// fetch(URL, options)

const URL = "https://fakestoreapi.com/products";

// console.log(fetch(URL));
//  if ok:true is visible then we can able to convert this obj to JSON format

// without error handling
// fetch(URL)
// .then(response => {
//     if(response.ok){
//         return response.json();
//     }    
// })    
// .then(data => console.log(data));

/**
 * http status codes-
 *   100 - 199 = Informational responses
 *   200 - 299 = Success state/ successful responses
 *   300 - 399 = Redirection responses
 *   400 - 499 = Client Error responses
 *   500 - 599 = Server Error responses
 */

// with error handling
// fetch(URL)
// .then(response => {
//     console.log(response);
//     return response.json();
// })

// // to know the type of data = Object
// // .then(data => console.log(typeof(data)))

// .then(data => console.log(data))
// .catch(err => console.log("Error"));

// to access array of objects
fetch(URL)

// coverting response object to json format
.then(response => response.json())
.then(data => {
    for(let i=0; i<data.length; i++){
        console.log(data[i]);

        // to display only title
        // console.log(data[i].title);

        // to print category
        // console.log(data[i].category);
    }
})
.catch(err => console.log("Error"));
