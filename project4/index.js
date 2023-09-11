/**
 * Objectives:
 * 
 * a) Loading data using a file on the local file system
 * b) Utilizing asynchronous logic with promises and async/await 
 * c) Persist data beyond a single execution of the application
 */

import fs from 'node:fs/promises';
import createPrompt from 'prompt-sync';

let prompt = createPrompt();

// Arrow function to log out employee
const logEmployee = employee => {
    Object.entries(employee).forEach(entry => {
        console.log(`${entry[0]}: ${entry[1]}`);
    });
};

function getInput(promptText, validator, transformer) {
    let value = prompt(promptText);
    if (validator && !validator(value)) {
        console.error(`--Invalid input`);
        return getInput(promptText, validator, transformer);
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

// Higher-Order Function
const isIntegerValid = (min, max) => {
    return (input) => {
        let numValue = Number(input);
        if (!Number.isInteger(numValue) || numValue < min || numValue > max) {
            return false;
        }
        return true;
    }
}

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
    let startDateYear = getInput("Employee Start Year (1990-2023): ", isIntegerValid(1990, 2023));
    let startDateMonth = getInput("Employee Start Date Month (1-12): ", isIntegerValid(1, 12));
    let startDateDay = getInput("Employee Start Date Day (1-31): ", isIntegerValid(1, 31));
    employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
    employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => i === "yes");
    // JSON OBJECT
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
};

// Search for employees by id
function searchById() {
    const id = getInput("Employee ID: ", null, Number);
    const result = employees.find(e => e.id === id);
    if (result) {
        logEmployee(result);
    } else {
        console.log("No results...");
    }
}

// Search by name
function searchByName() {
    let firstNameSearch = getInput("First Name: ").toLowerCase();
    let lastNameSearch = getInput("Last Name: ").toLowerCase();
    const results = employees.filter(employee => {
        if (firstNameSearch && !employee.firstName.toLowerCase().includes(firstNameSearch)) {
            return false;
        }
        if (lastNameSearch && !employee.lastName.toLowerCase().includes(lastNameSearch)) {
            return false;
        }
        return true;
    });
    results.forEach((emp, idx) => {
        console.log("");
        console.log(`Search Result: ${idx + 1} -----------------------------------`);
        logEmployee(emp);
    })
}

const command = process.argv[2].toLowerCase();

switch (command) {
    case 'list':
        listEmployees();
        break;

    case 'add':
        addEmployee();
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
};