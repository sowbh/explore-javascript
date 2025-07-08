// callback inside a callback ie; nested callback is known as callback hell

let add = (val, callback) => callback(val + 10);
// named function
// function add(val, callback){
//     callback(val + 10);
// }

add(10, (addRes) => {
    console.log(addRes);
})

let sub = (val, callback) => callback(val - 5);
// named function
// function sub(val, callback){
//     callback(val - 5);
// }

sub(50,(subRes) => {
    console.log(subRes);
})

let mul = (val, callback) => callback(val * 5);
// named function
// function mul(val, callback){
//     callback(val * 5);
// }

mul(10,(mulRes) => {
    console.log(mulRes);
})

let div = (val, callback) => callback(val / 2);
// named function
// function div(val, callback){
//     callback(val / 2);
// }

div(40, (divRes) => {
    console.log(divRes);
})

// callback hell scenario;
add(20, (addRes) => {
    sub(addRes, (subRes) => {
        mul(subRes, (mulRes) => {
            div(mulRes, (divRes) => {
                console.log(divRes);
            })
        })
    })
})
