// Creating single-line strings
let firstName = "David"; // double quotes
let lastName = 'Tucker'; // single quotes
let title = `VP Engineering`; // backticks
title = `CTO`;
console.log(firstName, lastName, title);


// String concatenation with the plus operator
let fullName = firstName + " " + lastName;
console.log(fullName);

// String concatenation with template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Creating a multi-line strings with \const 
let bios = "Line 1\nLine 2\nLine 3"
console.log(bios);

// Creating a multi-line strings with backticks
let bio = `About David Tucker: 
David Tucker is the current CTO of Glomoantics.
He also serves as an author for Pluralsight.`;
console.log(bio);

// Escaping characters
let quote = 'David said, "JavaScript is great."';
let quote2 = "David said, \"JavaScript is great.\"";
let quote3 = `JavaScript can use 'single' and "double" quotes`;
let quote4 = `In JavaScript, you must escape the \\ character`;
console.log(quote);
console.log(quote2);
console.log(quote3);
console.log(quote4);

// String length
let length = quote.length;
console.log(`Quote Length is: ${length}`);

// Accessing specific characters
let firstChar = quote[0];
let thirdChar = quote[2]; // remember strings are at the end an Array of characters and Array are zero base meaning the first position is 'zero', second is 'one', third is 'two' and so for
console.log(`Second Character: ${firstChar}`);
console.log(`Third Character: ${thirdChar}`);

// Changing case
let word = 'Happiness';
let upperCaseWord = word.toUpperCase();
let lowerCaseWord = word.toLowerCase();

console.log(upperCaseWord);
console.log(lowerCaseWord);

// Finding a substring
fullName = 'Marcel Durgante' // no need to use 'let' or 'const' as we are reassigning a new value for 'fullname' that was already declared above.
let indexOf1 = fullName.indexOf('Mar');
console.log(`Index: ${indexOf1}`); // output: '0' (zero) as the first occurance of 'Mar' is at index zero cause "M" is at index zero.
let indexOf2 = fullName.indexOf('Dur');
console.log(`Index: ${indexOf2}`); // output: '7' as the first occurance of 'Dur' is at index seven cause "D" is at index seven.
let indexOfNonExistent = fullName.indexOf('xyz');
console.log(`Index: ${indexOfNonExistent}`); // output: '-1' (minus one) meaning it did not encoutered 'xyz' substring in the string.

let doesContain = fullName.includes("cel");
console.log(doesContain); // output: true. includes() method returns a boolean.



/* 
Summary of all console.log outputs

David Tucker CTO
David Tucker
David Tucker
Line 1
Line 2
Line 3
About David Tucker: 
David Tucker is the current CTO of Glomoantics.
He also serves as an author for Pluralsight.
David said, "JavaScript is great."
David said, "JavaScript is great."
JavaScript can use 'single' and "double" quotes
In JavaScript, you must escape the \ character
Quote Length is: 34
Second Character: D
Third Character: v
HAPPINESS
happiness
Index: 0
Index: 7
Index: -1
true 
*/