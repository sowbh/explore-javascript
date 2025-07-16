// converting this into promises
/* function add(val,callback){
    return callback(val + 10);
}
function sub(val,callback){
    return callback(val - 5);
}
function mul(val,callback){
    return callback(val * 5);
}
function div(val,callback){
    return callback(val / 2);
}

add(20, (addRes) => {
    sub(addRes, (subRes) => {
        mul(subRes, (mulRes) => {
            div(mulRes, (divRes) => {
                console.log(divRes);
            });
        });
    });
} ); */

function add(val){
    return new Promise((resolve, reject) => {
        resolve(val + 10);
    });
}
function sub(val){
    return new Promise((resolve, reject) => {
        resolve(val - 5);
    });
}
function mul(val){
    return new Promise((resolve, reject) => {
        // resolve(val * 5);
        reject("Promise rejected!");
    });
}
function div(val){
    return new Promise((resolve, reject) => {
        resolve(val / 2);
    });
}

// promise shining
add(20)
    .then(addRes => sub(addRes))
    .then(subRes => mul(subRes))
    .then(mulRes => div(mulRes))
    .then(divRes => console.log(divRes))

    .catch(err => console.log(err));
