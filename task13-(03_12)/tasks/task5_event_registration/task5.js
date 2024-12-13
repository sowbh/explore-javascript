/**
 * The user must be 18 years or older to register.

The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

The user must provide a valid email address.
 */
var age = 10; 
var participantsRegistered = 75; 
var email = "user@example.com"; 

var maxParticipants = 100;

if (age < 18) {
  console.log("You must be 18 years or older to register.");
} 
else if (participantsRegistered >= maxParticipants) {
  console.log("The event is full. No more registrations are accepted.");
} 
else if (email === "" || !email.includes("@")) {
  console.log("Please provide a valid email address.");
} 
else {
  console.log("Registration successful! Welcome to the event.");
}
