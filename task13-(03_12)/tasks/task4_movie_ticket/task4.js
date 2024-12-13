/**
 * Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

Weekends: Standard price of $15. Seniors and children receive a 30% discount.
 */
var day = "Saturday"; 
var age = 65; 
var price;

if (age < 0) {
  console.log("Invalid age. Age cannot be negative.");
} else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
  // weekday pricing
  price = 12; // standard price
  if (age < 12 || age >= 65) {
    price = price - price * 0.5; // 50% discount
  }
  console.log("Ticket price: " + price);
} else if (day === "Saturday" || day === "Sunday") {
  // weekend pricing
  price = 15; // standard price
  if (age < 12 || age >= 65) {
    price = price - price * 0.3; // 30% discount
  }
  console.log("Ticket price: " + price);
} else {
  console.log("Invalid day.");
}
