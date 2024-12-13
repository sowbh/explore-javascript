/**
 * Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

 */
var gpa = 2.6; 
var extracurricularActivities = 2; 
var communityServiceHours = 120; 

// merit based scholarship
if (gpa >= 3.5) {
  console.log("Eligible for the Merit-Based Scholarship.");
}

// leadership scholarship
if (gpa >= 3.0 && extracurricularActivities >= 2) {
  console.log("Eligible for the Leadership Scholarship.");
}

// community service scholarship
if (gpa >= 2.5 && communityServiceHours >= 100) {
  console.log("Eligible for the Community Service Scholarship.");
}

// if the student is not eligible for any scholarship
if (gpa < 3.5 && (gpa < 3.0 || extracurricularActivities < 2) && (gpa < 2.5 || communityServiceHours < 100)) {
  console.log("Not eligible for any scholarships.");
}
