// The third-party lib 'prompt-sync' allow us to ask the user for inputs.
import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt("First Name: ");
