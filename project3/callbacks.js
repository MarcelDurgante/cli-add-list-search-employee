// Import Node Filesystem Module (the callback version)
import fs from "node:fs";

/*
 For fs.readFile(), we need to pass 3 params. The first param is the file path and name.Below we are saying the file is in thecurrent directory, and file name is 'data.json'. 
 >And then we have the ability here to pass in some options, and we can either pass in a string or an object here.But if we just pass in a string, it's going to be the encoding of the file that we're trying to read.And that's what we're going to do here
 
 >We're going to say that this is a utf8 file, and this is going to then pull this data we would want that.If we were maybe working with an image, for example, and we wanted to do some manipulation on an image.
 
 >But when we're dealing with a text file, like a JSON file, we want to pull this in as utf8. 

 Now, the next thing here is that we need to pass in our callback function. Now this particular callback function is expected to have two different parameters.The first parameter is an error parameter.

 So if anything goes wrong in attempting to read the file from the file system, we will see that this value comes back. Now, if we don't have anything that goes wrong, we can expect that this value will be undefined.

 And this is pretty much the standard practice when dealing with callback functions is the first parameter is going to be an error.
 
 So you can check that when the callback function is executed.
 
 And then the next parameter is the result.In this case, that's going to be the string data coming out of the file that has been read from the local file system.
 */
fs.readFile('./data.json', 'utf8', (err, data) => {
    // error parameter, check if when attempting to read the file form the file system. If nothing wrong value comes back as 'undefined'. Second parameter is the result (data) the string data that's been read from the file system.
    if (err) {
        console.log('Error reading the file');
        // if err it shows the error and stops the execution of the application
        throw err;
    }
    // check if no error when after the reading the file there is no error in the JSON file and we are able to parse as json properly
    try {
        const dataObject = JSON.parse(data);
        console.log(dataObject);
        console.log('Complete');
    } catch (err) {
        console.error('Can not parse JSON');
        throw err;
    }
});