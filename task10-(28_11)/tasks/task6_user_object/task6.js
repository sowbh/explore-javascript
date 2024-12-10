/**Access the city property from the address object and print it.
Modify the theme property in the preferences object to “light”.
Add a new property phone to the profile object with the value “555-9876”.
Delete the zip property from the address object.
 */

const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
};

console.log(user);

console.log(user.profile.address.city);

user.preferences.theme = "light";
console.log(user);

user.profile["phone"] = "555-9876";
console.log(user);

delete user.profile.address.zip;
console.log(user);
  