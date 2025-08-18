// 3. put method
// put method modifies whole object(in output it displays name and then id). to overcome this mention id compulsorily

// first there should be an id 4, then we can modify it using put method
// so add it using post method 

// let options = {
//     "method" : "POST",
//     "headers" : {
//         "Content-Type" : "apllication/json"
//     },
//     "body" : JSON.stringify({
//         "id" : "4",
//         "name" : "d"
//     })
// }

// in order to update id:4 with name as D then;
// let options = {
//     "method" : "PUT",
//     "headers" : {
//         "Content-Type" : "application/json"
//     },
//     "body" : JSON.stringify({
//         // mandatory step
//         "id" : "4",
//         "name" : "D"
//     })
// }

// here in url data/4 because we aremodifying 4th id
// fetch("http://localhost:3000/data/4", options)
// .then(response => {
//     if(response.ok){
//         console.log(response.statusText);
//     }
// })
// .catch(err => console.error(err));

// added 5th id using postman application

// 4. patch method
// updates data partially. it wont disturb object

// let options = {
//     "method" : "PATCH",
//     "headers" : {
//         "Content-Type" : "application/json"
//     },
//     "body" : JSON.stringify({
//         "id" : "4",
//         "name" : "denmark"
//     })
// }

// mention id number in the url

// fetch("http://localhost:3000/data/4", options)
// .then(response => {
//     if(response.ok){
//         console.log(response.statusText);
//     }
// })
// .catch(err => console.log(err));

// 5. delete method
// while deleting data always mention id number

let options = {
    "method" : "DELETE",
    "headers" : {
        "Content-Type" : "application/json"
    }
}

// mention id number while updating/deleting
// fetch("http://localhost:3000/data/4", options)
// .then(response => {
//     if(response.ok){
//         console.log(response.statusText);
//     }
// })
// .catch(err => console.error(err));

// to delete all items from data[];
fetch("http://localhost:3000/data")
.then(response => response.json())
.then(data => {
    for(let i=0; i<data.length; i++){
        // deletes sequentially
        fetch(`http://localhost:3000/data/${data[i].id}`, options)
        .then(res => {
            if(res.ok){
                console.log(res.statusText);
            }
        })
    }
})
