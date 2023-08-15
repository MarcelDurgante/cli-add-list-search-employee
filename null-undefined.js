// Attention: if you want sth to purposefully set something to have an empty value use 'null'

// What happens when you don't give a variable a value
let x;
console.log(x);
console.log(typeof(x));
x = "Hello";
console.log(x);

// How do we set a variable to a purposefully empty value
let manager = null;
console.log(manager);
console.log(typeof manager);

/* 
Outputs:

undefined
undefined
Hello
null
object 
*/