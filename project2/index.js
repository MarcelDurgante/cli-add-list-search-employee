import employees from './data.json' assert { type: 'json' }
import createPrompt from 'prompt-sync';

let prompt = createPrompt();

// Arrow function to log out employee
const logEmployee = employee => {
  Object.entries(employee).forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}`);
  });
};

const searchById = (emp, empId) => {
  let empArr = Object.entries(emp);
  // console.log(empArr);
  // console.log('4 emp: ', emp);
  empArr.forEach(entry => {
    console.log('empId: ', empId);
    console.log('entry[1]: ', entry[1]);
    if (entry[1] === empId) {
    console.log('equal');
    } else {
      console.log('not equal');
    }
    // console.log(`${entry=[0]}, val: ${entry[1]}`);
  //   console.log('5 entry[0][0]', entry[0][0]);
  //   console.log('6 entry[1]', entry[1]);
  // // console.log(entry);
  });
};


function getInput(promptText, validator, transformer) {
let value = prompt(promptText);
if (validator && !validator(value)) {
  console.error(`--Invalid input`);
  process.exit(1);
};
if (transformer) {
  return transformer(value);
};
  return value;
};

// Validator functions -------------------------------------

const isStringInputValid = input => {
  return (input) ? true : false;
};

const isBooleanInputValid = input => {
  return (input === "yes" || input === "no");
};

const isStartYearValid = input => {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1990 || numValue > 2023) {
    return false;
  };
  return true;
};

const isStartMonthValid = input => {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
    return false;
  };
  return true;
};

const isStartDayValid = input => {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
    return false;
  };
  return true;
};

const isIdValid = input => {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 0 || numValue == -1) {
    return false;
  };
  return true;
};

// Application commands functions----------------------------------

function listEmployees() {
  console.log(`Employee List ----------------------------`);
  console.log('');
  employees.forEach(employee => {
    logEmployee(employee);
    prompt(`Press enter to continue...`);
  });
  console.log(`Employee list completed`);
};

function addEmployee() {
  console.log(`Add Employee -----------------------------`);
  console.log('');
  let employee = {};
  employee.firstName = getInput("First Name: ", isStringInputValid);
  employee.lastName = getInput("Last Name: ", isStringInputValid);
  let startDateYear = getInput("Employee Start Year (1990-2023): ", isStartYearValid);
  let startDateMonth = getInput("Employee Start Date Month (1-12): ", isStartMonthValid);
  let startDateDay = getInput("Employee Start Date Day (1-31): ", isStartDayValid);
  employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
  employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => i === "yes"); // we are  still getting a boolean here from here 
  const json = JSON.stringify(employee, null, 2);
  console.log(`Employee: ${json}`); // we are  still outputing a boolean here
};

function searchEmpoyeeById() {
  console.log(`Search Employee -----------------------------`);
  console.log('');
  let empId = getInput("Enter employee's 'id' you want to search: ", isIdValid)
  employees.forEach(emp => {
    searchById(emp, empId)
    prompt(`Press enter to continue...`);
  });
};

const command = process.argv[2].toLowerCase();

switch (command) {
  case 'list':
    listEmployees();
    break;

  case 'add':
    addEmployee();
    break;

  case 'search-by-id':
    searchEmpoyeeById();
    break;

  default:
    console.log('Unsupported command. Exiting...');
    process.exit(1);
};