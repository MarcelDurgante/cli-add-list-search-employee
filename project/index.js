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
