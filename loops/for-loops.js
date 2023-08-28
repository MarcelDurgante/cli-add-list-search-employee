/**
 * @description :  'For loop': It's a traditional loop that is suitable for iterating over an index or performing a fixed number of iterations. It's commonly used with arrays and strings.
 * 
 * @description : For..of loop': This loop is specifically designed for iterating over values in iterable objects such as arrays, strings, and maps. It's more concise and easier to read when you need to loop through elements without explicitly managing indices. Opt for a 'for..of loop' when you want a cleaner syntax for iterating over iterable collections like arrays. It's also worth noting that 'for..of' is generally considered more readable and functional when dealing with iterable objects.
 * 
 * @description : 'For...in loop': loop over properties of an object
 * 
 * @source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */

// Array of Data
const names = ["David", "Kim", "Steve", "Katie"];

// FOR LOOP
for (let i = 0; i < names.length; i++) {
    console.log(`Name: ${names[i]}`);
} 
/* output:

Name: David
Name: Kim
Name: Steve
Name: Katie

*/

// FOR...OF LOOP
for (let name of names) {
    console.log(`Name: ${name}`);
}
/* output:

Name: David
Name: Kim
Name: Steve
Name: Katie

*/

// Array of Complex objects
import employees from './data.json' assert { type: 'json' };

// FOR...IN
// output all the props from 1 employe
const employee = employees[0];
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}
/* output:

id: 0
email: lamb_mcclain @globomantics.com
firstName: Lamb
lastName: Mcclain
dateBirth: 1988 -08-01
startDate: 2001-05 - 22
isActive: false

*/

// Bringing both approaches together: 'for...of' and 'for...in' to extract all of the properties and values of all of the employees == to output all of the infomation of all of the employees

// loop over all the employees
for (let emp of employees) {
    // for each of those, loop over it's props
    for (let property in employee) {
    console.log(`${property}: ${emp[property]}`);
    }
    console.log('----');
};

/* output:

id: 0
email: lamb_mcclain@globomantics.com
firstName: Lamb
lastName: Mcclain
dateBirth: 1988-08-01
startDate: 2001-05-22
isActive: false
----
id: 1
email: bridges_deleon@globomantics.com
firstName: Bridges
lastName: Deleon
dateBirth: 1993-05-16
startDate: 2021-12-06
isActive: true
----
id: 2
email: livingston_richardson@globomantics.com
firstName: Livingston
lastName: Richardson
dateBirth: 1992-07-18
startDate: 2001-12-26
isActive: false
----
id: 3
email: boone_carney@globomantics.com
firstName: Boone
lastName: Carney
dateBirth: 1990-08-02
startDate: 2006-12-04
isActive: false
----
id: 4
email: rosella_noel@globomantics.com
firstName: Rosella
lastName: Noel
dateBirth: 1991-11-11
startDate: 2019-03-24
isActive: true
----
id: 5
email: katie_woodward@globomantics.com
firstName: Katie
lastName: Woodward
dateBirth: 1990-05-05
startDate: 2005-09-09
isActive: false
----
id: 6
email: dionne_larsen@globomantics.com
firstName: Dionne
lastName: Larsen
dateBirth: 1988-07-14
startDate: 2005-01-13
isActive: false
----
id: 7
email: santos_oneal@globomantics.com
firstName: Santos
lastName: Oneal
dateBirth: 1994-01-13
startDate: 2018-05-26
isActive: true
----
id: 8
email: corine_house@globomantics.com
firstName: Corine
lastName: House
dateBirth: 1994-08-28
startDate: 2007-10-12
isActive: true
----

*/
