/**
 * check if a person is indian or not. if indian then check gender else not an indian
 */
var country = "Indian";
if(country == "Indian"){
    var gender = "Male";
    if(gender == "Male" || gender == "Female"){
        console.log("Hello");
    }
    else{
        console.log("Invalid character");
    }
}
else{
    console.log("Not an Indian");
}