// Array of Complex Objects
import employees from './data.json' assert { type: 'json'};

// Basic while loop
let i = 0;
while (employees[i]) {
    console.log(`Name: ${employees[i].firstName} ${ employees[i].lastName } `);
    i++;
}
/* output:

Name: Lamb Mcclain
Name: Bridges Deleon
Name: Livingston Richardson
Name: Boone Carney
Name: Rosella Noel
Name: Katie Woodward
Name: Dionne Larsen
Name: Santos Oneal
Name: Corine House

*/

// Do while loop 
i = 0;
do {
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++;
} while (employees[i]);
/* output:

Name: Lamb Mcclain
Name: Bridges Deleon
Name: Livingston Richardson
Name: Boone Carney
Name: Rosella Noel
Name: Katie Woodward
Name: Dionne Larsen
Name: Santos Oneal
Name: Corine House

*/