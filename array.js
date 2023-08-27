/**
 *  @description: Array is an order collection of items ( list ) where the order matter an it is zero based index ( index = value and 0 = firstPositionInTheArray ). Arrays have a length property and methods for manipulationg the list
 * 
 * @source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

// Creating Arrays

let arr1 = []; 
let arr2 = ["item1", "item2"];
let arr3 = new Array();
let arr4 = new Array(["item1", "item2"]);

// Accessing values
let names = ["Marcel", "Kim", "Steve", "Katie"];
console.log(`Names length: ${names.length}`); // Name length: 4
console.log(`First name: ${names[0]}`); // First name: Marcel - index of the item we want to retrieve.
console.log(`Second name: ${names[1]}`); // Second name: Kim - retrieve second item in the array names.
console.log(`Tenth name: ${names[10]}`); // Tenth name: undefined if the item we are searching is beyond the number of items we have in the array.

// Searching for values
const includesMarcel = names.includes("Marcel");
console.log(includesMarcel); // true
const inlcudesDurgante = names.includes("Durgante");
console.log(inlcudesDurgante); // false
const marcelIndex = names.indexOf("Marcel"); 
console.log(marcelIndex); // 0
const durganteIndex = names.indexOf("Durgante");
console.log(durganteIndex); // -1

//* Adding value 
// at the end:
names.push("Mikaela");
console.log(names); // [ 'Marcel', 'Kim', 'Steve', 'Katie', 'Mikaela' ]

// at the beginning:
names.unshift("Marilene");
console.log(names); // [ 'Marilene', 'Marcel', 'Kim', 'Steve', 'Katie', 'Mikaela' ]

// at a specific index:
names.splice(1, 0, "Matheus");
console.log(names); // ['Marilene', 'Matheus', 'Marcel', 'Kim', 'Steve', 'Katie', 'Mikaela']

//* Removing a value
// at the beginning:
names.shift();
console.log(names); // ['Matheus', 'Marcel', 'Kim', 'Steve', 'Katie', 'Mikaela']

// last item 
names.pop();
console.log(names); // ['Matheus', 'Marcel', 'Kim', 'Steve', 'Katie']

// at a specific index:
names.splice(0, 1); 
console.log(names); // ['Marcel', 'Kim', 'Steve', 'Katie']

//* Arrays and Objects

const obj1 = {
    firstName: "Marcel",
    secondName: "Durgante"
};

const obj2 = {
    firstName: "Mikaela",
    secondName: "Meirelles"
};

const obj3 = {
    firstName: "Marcel",
    secondName: "Durgante"
};

const employees = [obj1, obj2];
console.log(`Is identical object in array? Answer: ${employees.includes(obj3)}`); // Is identical ojbect in array? Answer: false - obj3 points to a diferent reference in memory than obj1.

console.log(`Is same object in array? Answer: ${employees.includes(obj1)}`); // Is same object in array? Answer: true  - obj1 points to a diferent reference in memory than obj3.
