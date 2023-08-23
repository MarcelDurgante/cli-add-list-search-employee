/**
 *> According to MDN, "falsy" values in JavaScript are those which are considered false when encountered in a boolean context. The following values are considered falsy:
 *
 * false
 * 0 (zero)
 * '' (empty string)
 * null
 * undefined
 * NaN (Not a Number)
 * 
 *> All other values are considered "truthy" in JavaScript.
 * 
 * source: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */

// Simply function to log out truthyness
const isTruthy = (name, val) => {
    console.log(`${name}: ${Boolean(val)}`);
}

// Numbers
isTruthy("val1", 0); // val1: false - generally anything that represents an empty value is eveluated to false
isTruthy("val2", 1); // val2: true
isTruthy("val3", -1); // val3: true
isTruthy("val4", NaN); //> val4: false
isTruthy("val5", 0n); // val5: false

// Boolean, Null, and Undefined
isTruthy("val6", undefined); //> val6: false
isTruthy("val7", null); //> val7: false
isTruthy("val8", false); //> val8: false


// Strings
isTruthy("val9", ""); // val9: false //> an empty string is always false. 
isTruthy("val10", "Hi"); // val10: true
isTruthy("val11", "false"); // val11: true

// Objects
isTruthy("val12", {}); // val12: true

// Undefined variables
let var1;
isTruthy("val13", var1); // val13: false

