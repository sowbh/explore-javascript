/**
 * input: HelloS;
 * output: hELLOs;
 */
var str="HelloS";
var res = '';
for(var i=0; i<str.length; i++){
    if(str[i] == str[i].toUpperCase()){
        res+= str[i].toLowerCase();
    }
    else{
        res+= str[i].toUpperCase();
    }
}
console.log(res);