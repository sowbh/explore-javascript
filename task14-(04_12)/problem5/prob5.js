/**
 * var obj = {
 *      "name" : "Prajakta Koli",
 *      "street" : "kPHB"
 * }
 * convert name to capital and street to small letters.
 * {"name" : "PRAJAKTA KOLI", "street" : "kphb"}
 */
var obj = {
    "name" : "Prajakta Koli",
    "street" : "kPHB"
}
// console.log(obj.name.toUpperCase(), obj.street.toLowerCase());

// we need ans in obj so;
obj.name = obj.name.toUpperCase();
obj.street = obj.street.toLowerCase();
console.log(obj);