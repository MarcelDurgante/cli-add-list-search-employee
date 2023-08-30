import employees from './data.json' assert { type: 'json' }
import createPrompt from 'prompt-sync';

let prompt = createPrompt();

function getInput(promptText, validator, transformer) {
  let value = prompt(promptText);
  if (validator && !validator(value)) {
    console.error(`--Invalid input`);
    process.exit(1);
  }
  return value;
}

// Validator functions -------------------------------------

const isStringInputValid = (input) => {
  return (input) ? true : false;
}

const isBooleanInputValid = function (input) {
  return (input === "yes" || input === "no");
}

const isStartYearValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1990 || numValue > 2023) {
    return false;
  }
  return true;
};

const isStartMonthValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
    return false;
  }
  return true;
}

const isStartDayValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(input) || numValue < 1 || numValue > 31) {
    return false;
  }
  return true;
}

// Application commands functions----------------------------------

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

  function addEmployee() {
    console.log(`Add Employee -----------------------------`);
    console.log('');
    let employee = {}; 
    employee.firstName = getInput("First Name: ", isStringInputValid); 
    employee.lastName = getInput("Last Name: ", isStringInputValid);
    let startDateYear = getInput("Employee Start Year (1990-2023): ", isStartYearValid(1990, 2023));
    let startDateMonth = getInput("Employee Start Date Month (1-12): ", isStartMonthValid(1, 12));
    let startDateDay = getInput("Employee Start Date Day (1-31): ", isStartDayValid(1, 31));
    employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
    employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => (i === "yes"));

    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
  }

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
}