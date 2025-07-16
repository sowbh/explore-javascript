/**
 *  promises
 *       - used to overcome callback hell because in callback hell, error handling is difficult
 *       - used to handle asynchronous code, it defines the state of code, whether it is fulfilled or rejected
 *       - syntax;
 *                 variable refVar = new Promise(callback);
 *                  where, callback = resolve, reject
 * 
 *  promises is one of these states;
 *      1. pending
 *      2. fulfilled
 *      3. rejected  
 * 
 *  promises will always be in Micro Task Queue but setTimeout, setInterval will be in Macro Task Queue
 * 
 *   for;
 *      resolve() = .then() handles result
 *      reject() = .catch() handles error
 */

function logA(){ console.log('A') }
function logB(){ console.log('B') }
function logC(){ console.log('C') }
function logD(){ console.log('D') }

logA();
setTimeout(() => logB(), 0);

// here, Promise.resolve() is a static method
Promise.resolve().then(logC);
logD();

// setTimeout and Promise are asynchronous
// Promises has higher priority than setTimeout
