// Import Sample Data
import employees from './data.json' assert { type: 'json' }
import createPrompt from 'prompt-sync';

let prompt = createPrompt();

/*
Log out arguments using an array Node provides called:

*process.argv

> an array containing the command line arguments passed when the Node.js process was launched

console.log(process.argv);
process.exit(0);

 output:
 [
  'C:\\Program Files\\nodejs\\node.exe',      
  'C:\\Users\\marcel\\projects\\javascript-fundamentals\\project2\\index.js',
]

The first value is the full path to NodeJS on my machine.
The second is the full path to the specific file that were running.

In the terminal, changing and running the command => node index.js list, the output changes, 
and now we have 'list' at index 2 of the array, or is 3rd item in the array returned using 'process.argv'.

[
  'C:\\Program Files\\nodejs\\node.exe',      
  'C:\\Users\\marcel\\projects\\javascript-fundamentals\\project2\\index.js',
  'list'
]
 */

/*
// Get the command the user wants to execute using what was explained above
 let command = process.argv[2];
console.log(command); 
*/


/**
 * Topic: FUNCTION DECLARATIONS
 * > getInput()
 * 
 * @description : function that's going to be under our application commands.Get the value from the user through the prompt and then return that value.  
 * How we get information from the end user using the prompt, and how we validate that, and then what we do with that result because in some cases we'll 
 * need to do some custom logic for processing that or transforming that.
 * 
 * 3 params: 
 * promptText => which is what we show to the end user.
 * validator function =>  that will go through and validate to ensure that that input value is correct
 * transformer function => which will potentially transform that value into something else.
 *  
 */
function getInput(promptText, validator, transformer) {
  let value = prompt(promptText);
  return value;
}

//> Isolating actions like 'list' and 'add' into their own functions
//*Application commands ----------------------------------

// listEmployees function => No params for these particular types of commands beacause here we are going to execute logic that the user will interact with
function listEmplyess() {
  console.log(`Employee List ----------------------------`);
  console.log('');

  for (let emp of employees) {
    for (let property in emp) {
      console.log(`${property}: ${emp[property]}`);
    }
    console.log('');
    prompt('Press enter to continue...');
    console.log('');
  }
  
  // addEmplyoee function
  function addEmployee() {
    console.log(`Add Employee -----------------------------`);
    console.log('');
    let employee = {};

    let firstName = prompt("First Name: ");
    if (!firstName) {
      console.error(`Invalid first name`);
      process.exit(1);
    }
    employee.firstName = firstName;

    let lastName = prompt("Last Name: ");
    if (!lastName) {
      console.error(`Invalid last name`);
      process.exit(1);
    }
    employee.lastName = lastName;

    let startDateYear = prompt("Employee Start Year (1990-2023): ");
    startDateYear = Number(startDateYear);
    // Check if it is a valid integer
    if (!Number.isInteger(startDateYear)) {
      console.error(`Enter a valid start date year`);
      process.exit(1);
    }
    // Check if the number is in the range
    if (startDateYear < 1990 || startDateYear > 2023) {
      console.error(`Enter a start date year within the correct range`);
      process.exit(1);
    }

    let startDateMonth = prompt("Employee Start Date Month (1-12): ");
    startDateMonth = Number(startDateMonth);
    // Check if it is a valid integer
    if (!Number.isInteger(startDateMonth)) {
      console.error(`Enter a valid start date month`);
      process.exit(1);
    }
    // Check if the number is in the range
    if (startDateMonth < 1 || startDateMonth > 12) {
      console.error(`Enter a start date month within the correct range`);
      process.exit(1);
    }

    let startDateDay = prompt("Employee Start Date Day (1-31): ");
    startDateDay = Number(startDateDay);
    // Check if it is a valid integer
    if (!Number.isInteger(startDateDay)) {
      console.error(`Enter a valid start date day`);
      process.exit(1);
    }
    // Check if the number is in the range
    if (startDateDay < 1 || startDateDay > 31) {
      console.error(`Enter a start date day within the correct range`);
      process.exit(1);
    }

    // Date elements are correct, let's create the date
    employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

    let isActive = prompt("Is employee active (yes or no): ");
    // Check if incorrect value was entered
    if (isActive !== "yes" && isActive !== "no") {
      console.error(`Enter yes or no for employee active status`);
      process.exit(1);
    }
    employee.isActive = (isActive === "yes");

    // Output Employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
    }

//* Applicatin execution (the logic we will run every time our application executes - parse out the command form the command line arguments and where our switch statement resides ) -----------------------------

// Get the command the user wants to execute using what was explained above
const command = process.argv[2].toLowerCase();

switch (command) {

  case 'list':
    listEmployees();
       break;

  case 'add':
    addEmployee();
    break;

  default:
    console.log('Unsupported command. Exiting...');
    process.exit(1);
}

/* output after executing in terminal the cmd: node index.js list

Employee List----------------------------    

id: 0
email: lamb_mcclain @globomantics.com
firstName: Lamb
lastName: Mcclain
dateBirth: 1988 -08-01
startDate: 2001-05 - 22
isActive: false

Press enter to continue...
id: 1
email: bridges_deleon @globomantics.com
firstName: Bridges
lastName: Deleon
dateBirth: 1993-05 - 16
startDate: 2021 - 12-06
isActive: true

Press enter to continue...
id: 2
email: livingston_richardson @globomantics.com
firstName: Livingston
lastName: Richardson
dateBirth: 1992-07 - 18
startDate: 2001 - 12 - 26
isActive: false

Press enter to continue...
id: 3
email: boone_carney @globomantics.com
firstName: Boone
lastName: Carney
dateBirth: 1990 -08-02
startDate: 2006 - 12-04
isActive: false

Press enter to continue...
id: 4
email: rosella_noel @globomantics.com
firstName: Rosella
lastName: Noel
dateBirth: 1991 - 11 - 11
startDate: 2019-03 - 24
isActive: true

Press enter to continue...
id: 5
email: katie_woodward @globomantics.com
firstName: Katie
lastName: Woodward
dateBirth: 1990-05-05
startDate: 2005 -09 -09
isActive: false

Press enter to continue...
id: 6
email: dionne_larsen @globomantics.com
firstName: Dionne
lastName: Larsen
dateBirth: 1988-07 - 14
startDate: 2005-01 - 13
isActive: false

Press enter to continue...
id: 7
email: santos_oneal @globomantics.com
firstName: Santos
lastName: Oneal
dateBirth: 1994-01 - 13
startDate: 2018-05 - 26
isActive: true

Press enter to continue...
id: 8
email: corine_house @globomantics.com
firstName: Corine
lastName: House
dateBirth: 1994 -08 - 28
startDate: 2007 - 10 - 12
isActive: true

Press enter to continue...
Employee list complete

*/

/* output after executing in termina the cmd: 

*node index.js add

add
Add Employee -----------------------------    

First Name: Marcel
Last Name: Durgante
Employee Start Year (1990-2023): 2022
Employee Start Date Month (1-12): 4
Employee Start Date Day (1-31): 7
Is employee active (yes or no): yes
Employee: {
  "firstName": "Marcel",
  "lastName": "Durgante",
  "startDate": "2022-04-06T22:00:00.000Z",    
  "isActive": true
}

*/