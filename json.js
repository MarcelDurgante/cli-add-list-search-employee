// ###  JavaScript Object

let employee = {
    firstName: "David",
    lastName: "Tucker",
    birthdate: new Date("January 1, 1982"),
    numYearsEmployment: 7,
    department: "Engineering",
    title: "CTO",
    isActive: true,
    salary: 100000
};

// ### Convert to JSON String

let jsonString = JSON.stringify(employee);
console.log(jsonString);
/*  
We have to take into consideration a problem with birthdate here as it is now a string as employee was stringfied to a json object

output:

{"firstName":"David","lastName":"Tucker","birthdate":"1981-12-31T23:00:00.000Z","numYearsEmployment":7,"department":"Engineering","title":"CTO","isActive":true,"salary":100000} 
*/

// ### Outputting formated JSON using the params 'null' and '2'

jsonString = JSON.stringify(employee, null, 2);
console.log(jsonString);
/* output:

{
    "firstName": "David",
    "lastName": "Tucker",
    "birthdate": "1981-12-31T23:00:00.000Z",
    "numYearsEmployment": 7,
    "department": "Engineering",
    "title": "CTO",
    "isActive": true,
    "salary": 100000
} 
*/

// ###  Convert Value Back to Object

let parsedEmployee = JSON.parse(jsonString);
console.log(parsedEmployee);
/*  
 I put the output obj inside a variable for formatting matters. Same here, a problem with birthdate here as it is still a string as employee was firstly stringfied to json and than parsed back into a javascript object

output:

let parsedEmployeeAfterStringfied = {
    firstName: 'David',
    lastName: 'Tucker',
    birthdate: '1981-12-31T23:00:00.000Z',
    numYearsEmployment: 7,
    department: 'Engineering',
    title: 'CTO',
    isActive: true,
    salary: 100000
}
 */

// ### Writing JSON directly

let jsonStr = `{
"firstName": "Marcel",
"lastName": "Durgante"
}`
console.log(jsonStr);
/*
output:

{
"firstName": "Marcel",
"lastName": "Durgante"
}

*/

let obj = JSON.parse(jsonStr);
console.log(obj);
/*
output:

{ firstName: 'Marcel', lastName: 'Durgante' }

*/




















// // Convert Value Back to Object
// let newEmployee = JSON.parse(jsonString);
// console.log(newEmployee);

// /* output:

// {
//     "firstName": "David",
//     "lastName": "Tucker",
//     "birthdate": "1981-12-31T23:00:00.000Z",
//     "numYearsEmployment": 7,
//     "department": "Engineering",
//     "title": "CTO",
//     "isActive": true,
//     "salary": 100000
// }
// */

// // Writing JSON Directly
// let jsonStr = `{
//   "firstName": "Elizabeth",
//   "lastName": "Jones"
// }`;

// let obj = JSON.parse(jsonString);
// console.log('Object: ', obj);

// /* outputs:

// Object:  {
//   firstName: 'David',
//   lastName: 'Tucker',
//   birthdate: '1981-12-31T23:00:00.000Z',
//   numYearsEmployment: 7,
//   department: 'Engineering',
//   title: 'CTO',
//   isActive: true,
//   salary: 100000
// }
// */

// let obj2 = JSON.parse(jsonString);
// console.log(obj2);

// // Improperly formatted JSON
// // let notJSON = "hello!";
// // let newObj = JSON.parse(notJSON); 
