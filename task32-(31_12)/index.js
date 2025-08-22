// error handling

// try, catch, finally, throw

// 1
function division(val1, val2) {
    try {
        // risky code

        if (val2 === 0) {
            throw "Zero is not allowed";
            // throw new Error("Zero is not allowed")
        }
        else {
            console.log(val1 / val2);
        }
    } catch (error) {
        console.error(error);

        // this displays error object
        // console.error(error.message)
    }
}
// division(10,0);
division(16, 2);

// 2
var x = function () {
    throw "Function raised error";
};
try {
    x();
    console.log("Executed");
} catch (err) {
    console.error(err.message);   //undefined
}
console.log("Executed");

// 3
// using online api
fetch("https://fakestoreapi.com/products")
    .then(response => {
        // if(response.ok) then you will see the error
        if (!response.ok) {
            throw `data failed to fetch ${response.status + " " + response.statusText}`
        }
        return response.json();
    }).then(data => console.log(data))
    .catch(err => console.error(err));

// 4
async function execute() {
    console.log("Redux");
    // this means Promise.resolve("Javascript") in order to display we use .then
    // here for await we need to store it in a variable 
    // await "Javascript";

    let res = await "Javascript";
    console.log(res);
    console.log("Node JS");
}
execute();
console.log("React");

// 5
// let options = {
//     "method" : "POST",
//     "headers" : {
//         "Content-Type" : "application/json"
//     },
//     "body" : JSON.stringify({
//         "name" : "Diksha"
//     })
// }
// fetch("http://localhost:3000/data", options)
// .then(response => {
//     if(response.ok){
//         console.log("Data inserted");
//     }
//     else{
//         console.log("Data failed to insert");
//     }
// })
// .catch(err => console.log(err));

// async function getData(){
//     try{
//         // risky code
//         let response = await fetch("http://localhost:3000/data/1");
//         // because there's no id:1
//         let data = await response.json();
//         console.log(data);
//     } catch(err){
//         console.error(err.message);
//     }
// }
// getData();

// above can also be written as;
async function getData() {
    try {
        let res = await fetch("http://localhost:3000/data/1")
        if (!res.ok) {
            throw `Id not available ${res.status + " " + res.statusText}`
        }
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getData();

// 6
// using async and await, based on name delete the data;
// criteria is: we know the name but not id

let deleteDataByName = async (name) => {
    try {
        let response = await fetch("http://localhost:3000/data");
        if (response.ok) {
            let data = await response.json();
            data.forEach(async obj => {
                // console.log(obj.name === name ? obj.id : false);

                if (obj.name === name) {
                    let res = await fetch(`http://localhost:3000/data/${obj.id}`, {
                        "method": "DELETE"
                    })
                    if (response.ok) {
                        console.log("Data deleted");
                    }
                }
                else {
                    console.log("User not available");
                }
            });
        } 
        else {
            throw new Error(response.status + " " + response.statusText);
        }
    }
    catch (err) {
        console.error(err.message);
    }

    // Before error there comes a finally block
    // finally{
    //     console.log("Execution completed");
    // }
    
}
deleteDataByName("Diksha");
