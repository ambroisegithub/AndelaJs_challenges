// In programming, a first-class function is a function that can be treated like any other variable. This means that functions can be assigned to variables, stored in data structures, passed as arguments to other functions, and returned as values from other functions.



// Assigning a function to a variable
const greet = function() {
 console.log("Hello, world!");
};

// Storing a function in an array
const functions = [greet];

// Passing a function as an argument
const executeFunction = function(func) {
 func();
};
executeFunction(greet); // Output: Hello, world!

// Returning a function from another function
const createGreeting = function(name) {
 return function() {
    console.log(`Hello, ${name}!`);
 };
};
const greetJohn = createGreeting("John");
greetJohn(); // Output: Hello, John!