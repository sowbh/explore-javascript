console.log('-----------------------------------------');

console.log(p,q,r,s);
var p=100;
console.log(p);
var q=125;
console.log(q);
console.log(r);
var r=q;
console.log(r);
var s=p+r;
console.log(s+q);

/**
 * initially,
 *  p is undefined,
 *  q is undefined,
 *  r is undefined,
 *  s is undfined,
 * so the value of p,q,r and s will be displayed as undefined
 * 
 * p is assigned with 100
 * value of p : 100 will be displayed
 * 
 * q is assigned with 125
 * value of q : 125 will be displayed
 * 
 * value of r : undefined will be displayed(because we didn't assign any value yet)
 * 
 * r is assigned with the value of q because r=q
 * value of r : 125 will be displayed
 * 
 * s is assigned with value of (p + q) ie; 100 + 125 = 225
 * 
 * atlast,
 * (s + q) = 225 + 125= 350 will be displayed
 * 
 */
