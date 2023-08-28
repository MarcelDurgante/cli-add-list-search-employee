// Array of Complex objects
import employees from './data.json' assert { type: 'json' };

// Listing only the first five items
// 
for (let i = 0; i < employees.length; i++) {
    // aditional conditional to check if that 'i' value/index is equal to 5. In this case we have already output 5 items
    if (i === 5) {
        break; // here we are saying break out of the loop. We won't have any more executions of this for loop and it will immediately move to the next statements tha we have defined.
    }
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
};

/* output:

Name: Lamb Mcclain
Name: Bridges Deleon
Name: Livingston Richardson
Name: Boone Carney
Name: Rosella Noel

*/

// Searching only for first names that start with 'B'
for (let employee of employees) {
    if (!employee.firstName.startsWith('B')) {
        continue; // stops current iteration and immediately move to the next iteration
    }
    console.log(`Name: ${employee.firstName} ${employee.lastName}`);
}
/* output:

Name: Bridges Deleon
Name: Boone Carney
*/

// Nested loop conrol flow
for (let emp of employees) {
    for (let property in emp) {
        if (property === 'dateBirth') { // excludes dateBirth property
            continue; // here it takes the closest loop/inner loop so it continues to the next loop so it lists the next properties inside the object so it lists 'startDate' and 'isActive' properties
        }
        console.log(`${property}: ${emp[property]}`);
    }
    console.log('----');
}
/* output:
id: 0
email: lamb_mcclain@globomantics.com
firstName: Lamb
lastName: Mcclain
startDate: 2001-05-22
isActive: false
----
id: 1
email: bridges_deleon@globomantics.com
firstName: Bridges
lastName: Deleon
startDate: 2021-12-06
isActive: true
----
id: 2
email: livingston_richardson@globomantics.com
firstName: Livingston
lastName: Richardson
startDate: 2001-12-26
isActive: false
----
id: 3
email: boone_carney@globomantics.com
firstName: Boone
lastName: Carney
startDate: 2006-12-04
isActive: false
----
id: 4
email: rosella_noel@globomantics.com
firstName: Rosella
lastName: Noel
startDate: 2019-03-24
isActive: true
----
id: 5
email: katie_woodward@globomantics.com
firstName: Katie
lastName: Woodward
startDate: 2005-09-09
isActive: false
----
id: 6
email: dionne_larsen@globomantics.com
firstName: Dionne
lastName: Larsen
startDate: 2005-01-13
isActive: false
----
id: 7
email: santos_oneal@globomantics.com
firstName: Santos
lastName: Oneal
startDate: 2018-05-26
isActive: true
----
id: 8
email: corine_house@globomantics.com
firstName: Corine
lastName: House
startDate: 2007-10-12
isActive: true
----
*/

// Using labels ( in this example, we want not to list the properties after it reaches 'dateBirth')
employee: for (let emp of employees) {
    for (let property in emp) {
        if (property === 'dateBirth') {
            console.log('----');
            continue employee; // now it will continue to the employee label loop instead of next statement in the inner loop
        }
        console.log(`${property}: ${emp[property]}`);
    }
}

/* output:
id: 0
email: lamb_mcclain@globomantics.com
firstName: Lamb
lastName: Mcclain
----
id: 1
email: bridges_deleon@globomantics.com
firstName: Bridges
lastName: Deleon
----
id: 2
email: livingston_richardson@globomantics.com
firstName: Livingston
lastName: Richardson
----
id: 3
email: boone_carney@globomantics.com
firstName: Boone
lastName: Carney
----
id: 4
email: rosella_noel@globomantics.com
firstName: Rosella
lastName: Noel
----
id: 5
email: katie_woodward@globomantics.com
firstName: Katie
lastName: Woodward
----
id: 6
email: dionne_larsen@globomantics.com
firstName: Dionne
lastName: Larsen
----
id: 7
email: santos_oneal@globomantics.com
firstName: Santos
lastName: Oneal
----
id: 8
email: corine_house@globomantics.com
firstName: Corine
lastName: House
----
*/