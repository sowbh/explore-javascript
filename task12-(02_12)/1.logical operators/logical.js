/**
 * logical operator types;
 *  and - && : 
 *       true && true = true
 *       true && false = false
 *       false && true = false
 *       false && false = false
 * 
 * or - || :
 *      true || true = true
 *      true || false = true
 *      false || true = true
 *      false || false = false
 * 
 * not - ! :
 *      !true = false
 *      !false = true
 */

console.log(10 == 10 || 11!=11);  //true
console.log(10 > 10 || 9!='9');   //false
console.log(10>'10' || 9!=='9');  //true

console.log("----------------------------------------------------------------------");

var a=10;
console.log(a!=11 || ++a);  //true
console.log(a);             //10

console.log(a<9 || ++a);    //11
console.log(a);             //11

console.log((a>10 && 10==a) || a<11);  //false

console.log((a==11 && a>10) || ++a > 11); //true
console.log(a);                           //11

console.log("----------------------------------------------------------------------");

console.log(!true); //false
console.log(!false); //true

var a=10, b=20;
console.log((a>b) || (b==a+10 && b==a)); //false
console.log(!(a>b));                     //true

