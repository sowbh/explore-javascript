// timers(setTimeout and setInterval) starts immediately
// if callstack is free then setTimeout works


console.log("Start");
// console.time("time");

setTimeout(() => console.log("First callback"), 3000);
for(let i=0; i<50; i++){
    console.log("i");
}
setTimeout(() => console.log("Second callback"), 1000);
// console.timeEnd("time");

// here, synchronous code = for loop;
// asynchronous code = setTimeout 

// console.time("time") n console.timeEnd("time") works only for synchronous code (for loop)
// in settimeout, outputs will be dependent on synchronous execution time for asynchronous code
