function placeOrder(dispatch){
    console.log("Order Placed");
    // dispatch("Ready to dispatch!");

    dispatch("Failed to dispatch", false);
}

function shipping(outforDelivery){
    console.log("Shipping success");
    outforDelivery("Your order is out for delivery");
}

// placeOrder((message) => {
//     console.log(message);
    
//     shipping((outMessage) => {
//         console.log(outMessage);
//     });
// });

placeOrder((message, status) => {
    if(status){
        console.log(message);
        shipping((outMessage) => {
            console.log(outMessage);
        });
    }
    else{
        console.log(message);
    }
});
