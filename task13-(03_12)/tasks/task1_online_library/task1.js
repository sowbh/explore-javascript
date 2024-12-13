/**
 * Basic Membership: Access to only free books.

Standard Membership: Access to free books and discounted paid books.

Premium Membership: Access to all books, including exclusive content.
 */

var membershipType = "Standard";

if (membershipType === "Basic") {
    console.log("You have access to free books.");
}
else if (membershipType === "Standard") {
    console.log("You have access to free books and discounted paid books.");
}
else if (membershipType === "Premium") {
    console.log("You have access to all books, including exclusive content.");
}
else {
    console.log("Invalid membershipType");
}