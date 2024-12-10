/**
 * Access the email of the second employee (Bob) and print it.
Modify the phone number of Alice to “555-1111”.
Add a new property department with the value “Engineering” to the first employee (Alice).
Delete the location property from the company object.
 */

const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
};

console.log(company);

console.log(company.employees[1].contact.email);

company.employees[0].contact.phone = "555-1111";
console.log(company);

company.employees[0]["department"] = "Engineering";
console.log(company);

delete company.location;
console.log(company);
  