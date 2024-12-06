// 1. indexOf() method
// if the substring is present then returns the index else -1
const text = "JavaScript is awesome";
console.log(text.indexOf("is"));     

// what if not present
console.log(text.indexOf("fun"));

console.log("---------------------------------------------------");

// 2. lastindexOf() method
// string.lastIndexOf(searchValue, fromIndex)
console.log(text.lastIndexOf("Script")); 

console.log(text.lastIndexOf("awesome", 20));
// method starts searching backward from index 20 and finds the occurrence of "awesome" at index 14

// what if not present
console.log(text.lastIndexOf("world"));

// it is case-sensitive
console.log(text.lastIndexOf("java"));

console.log("---------------------------------------------------");

// 3. startsWith() method
// returns boolean values. if present: true, else false
console.log(text.startsWith("Java"));

console.log(text.startsWith("Script"));

console.log("---------------------------------------------------");

// 4. endsWith() method
// Checks if a string ends with the given substring. returns boolean values.
console.log(text.endsWith("awesome"));

console.log(text.endsWith("Java"));

console.log("---------------------------------------------------");

// 5. include() method
// Checks if a substring is present in the string
console.log(text.includes("fun"));

console.log(text.includes("awesome"));

console.log("---------------------------------------------------");

// 6. trim() method
// Removes whitespace from both the beginning and the end of a string
console.log(text.trim());

console.log(text.trim().length);

console.log("---------------------------------------------------");

// 7. padStart() method
// Adds padding at the beginning of the string
// string.padStart(targetLength, padString)
// targetlength > stringlength then it works
console.log(text.padStart(24, "*"));

console.log("---------------------------------------------------");

// 8. padEnd() method
// Adds padding at the end of the string
// string.padEnd(targetLength, padString)
// targetlength > stringlength then it works
console.log(text.padEnd(39,"^"));

console.log("---------------------------------------------------");

// 9. search() method
// method combined with a regular expression (/[0-9]/) is used to find the first numeric character in a string
// string.search(regexp)
// regular expression that specifies the pattern to search for
var str="abc123";
console.log(str.search(/[0-9]/));

// what if no digits in out str
console.log(text.search(/[0-9]/));

console.log("---------------------------------------------------");

// about class, method and object
var name = "unknown person";
class BankAccount{
    accountHolder;
    balance;

    constructor(accountHolder, balance){
        this.accountHolder = accountHolder;
        this.balance = balance;

        // uncomment it to see the output
        // this.name = name;
    }

    deposit(amount){
        // what if we provide a variable outside a class: it can access but we have to define inside constructor
        console.log(name);
        console.log(this.name);
    }
}

var icici= new BankAccount("Taylor", 5000);
console.log(icici);

icici.deposit(2000);
