/**
 * @description : Map list allows to use any data type as your key. It has a size property and methods for manipulating the collection.
 * 
 * @source :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * 
 * @description : Set allows for a unique set of values. It has a size property and methods for manipulating the set.
 * 
 * @source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

//> Map

// Creating an Object
const obj = {
    firstName: "Marcel",
    secondName: "Durgante"
};

// Creating a Map
const map1 = new Map();
map1.set("firstName", "Marcel");
map1.set("secondName", "Durgante");
console.log(map1); // Map(2) { 'firstName' => 'Marcel', 'secondName' => 'Durgante' }

// Using a non-string keys 
map1.set(new Date().getTime(), "Number key");
map1.set([], "Array key");
map1.set(() => "addEmployee", "Function key");
console.log(map1);
/*  output:
Map(5) {
    'firstName' => 'Marcel',
    'secondName' => 'Durgante',
    1693161253027 => 'Number key',
    [] => 'Array key',
    [Function (anonymous)] => 'Function key'
 } 
*/

// Checking the size
console.log(`Map size: ${map1.size}`); // Map size: 5

// Accessing values
console.log(map1.get("secondName")); // Durgante
console.log(map1.get([])); // undefined - we'd need to have a reference to that specifc empty array key containing the value of "Array key". We can set any key but that doesn't mean we can always get its value back, as per this example.

// Deleting values
// passing the name of the key
map1.delete("firstName");
console.log(`Map size: ${map1.size}`); // Map size: 4
console.log(map1);
/*  output:
Map(4) {
    'secondName' => 'Durgante',
    1693161253027 => 'Number key',
    [] => 'Array key',
    [Function (anonymous)] => 'Function key'
 } 
*/

//> Set

// Creating a Set 
const set1 = new Set();
set1.add("Mikaella");

// Checking the Set size
console.log(`Set size is: ${set1.size}`); // 1

// Trying to add the "same" value
set1.add("Mikaella"); // 
console.log(`Set size after trying to add same value: ${set1.size}`); // 1 - it still has 1 value.

// Adding in complex values
const team1 = new Set();
const employee1 = {
    firstName: "Marilene",
    lastName: "Oliveira"
};
const employee2 = {
    firstName: "Marcel",
    lastName: "Ramos"
};
const employee3 = {
    firstName: "Matheus",
    lastName: "Pereira"
};
const employee4 = {
    firstName: "Lilo",
    lastName: "Puppy"
};

team1.add(employee1);
console.log(`Team 1 size: ${team1.size}`); // Team 1 size: 1

team1.add(employee2);
console.log(`Team 1 size: ${team1.size}`); // Team 1 size: 2

team1.add(employee3);
console.log(`Team 1 size: ${team1.size}`); // Team 1 size: 3

team1.add(employee4);
console.log(`Team 1 size: ${team1.size}`); // Team 1 size: 4

// Detecting if a Set has and Object
console.log(`Does have employee: ${team1.has(employee1)}`); // Does have employee: true

// Removing a value from a Set
team1.delete(employee1);
console.log(`Set size is: ${team1.size}`); // Set size is: 3

// Removing all values
team1.clear();
console.log(`Team 1 size is: ${team1.size}`); // Team 1 size is: 0