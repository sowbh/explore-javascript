// https://www.jsv9000.app/ to visualize the effect of callstack/asynchronous operations

// callstack works only for functions(any functions);

// ex1
function x(){
    console.log("X Function");
}
function y(){
    console.log("Y Function");
}

x();
y();

console.log("--------------");

// ex2
console.log("1");
setTimeout(() => {
    // console.log("2"), 2000);   -> without {}
    console.log("2");
}, 2000);
console.log("3");

console.log("--------------");

// ex3
const foo = () => console.log("First");
const bar = () => setTimeout( () => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();

// task: documentation on v8 engine
