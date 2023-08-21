// Using the typeof function to identify the data type
let strValue = "Hi";
console.log(typeof (strValue));

let numValue = 1;
console.log(typeof (numValue));

let boolValue = true;
console.log(typeof (boolValue));

// Joining a non-string value with a string
let age = 41;
let firstName = "David";
let description = `${firstName} is ${age} years old`;
console.log(description);

// Convert a string into a number
let ageString = '41';
console.log(typeof ageString);

let ageNum = Number(ageString);
console.log(typeof ageNum);

// DON'T DO THE BELOW unless you want it to return an Object not a Number
let ageNewNum = new Number(ageString);
console.log(typeof ageNewNum);

 // What about NaN
let ageString2 = 'forty-one';
let ageNum2 = Number(ageString2);
// Output: NaN - Not a Number is returned when what is passed can't be parsed into a number
console.log(`Age String 2: ${ageNum2}`);

// function to check if a value is NaN returns a boolean
let isInvalid = isNaN(ageNum2);
console.log(`Is invalid / not a number: ${isInvalid}`);

// converting a value to a boolean
let num1 = 1;
let num2 = 0;   //  "", null, undefined, NaN also return false. (see empty string example below)
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
console.log(`Num1: ${bool1} Num2: ${bool2}`);

// If a variable is declared with no value, so there for undefined, it returns false
let str1 = "Hello";
let bool3 = Boolean(str1);
let val1;
let bool4 = Boolean(val1);
console.log(`Bool 3: ${bool3} Bool 4: ${bool4}`);

// converting a boolean to a string

let bool5 = true;
console.log(bool5);
console.log(typeof bool5);
let bool5ToString = bool5.toString();
console.log(bool5ToString);
console.log(typeof bool5ToString);

// or adding it to a template literal

let bool5ToStrLiteral = `Bool 5: ${bool5}`;
console.log(bool5ToStrLiteral);
console.log(typeof bool5ToStrLiteral);

/* 
Outputs:

string
number
boolean
David is 41 years old
string
number
object
Age String 2: NaN
Is invalid / not a number: true
Num1: true Num2: false
Bool 3: true Bool 4: false
true
boolean
true
string
Bool 5: true
string

*/
