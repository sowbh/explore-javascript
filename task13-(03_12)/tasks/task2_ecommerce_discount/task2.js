/**
 * Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.
 */
var membershipStatus = "VIP";  //or regular
var amount = 350; 

if (amount < 0) {
  console.log("Invalid amount.");
} else if (membershipStatus === "Regular") {
  //discounts for regular customers
  if (amount < 100) {
    console.log("No discount. " + amount);
  } else if (amount <= 500) {
    amount = amount - amount * 0.05; // 5% discount
    console.log("5% discount applied. " + amount);
  } else {
    amount = amount - amount * 0.10; // 10% discount
    console.log("10% discount applied. " + amount);
  }
} else if (membershipStatus === "VIP") {
  // discounts for VIP customers
  if (amount < 100) {
    amount = amount - amount * 0.10; // 10% discount
    console.log("10% discount applied. " + amount);
  } else if (amount <= 500) {
    amount = amount - amount * 0.15; // 15% discount
    console.log("15% discount applied. " + amount);
  } else {
    amount = amount - amount * 0.20; // 20% discount
    console.log("20% discount applied. " + amount);
  }
} else {
  // Invalid membership status
  console.log("Invalid membership status.");
}
