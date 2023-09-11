// pull in that promise‑based API from Node.js for working with the file system.
// Import Node Filesystem Module (the promises version).
import fs from 'node:fs/promises';

/**
 * the async function declaration declares an async function where the await keyword is permitted within the function body, and the async and await keywords enable asynchronous promise‑based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Use of async and await enables the use of ordinary try catch blocks around asynchronous code.
 */

// to utilize async and await, we need to have an async function. So here, I'm going to define an async function called loadData.
async function loadData() {

    // we need to be able to handle situations where errors may occur. Now the difference here is we're going to go back to what we were using with synchronous code to be able to do this, and that is going to be a try catch block. So here, we're going to specify our try block
    try {

        // using the await keyword we'll say that data = await and then fs.readFile, and then we'll pass in the same arguments that we used previously.  We're still using the promise‑based API, so we're still working with promises. The await keyword specifies that the promise will need to complete, and then after that, it will execute the next steps that are listed in your code. This makes it work in many ways similar to how we work with synchronous code. Async has to return a promise and in this case, using await is basically doing that for us behind the scenes so we don't have to do it manually.
        const data = await fs.readFile('data.json', 'utf-8');

        // parse this out to be an actual data object by parsing the JSON.
        const dataObj = JSON.parse(data);

        // log to the console.
        console.log(dataObj);
        console.log('Completed');

        // And then we need to add in our logic for our catch block.
    } catch (err) {
        // log out a message...
        console.log('Could not load and parse file');
        // ... and then we will throw the error.
        throw err;
    };
}

// call loadData, and then include a final logging statement that says that that promise has completed.
loadData().then(() => console.log('Promise completed'));

/**
 * Output: 
 
  {
 ...  
  },
  {
    id: 63,
    firstName: 'David',
    lastName: 'Tucker',
    startDate: '1991-03-03T05:00:00.000Z',
    isActive: true,
    salaryUSD: '105000',
    localCurrency: 'GBP'
  },
  {
    id: 64,
    firstName: 'David',
    lastName: 'Tucker',
    startDate: '1999-03-03T05:00:00.000Z',
    isActive: true,
    salaryUSD: '105000',
    localCurrency: 'JPY'
  }
]
Completed
Promise completed
 */