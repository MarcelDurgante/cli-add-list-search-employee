//  Error handling using Promisses
// bring in the Node.js module for working with the file system, but this time it's going to be the version that utilizes promises, as opposed to callback functions.
import fs from 'node:fs/promises';

// Reading the file with the promises API

fs.readFile('./dataX.json', 'utf-8') // We'll give the file name, and we'll specify that it's going to be utf8 encoding, but here's where things start to change. We don't pass in a callback function. Instead here, we're going to specify the logic that needs to be executed once the file has been read. But instead of a callback function, we're going to enclose this inside of the then function.
	.then((data) => {
		// we only have one argument to our arrow function that we defined here and that is data.Whereas, when we're dealing with callback functions, we would have both a potential error and whatever the result was from our asynchronous action.
		const dataObj = JSON.parse(data); // here within this particular function that we've created, I need to add in the logic for parsing out the JSON and logging out all of our details to the console
		console.log(dataObj); //  Now, assuming that that file is present on the file system and assuming that it is valid JSON, we should see these values logged out to the console.
		console.log('Completed with Promisse');
	})
	.catch((err) => {
		// Now we do need to take care of the situation where either the file isn't present or it isn't valid JSON.So for here, instead of adding another.then, we're going to add in a .catch. And this will catch any of the areas that happen in the entire promise chain. Any errors that happen would end up in this particular function.
		console.log('Could not complete loading and parsing.'); //  within this particular function that we've created, we can add in the logic for logging out the fact that there's an error.
		throw err; // and then throwing that error so that it will end execution of the application.
		// Changing the file name to ./dataX.json (which does not exist in the file system) will throw an error like bellow:

		/**
Could not complete loading and parsing.
node:internal/process/promises:279
            triggerUncaughtException(err, true \/* fromPromise \* /);
            ^

[Error: ENOENT: no such file or directory, open 'C:\Users\marcel\projects\javascript-fundamentals\project3\dataX.json'] {
    errno: -4058,
    code: 'ENOENT',
    syscall: 'open',
    path: 'C:\\Users\\marcel\\projects\\javascript-fundamentals\\project3\\dataX.json'
}
         */
	});

//   Okay, now we could test this out too by doing what we did previously in changing the file name.I'll just add an x on to the end. We know that that file isn't present, so when I hit F5, we can see that indeed we do get our log statement stating that we couldn't complete loading and parsing, and then we can see what the error was, which in this case was no such file or direct. Perfect. So that's working exactly as we would hope.Now, here's another scenario though and probably when you haven't thought of yet.What if you're dealing with some type of an SDK or API where you don't have access to an API that supports promises and it only supports callbacks ? And trust me, you're going to run into this situation. Well, you can actually create your own promises. So I want to show you how that works here in this case. So what we're going to do now is we're going to go through and create a custom promise. And in this case, it's going to use the callback version of the API that we used in the last clip.Now, I want to go ahead and call out here that we're going to create a function in a slightly different way, and that is we're going to create our first async function. So here I'm going to specify that we're creating an arrow function.Again, this should look pretty familiar to us because we've done this kind of thing before. But in this case, what we're going to do is we're going to use the async keyword here to specify that this function returns a promise. Now you might be saying, well, how can we return a promise if we don't have an API that supports that ? Well, in this case, a promise is just an object.So what we can do is we can actually go in and specify that we're going to create a new promise. Now a promise takes a function as its argument, and this function has two different parameters that are passed to it, resolve and reject. Now these are two functions that we will call when we're ready to either resolve the promise or reject the promise, meaning that there was an error that happened within the execution.So to get the logic for this going, let's go back to the top here and underneath where we're bringing in our promises API, let's bring in the API that we used previously. So here we'll bring in the node file system module for the version that uses callbacks instead of promises.And you'll notice here, we're going to call this one fsc, so we'll just distinguish that for file system callbacks. Since I have that in place, let's now go inside of the arrow function that we created as we're creating our new promise. Now in here, we're going to call fsc.readFile and this should look identical to what we did within the last clip.We'll specify if there's an error we need to do something and then if there's not, then we'll need to do something else. Now within this particular conditional where we're checking for the error, we can say that we're going to reject based on the error.And then in the situation where there's not an error, we can actually call resolve. And here, this will enable us to resolve it so anything that's waiting on this promise to be completed, we'll get this data back, assuming again there are no errors that happen in the execution. Now it becomes pretty easy for us to integrate this into the logic that we currently have. So here, I can actually go in and before the catch, I can actually add in some additional asynchronous logic. So in this case, we'll say that we're going to read that file again, and then after that, we'll log that data out to the console.So now I'll go ahead and save this file, and now we'll run it.And you'll notice here that it did actually output the entire JSON file after our complete statement. So we can see that we've been able to integrate this chain of promises with a custom promise that we created, utilizing the callback version of the API.
