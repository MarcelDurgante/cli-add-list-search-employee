//* Assignment
let x = "This is a string";
let y = 42;
let z = false;
let date = new Date("January 1, 2023");

//* Mathematical Assignment
let val1 = 3;
val1 += 6; // Same thing as val1 = val1 + 6;
console.log(`val1: ${val1}`); // val1: 9

let val2 = 2;
val2 -= 1;
console.log(`val2: ${val2}`); // val2: 1

let val3 = 6;
val3 *= 2;
console.log(`val3: ${val3}`); // val3: 12

let val4 = 10;
val4 /= 5;
console.log(`val4: ${val4}`); // val4: 2

let val5 = 2;
val5 **= 3;
console.log(`val5: ${val5}`); // val5: 8

let val6 = 21;
val6 %= 8;
console.log(`val6: ${val6}`); // val6: 5

//* Assignment with increment and decrement operators
//*!    ATTENTION:

//!     If used postfix, with operator after operand(for example, x++), the increment operator increments and returns the value before incrementing.
//!     If used prefix, with operator before operand(for example, ++x), the increment operator increments and returns the value after incrementing.

// post/after
let value1 = 10;
let value2 = value1++;
console.log(`value1: ${value1} value2: ${value2}`); // value1: 11 value2: 10
console.log(`value1: ${value1} value2: ${value2}`); // value1: 11 value2: 10

// pre/before
value1 = 10;
value2 = ++value1;
console.log(`value1: ${value1} value2: ${value2}`); // value1: 11 value2: 11

// post/after
value1 = 10;
value2 = value1--;
console.log(`value1: ${value1} value2: ${value2}`); // value1: 9 value2: 10

// pre/before
value1 = 10;
value2 = --value1;
console.log(`value1: ${value1} value2: ${value2}`); // value1: 9 value2: 9