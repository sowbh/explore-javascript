/**
 *   / -> gives quotient
 *   % -> gives reminder
 */

// ex1
var a=10;
var b=2;
console.log(`${a/b}`);
console.log(a%b);

console.log(a%b+2);
console.log(b%a*3);

console.log(b++ % a == 0);

console.log(b);

console.log((2%3==b++)+10);
// if b is not defined earlier, it defaults to undefined in sloppy mode, and the comparison 2 == undefined evaluates to false 
// false + 10 = 10

console.log(0.1+0.2==0.3);
// 0.1 + 0.2 is slightly greater than 0.3 due to floating-point precision, the comparison evaluates to false

console.log(0.2+0.5==0.7);
// the sum is exactly 0.7, the comparison evaluates to true

console.log("---------------------------------------------------------------------------");

/**
 *  Logical operators-
 *   && -> and; || -> or; !->not
*/

// and operator-
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("---------------------------------------------------------------------------");

// comparison operator-
// ==, <=, >=, <, >
console.log(10 == '10' && false);
console.log(10>=1 && 1<=10);
console.log(3>1 && 10<10);

console.log("---------------------------------------------------------------------------");

// ex2
var gender = "MALE";
var age = 21;
console.log(gender == 'Female' && age>=21);
console.log(gender == 'female' && age>=21);
console.log(gender == 'Female' && age<21);

console.log("---------------------------------------------------------------------------");

console.log(gender == 'Male' && age>=24);
console.log(gender == 'MALe' && true);

console.log("---------------------------------------------------------------------------");

console.log(0 && 0);
console.log(0 && 1);
console.log(1 && 0);
console.log(1 && 1);

console.log("---------------------------------------------------------------------------");

console.log("Str" && null);
console.log(10 && -1);
console.log(true && '0');
console.log('0' && true);

console.log("---------------------------------------------------------------------------");

// ex3
var a=10;
var b=11;
console.log(a==10 && b++ == 11);
console.log(b);

console.log(a!=10 && ++b==12);
console.log(b);

console.log(b++ !=false && ++a == 11);
console.log(b,a);

console.log("---------------------------------------------------------------------------");

console.log(a++ == a && b++ == a && true);
console.log((true && 10 == 10)&& true);
console.log(a,b);

console.log(gender == "MALe".toUpperCase() && true);

