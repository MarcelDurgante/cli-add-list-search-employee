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