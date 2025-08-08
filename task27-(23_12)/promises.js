// observe the working of asynchronous operations using promises
// https://www.jsv9000.app/ 

function first() {
    setTimeout(() => {
        console.log('Printed some data');
    }, 1000);
    return new Promise(function (resolve, _) {
        resolve('Success');
    });
}
// function call
// first();

// promise obj will be displayed
// console.log(first());

first()
.then(res => console.log(res))
.catch(err => console.log('Failure')); 
