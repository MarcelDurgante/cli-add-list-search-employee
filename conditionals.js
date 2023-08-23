// Employee
let employee = {
    firstName: "David",
    lastName: "Tucker",
    startDate: new Date(2016, 1, 7),
    numYearsService: 7,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering"
};

console.log(employee);
/**
 * output:
 * 
{
  firstName: 'David',
  lastName: 'Tucker',
  startDate: 2016-02-06T23:00:00.000Z,
  numYearsService: 7,
  isActive: true,
  department: 'Engineering',
  title: 'VP Engineering'
}
 */

let options = {
    dateStyle: "short",
    timeStyle: "short"
};

console.log(`Custom Employee Start Date: ${employee.startDate.toLocaleString('en-GB', options)}`); // Custom Employee Start Date: 07/02/2016, 00:00

// Example from module introduction
let badgeColor;

if (employee.numYearsService < 5) {
    employee.badgeColor = "blue";
} else if (employee.numYearsService < 10) {
    employee.badgeColor = "yellow";
} else if (employee.numYearsService < 15) {
    employee.badgeColor = "red";
} else if (employee.numYearsService < 20) {
    employee.badgeColor = "purple";
} else {
    employee.badgeColor = "silver";
}
console.log(`Years: ${employee.numYearsService} Badge Color: ${employee.badgeColor}`); // Years: 7 Badge Color: yellow

// Evaluating multiple conditions for truthyness in all conditions
if (employee.numYearsService > 5 && employee.department === "Engineering") {
    console.log(`Employee meets criteria. Employee is an engineer.`); // Employee meets criteria. Employee is an engineer.
}

// Evaluating multiple conditions for truthyness in one or more conditions 
if (employee.numYearsService > 10 || employee.title.startsWith("VP")) {
    console.log(`Employee meets criteria.They have more than 10 years of service and their role is VP.`); // prints nothing as the condition is evaluated to false.
}

// Evaluating for a condition to NOT be true
if (employee.numYearsService > 20 && !employee.isActive) {
    console.log(`Employee is retired with full retirement benefit.`); // prints nothing as the condition is evaluated to false.
}

// Using if...else condition
if (employee.numYearsService > 10) {
    employee.annualBonus = 1000;
} else {
    employee.annualBonus = 500;
}

console.log(employee.annualBonus); // 500

// Using the ternary operator
employee.annualBonus = (employee.numYearsService > 10) ? 1000 : 500;
console.log(employee.annualBonus); // 500