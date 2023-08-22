let num1 = 7.123456789;

// Returns the largest integer less than or equal to num1
console.log(`Floor: ${Math.floor(num1)}`); // Floor: 7

// Returns the smallest integer greater than or equal to num1
console.log(`Ceil: ${Math.ceil(num1)}`); // Ceil: 8

// Returns the value of the number num1 rounded to the nearest integer
console.log(`Round: ${Math.round(num1)}`); // Round: 7


// Fixed - ATTENTION: after applying the method the 'typeof' returned is a string
let fixed = num1.toFixed(3);
console.log(`Fixed type: ${typeof (fixed)} - Fixed value: ${fixed}`); // Fixed type: string - Fixed value: 7.123

// Display in locale-specific format
let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString('en-US')}`); // USA: 1,000,000
console.log(`Greece: ${num2.toLocaleString('el-EL')}`); // Greece: 1.000.000
console.log(`Bangladesh: ${num2.toLocaleString('bg-BG')}`); // Bangladesh: 1 000 000
console.log(`Punjab: ${num2.toLocaleString('pa-PA')}`); // Punjab: 10,00,000

/* The Intl.NumberFormat object enables language - sensitive number formatting.
In other words: the Intl object is the namespace for the ECMAScript Internationalization API and provides language - sensitive string comparisons, number formatting, and date and time formatting.
 */

// Intl Format Currency
let salary = 100000;
let monthlySalary = salary / 12;
console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`); // Monthly Salary: 8333.33

let formatterUsa = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(formatterUsa); // NumberFormat [Intl.NumberFormat] {}
console.log(`US Dollars: ${formatterUsa.format(monthlySalary)}`); // US Dollars: $8,333.33

let formatter2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
console.log(`Euros: ${formatter2.format(monthlySalary)}`); // Euros: 8.333,33 €

let formatter3 = new Intl.NumberFormat('ja-JA', { style: 'currency', currency: 'JPY' });
console.log(`Yen: ${formatter3.format(monthlySalary)}`); // Yen: ￥8,333

let formatter4 = new Intl.NumberFormat('zh-HK', { style: 'currency', currency: 'HKD' });
console.log(`Hong Kong Dollars: ${formatter4.format(monthlySalary)}`); // Hong Kong Dollars: HK$8,333.33