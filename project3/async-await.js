// pull in that promise‑based API from Node.js for working with the file system.
// Import Node Filesystem Module (the promises version).
import fs from 'node:fs/promises';

/**
 * the async function declaration declares an async function where the await keyword is permitted within the function body, and the async and await keywords enable asynchronous promise‑based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Use of async and await enables the use of ordinary try catch blocks around asynchronous code.
 */

// to utilize async and await, we need to have an async function. So here, I'm going to define an async function called loadData.
//async function loadData() {

    // we need to be able to handle situations where errors may occur. Now the difference here is we're going to go back to what we were using with synchronous code to be able to do this, and that is going to be a try catch block. So here, we're going to specify our try block
    //try {

        // using the await keyword we'll say that data = await and then fs.readFile, and then we'll pass in the same arguments that we used previously.  We're still using the promise‑based API, so we're still working with promises. The await keyword specifies that the promise will need to complete, and then after that, it will execute the next steps that are listed in your code. This makes it work in many ways similar to how we work with synchronous code. Async has to return a promise and in this case, using await is basically doing that for us behind the scenes so we don't have to do it manually.
        //const data = await fs.readFile('data.json', 'utf-8');
        
/**
Like let's say I don't want to just do one asynchronous thing let's say that I want to do several. And I'm going to add in some logging statements here so we can actually see that this plays out in the order that we would intend.So here, we're just going to go through and read the same file several times, and this will just help to illustrate the way that async and await works behind the scenes. So here in this case, I'm going to go ahead and have several additional reads of the file.So after we read the file the first time, it will say File Read 1, and then it'll go through and do the same thing for 2 and 3. Now if this works the way that we want it to, we should see that we're going to see this come out in order, and all of these statements will be logged in the order that you see them here in the code.So now, I'll hit F5, and we can see that indeed we actually see File Read 1, 2, and 3 happening before we get to the point where we're logging out the data and then finally, before we're actually listing that the promise has been completed.
*/
/*
output:

File Read 1
File Read 2
File Read 3
[
  {
    id: 0,
    email: 'lauren_shaffer@globomantics.com',
    firstName: 'Lauren',
    lastName: 'Shaffer',
    salaryUSD: 246463,
    localCurrency: 'PEN',
    dateBirth: '1988-02-08',
    startDate: '2006-02-14',
    isActive: true
  },
  {
  ...
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
        /* console.log('File Read 1');
        await fs.readFile('./data.json', 'utf8');
        console.log('File Read 2');
        await fs.readFile('./data.json', 'utf8');
        console.log('File Read 3');
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
loadData().then(() => console.log('Promise completed')); */

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

/**
 * If error in the name of the file, output:
 * 
Could not load and parse file
node:internal/process/promises:279
            triggerUncaughtException(err, true /* fromPromise /);
            ^

[Error: ENOENT: no such file or directory, open 'C:\Users\marcel\projects\javascript-fundamentals\project3\dataX.json'] {
    errno: -4058,
    code: 'ENOENT',
    syscall: 'open',
    path: 'C:\\Users\\marcel\\projects\\javascript-fundamentals\\project3\\dataX.json'
}
 */

//! Top Level Await: this enables modules to act as big async functions. With top‑level await, ECMAScript modules can await resources, causing other modules to import them to wait before they start evaluating their body.

//! As in our package.json file, here we're listed as type of module. So this is being treated as a module with ECMAScript modules, so in this case because we're using Node 18, we can take advantage of top‑level await

// Our tyr/catch blocks code works outside of the async function because of top‑level of await. So if we run it we can see the exact same result that we had before. Which means if you are using a module, you do have the ability to utilize await outside of an asynchronous function in some cases, and that's why we can use it here.

try {
    const data = await fs.readFile('./data.json', 'utf8');
    console.log('File Read 1');
    await fs.readFile('./data.json', 'utf8');
    console.log('File Read 2');
    await fs.readFile('./data.json', 'utf8');
    console.log('File Read 3');
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("Complete");
} catch (err) {
    console.log("Could not load and parse file");
    throw err;
}