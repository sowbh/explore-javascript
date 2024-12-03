var x=20;
x=30;
var x;
console.log(x);

/**
 * interpreter takes the above code in this way
 * var x=20;
 * var x;
 * x=30;
 * console.log(x);
 */


/**
 * here, initial value of any variable in var keyword will always be undefined
 * line1: intialization= (declaration + assignment) of x is done and is assigned with a value of 20
 * line2: x is re-assigned with a value of 30
 * line3: var x; this declaration gets ignored because x is already declared
 * line4: the value of x ie; 30 is displayed.  
 */