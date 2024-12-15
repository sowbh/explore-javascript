/**
 * input: yadhtrib;
 * output: birthday;
 */
var str="yadhtrib";
var res= '';
for(var i=str.length-1; i>=0; i--){
    res+=str[i];
}
console.log(res);

// or
// converts to array -> array method applied -> converts to string
console.log(str.split('').reverse().join(''));