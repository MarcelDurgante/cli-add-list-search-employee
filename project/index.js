// The third-party lib 'prompt-sync' allow us to ask the user for inputs.
import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt("First Name: ");
// checks if input is not an empty string. 
if (!firstName) {
    console.error(`Invalid first name`);
    // exits the app with 1 code which is an error code instead of passing just zero.
    process.exit(1);
}
// If the above passes we add firstName to the employee object
employee.firstName = firstName;

let lastName = prompt("Last Name: ");
if (!lastName) {
    console.error(`Invalid last name`);
    process.exit(1);
}
employee.lastName = lastName;

// Get year start date
let startDateYear = prompt("Employee Start Year (1990-2023): ");
// try to convert the string into a number
startDateYear = Number(startDateYear);
// After converting, check if it is a valid integer (if it was possible to convert into a number line 26 it should be a valid integer)
if (!Number.isInteger(startDateYear)) {
    console.error(`Enter a valid start date year`);
    process.exit(1);
}
// Check if the number is in the year range
if (startDateYear < 1990 || startDateYear > 2023) {
    console.error(`Enter a start date year within the correct range`);
    process.exit(1);
}

// Get month start date
let startDateMonth = prompt("Employee Start Date Month (1-12): ");
startDateMonth = Number(startDateMonth);
// Check if it is a valid integer again
if (!Number.isInteger(startDateMonth)) {
    console.error(`Enter a valid start date month`);
    process.exit(1);
}
// Check if the number is in month range
if (startDateMonth < 1 || startDateMonth > 12) {
    console.error(`Enter a start date month within the correct range`);
    process.exit(1);
}

// Get day start date
let startDateDay = prompt("Employee Start Date Day (1-31): ");
startDateDay = Number(startDateDay);
// Check valid integer
if (!Number.isInteger(startDateDay)) {
    console.error(`Enter a valid start date day`);
    process.exit(1);
}
// Check number is in day range
if (startDateDay < 1 || startDateDay > 31) {
    console.error(`Enter a start date day within the correct range`);
    process.exit(1);
}

// If date elements are correct we create a new date object. Observation: we subtract 1 from 'startDateYear-1' to pass the correct value to JavaScript as month array in the date obj is zero based, which means jan is zero, feb is one, and so on.
employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
console.log(employee.startDate); // 1989 - 12 - 31T23:00:00.000Z

// Get if active
let isActive = prompt("Is employee active (yes or no): ");
// Check if incorrect value 'yes' or 'no' only was entered. If not a 'yes' or 'no' the expression below will evaluates to true an will log the error
if (isActive !== "yes" && isActive !== "no") {
    console.error(`Enter yes or no for employee active status`);
    process.exit(1);
}
// evaluates to true if yes if not false(not active so)
employee.isActive = (isActive === "yes");

// Output Employee JSON
const json = JSON.stringify(employee, null, 2);
console.log(`Employee: ${json}`);

/*  whole questions and Employee JSON Output

First Name: Marcel
Last Name: Durgante
Employee Start Year(1990 - 2023): 1990
Employee Start Date Month(1 - 12): 1
Employee Start Date Day(1 - 31): 1
1989 - 12 - 31T23:00:00.000Z
Is employee active(yes or no): yes
Employee: {
    "firstName": "Marcel",
    "lastName": "Durgante",
    "startDate": "1989-12-31T23:00:00.000Z",
    "isActive": true
}
*/