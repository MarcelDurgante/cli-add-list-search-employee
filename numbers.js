// Define number values

let num1 = 6;
let num2 = -1000000;
let num3 = 1.234567;
    
// Defining big and small numbers
let num4 = 1560000000000000000000000000000;
console.log(num4); // output: 1.56e+30 . We take the number 1.56 and move de decimal point 30 points to the right
let num5 = -0.00000000000000000000000000021;
console.log(num5); // output: -2.1e-28 .  We take the number -2.1 and move de decimal point 28 places to the left

// Creating numbers with e-notation
let num6 = 1.2e+10;
console.log(num6); // output: 120000000000

// How big and small can we get with the number type

console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Value: ${Number.MAX_VALUE}`);
console.log(`Minimum Safe Integer: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Minimum Safe Integer: ${Number.MAX_SAFE_INTEGER}`);

// output
/* 
Minimum Value: 5e-324
Minimum Value: 1.7976931348623157e+308
Minimum Safe Integer: -9007199254740991
Minimum Safe Integer: 9007199254740991
 */

// Creating BigInt's 
let bigInt = 1n;
let bigInt2 = 1_560_000_000_000_000_000_000_000n; 

console.log(bigInt2);