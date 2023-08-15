// Crate and Object with and object literal (preferred)
let obj1 = {};

// Create an Object with a constructor
let obj2 = new Object();

// Populate propertires on an object
obj1.firstName = "David";
obj1.lastName = "Tucker";
obj1.isActive = true;
obj1.startDate = new Date("January 1, 2022");
obj1.vacationDays = 14;
console.log(obj1);

/* 
Output:

{
    firstName: 'David',
    lastName: 'Tucker',
    isActive: true,
    startDate: 2021 - 12 - 31T23:00:00.000Z,
    vacationDays: 14
} 
*/

// Populating an Object on creation with object literal syntax
let obj3 = {
    firstName: "David",
    lastName: "Tucker",
    isActive: true,
    startDate: new Date("January 1, 2022"),
    vacationDays: 14
}
console.log(obj3);

/* 
Output:

{
    firstName: 'David',
    lastName: 'Tucker',
    isActive: true,
    startDate: 2021 - 12 - 31T23:00:00.000Z,
    vacationDays: 14
} 
*/

// Accessing properties from an object
// dot notation
console.log(`First Name: ${obj3.firstName}`);
// square brackets notation
console.log(`Last Name: ${obj3["lastName"]}`);

/* 
Outputs

First Name: David
Last Name: Tucker
*/

// Deleting properties from an object
delete obj3.firstName;
console.log(obj3);

/* 
Output

{
    lastName: 'Tucker',
    isActive: true,
    startDate: 2021 - 12 - 31T23:00:00.000Z,
    vacationDays: 14
} 
*/

// Accessing a property that doesn't exist
console.log(`Non-existent value ${obj3.middleName}`); // output: undefined

// Objects are passed by reference, not value
let obj4 = obj3;
obj4.lastName = "Smith";
console.log(`Last Name (obj3): ${obj3.lastName}`); // output: Last Name (obj3): Smith