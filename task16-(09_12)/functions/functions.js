// ex1
// function defn
function print(){
    console.log("Data Printed");
}
console.log(print);  //function definition are always stored in functionName

// function calling
print();

// ex2
function funOne(){
    console.log("Function One Called");
    funTwo();       //named functions are hoisted so it can be called function defn
}
function funTwo(){
    console.log("Function Two Called");
}
funOne();
funTwo();

// ex3
function one(){
    console.log("One");
    two();
    console.log("Three");
}
function two(){
    console.log("Three");
}
function four(){
    console.log("Two");
    one();
    console.log("One");
}
four();
one();

// ex4
function apple(){
    var a=20;
    console.log(a++ + ++a + --a);
    banana();
    console.log(a);
}
function banana(){
    var b=12;
    console.log(++b + b++);
    cherry();
    console.log("Banana...");
}
function cherry(){
    console.log("Cherry");
}
apple();

// ex5  {recursion - a function calling itself. not recommended to use, we get stack error in terminal and infinite output in browser}
// function calling(){
//     console.log("Called");
//     calling();
// }
// calling();