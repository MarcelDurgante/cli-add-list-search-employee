/* Intl.DateTimeFormat is a JavaScript object that formats dates and times based on the user's locale, allowing you to display them in a way that's appropriate for their language and region.You can customize the format of the output using different options.


    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat */

// Create a date
let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(`Date 1: ${date1}`);

// Display just the calendar date
console.log(`Calendar Date: ${date1.toDateString()}`);

// Display a locale-specific date string
console.log(`Locale en-US: ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleDateString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleDateString('ja-JP')}`);

// Display just the time
console.log(`Date Time: ${date1.toTimeString()}`);

// Display a locale-specific time string
console.log(`Locale en-US: ${date1.toLocaleTimeString('en-US')}`);
console.log(`Locale en-GB: ${date1.toLocaleTimeString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleTimeString('ja-JP')}`);

// Custom date string
let options = {
    dateStyle: "short",
    timeStyle: "short"
};
console.log(`Custom Date: ${date1.toLocaleString('en-US', options)}`);
console.log(`Custom Date: ${date1.toLocaleString('ar-KW', options)}`);