import chalk from 'chalk';
import createPrompt from 'prompt-sync';
import { getAllEmployees, insertEmployee } from './database.js';
import { getCurrencyConversionData, getSalary } from './currency.js';

// Global variables ----------------------------------------------------------------------

let employees = [];
let currencyData;

const prompt = createPrompt();

const logEmployee = (employee) => {
  Object.entries(employee).forEach((entry) => {
    if (entry[0] !== 'salaryUSD' || entry[0] !== 'localeCurrency') {
      // console.log(`${chalk.blue.bold(`${entry[0]}:`)}  ${entry[1]}`);
      console.log(
        `${chalk.blue(entry[0])}: ${chalk.gray.bold(entry[1])}`,
      );
    }
  });
  console.log(
    `${chalk.blue.bold('Salary USD: ')} ${chalk.gray.bold(
      `${getSalary(employee.salaryUSD, 'USD', currencyData)}`,
    )}`,
  );
  console.log(
    `${chalk.blue.bold('Local Salary: ')}  ${chalk.gray.bold(
      `${getSalary(
        employee.salaryUSD,
        employee.localCurrency,
        currencyData,
      )}`,
    )}`,
  );
};

function getInput(promptText, validator, transformer) {
  const value = prompt(promptText);
  if (validator && !validator(value)) {
    console.error('--Invalid input');
    return getInput(promptText, validator, transformer);
  }

  if (transformer) {
    return transformer(value);
  }
  return value;
}

const getNextEmployeeID = () => {
  if (employees.length === 0) {
    return 1;
  }
  const maxID = Math.max(...employees.map((emp) => emp.id));
  return maxID + 1;
};

// Validator functions -------------------------------------

const isCurrencyCodeValid = function (code) {
  const currencyCodes = Object.keys(currencyData.rates);
  return currencyCodes.indexOf(code) > -1;
};

const isStringInputValid = (input) => (!!input);

const isBooleanInputValid = (input) => input === 'yes' || input === 'no';

// Higher-Order Function
const isIntegerValid = (min, max) => (input) => {
  const numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < min || numValue > max) {
    return false;
  }
  return true;
};

// Application commands functions----------------------------------

function listEmployees() {
  console.log('Employee List ----------------------------');
  console.log('');
  employees.forEach((employee) => {
    logEmployee(employee);
    prompt('Press enter to continue...');
  });
  console.log('Employee list completed');
}

async function addEmployee() {
  console.log('Add Employee -----------------------------');
  console.log('');
  const employee = {};
  employee.id = getNextEmployeeID();
  employee.firstName = getInput('First Name: ', isStringInputValid);
  employee.lastName = getInput('Last Name: ', isStringInputValid);
  employee.email = getInput('Email: ', isStringInputValid);
  const startDateYear = getInput(
    'Employee Start Year (1990-2023): ',
    isIntegerValid(1990, 2023),
  );
  const startDateMonth = getInput(
    'Employee Start Date Month (1-12): ',
    isIntegerValid(1, 12),
  );
  const startDateDay = getInput(
    'Employee Start Date Day (1-31): ',
    isIntegerValid(1, 31),
  );
  employee.startDate = new Date(
    startDateYear,
    startDateMonth - 1,
    startDateDay,
  );
  employee.isActive = getInput(
    'Is employee active (yes or no): ',
    isBooleanInputValid,
    (i) => i === 'yes',
  );
  employee.salaryUSD = getInput(
    'Annual salary in USD: ',
    isIntegerValid(10000, 1000000000),
  );
  employee.localCurrency = getInput(
    'Local currency (3 letters): ',
    isCurrencyCodeValid,
  );

  // add new call to our insert employee function
  await insertEmployee(employee);
}

// Search for employees by id

function searchById() {
  const id = getInput('Employee ID: ', null, Number);
  const result = employees.find((e) => e.id === id);
  if (result) {
    logEmployee(result);
  } else {
    console.log('No results...');
  }
}

// Search by name

function searchByName() {
  const firstNameSearch = getInput('First Name: ').toLowerCase();
  const lastNameSearch = getInput('Last Name: ').toLowerCase();
  const results = employees.filter((employee) => {
    if (
      firstNameSearch
			&& !employee.firstName.toLowerCase().includes(firstNameSearch)
    ) {
      return false;
    }
    if (
      lastNameSearch
			&& !employee.lastName.toLowerCase().includes(lastNameSearch)
    ) {
      return false;
    }
    return true;
  });
  results.forEach((emp, idx) => {
    console.log('');
    console.log(
      `Search Result: ${idx + 1} -----------------------------------`,
    );
    logEmployee(emp);
  });
}

// Application execution ---------------------------

const main = async () => {
  const command = process.argv[2];
  // .toLowerCase(); it is returning as undefined

  switch (command) {
    case 'list':
      listEmployees();
      break;

    case 'add':
      await addEmployee();
      break;

    case 'search-by-id':
      searchById();
      break;

    case 'search-by-name':
      searchByName();
      break;

    default:
      console.log('Unsupported command. Exiting...');
      process.exit(1);
  }
};

Promise.all([getAllEmployees(), getCurrencyConversionData()])
  .then((results) => {
    employees = results[0];
    currencyData = results[1];
    return main();
  })
  .catch((err) => {
    console.error("Can't complete start up process");
    throw err;
  });
