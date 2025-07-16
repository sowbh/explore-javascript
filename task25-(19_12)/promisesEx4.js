// callback hell in asynchronous code
/* function placeOrder(orderId, callback){
    setTimeout(() => {
        if(true){
            console.log(`Order ${orderId} placed.`);
            callback();
        }
        else{
            console.log("Order failed to place");
        }
    }, 1000);
}
function dispatchOrder(orderId, callback){
    setTimeout(() => {
        if(true){
            console.log(`Order ${orderId} dispatched.`);
            callback();
        }
        else{
            console.log("Dispatch failed");
        }
    }, 1000);
}
function shipOrder(orderId, callback){
    setTimeout(() => {
        console.log(`Order ${orderId} shipped.`);
        callback();
    }, 1000);
}
function outForDelivery(orderId, callback){
    setTimeout(() => {
        console.log(`Order ${orderId} is out for delivery.`);
        callback();
    }, 1000);
}
function deliverOrder(orderId, callback){
    setTimeout(() => {
        console.log(`Order ${orderId} delivered.`);
        callback();
    }, 1000);
}

placeOrder("12345", () => {
    dispatchOrder("12345", () => {
        shipOrder("12345", () => { 
            outForDelivery("12345", () => {
                deliverOrder("12345", () => console.log("Order tracking completed."));
            });
        });
    });
}); */

// converting callback hell to promises;
function placeOrder(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`Order ${orderId} placed.`);
            
            console.log(`Order ${orderId} placed.`);
            resolve();
        }, 1000);
    });
}
function dispatchOrder(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`Order ${orderId} dispatched.`);
            
            console.log(`Order ${orderId} dispatched.`);
            resolve();
        }, 1000);
    });
}
function shipOrder(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`Order ${orderId} shipped.`);
            
            // console.log(`Order ${orderId} shipped.`);
            // resolve();

            console.log("Failed to ship");
            reject();

        }, 1000);
    });
}
function outForDelivery(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`Order ${orderId} is out for delivery.`);
            
            console.log(`Order ${orderId} is out for delivery.`);
            resolve();
        }, 1000);
    });
}
function deliverOrder(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`Order ${orderId} delivered.`);

            console.log(`Order ${orderId} delivered.`);
            resolve();
        }, 1000);
    });
}

placeOrder(12345)

    // if using resolve(`Order ${orderId} placed.`) then;
    // .then((res) => {
    //     console.log(res);
    //     return dispatchOrder(12345);
    // })

    .then(() => dispatchOrder(12345))
    .then(() => shipOrder(12345))
    .then(() => outForDelivery(12345))
    .then(() => console.log(`Order tracking completed.`))

    .catch(() => console.log("Error"));


// to overcome promises;
// async function call() {
//     await dispatchOrder(12345)
//     await shipOrder(12345)
//     await outForDelivery(12345)
//     console.log(`Order tracking completed.`);
// }
// call();
