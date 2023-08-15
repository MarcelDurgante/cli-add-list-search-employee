// Creating dates
let date1 = new Date("2023-01-01");
console.log('Date 1: ', date1);

let date2 = new Date("January 1, 2023");
console.log('Date 2: ', date2);

let date3 = new Date();
console.log('Date 3: ', date3);

let date4 = new Date('2023-01-01T02:30:04.312-05:00');
console.log('Date 4: ', date4);
// year, month, day, hour, minutes, seconds
let date5 = new Date(2023, 0, 1, 2, 30, 4);
console.log('Date 5: ', date5);

// Accessing elements from a date

let date6 = new Date().getTime();
console.log("Date 6: ", date6);

let date7 = new Date().getHours();
console.log("Date 7: ", date7);

let date8 = new Date().getMinutes();
console.log("Date 8: ", date8);

let date9 = new Date().getSeconds();
console.log("Date 9: ", date9);

let fullHour = `The time is: ${date7}:${date8}:${date9}`;
console.log(fullHour);

console.log(`Full year: ${date3.getFullYear()}`);

console.log(`Month (zero-indexed): ${date3.getMonth()}`);

console.log(`Day of month: ${date3.getMonth()}`);

console.log(`Hours: ${date3.getHours()}`);

// Milliseconds from the epoch
console.log(`Time: ${date3.getTime()}`);


/* 
Outputs:

Date 1: 2023-01-01T00:00:00.000Z
Date 2: 2022 - 12 - 31T23:00:00.000Z
Date 3: 2023 -08 - 15T23: 27: 50.332Z
Date 4: 2023-01-01T07: 30:04.312Z
Date 5: 2023-01-01T01: 30:04.000Z
Date 6: 1692142070332
Date 7: 1
Date 8: 27
Date 9: 50
The time is: 1: 27: 50
Full year: 2023
Month(zero - indexed): 7
Day of month: 7
Hours: 1
Time: 1692142192725
 */