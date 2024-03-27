// 9. What is a Unary Function?
// A unary function is a function that takes exactly one argument. This is in contrast to binary functions, which take two arguments, and ternary functions, which take three arguments. Unary functions are often used in functional programming and can be particularly useful for operations that only require a single input to produce an output.

// Code Snippet:

// A unary function that squares its input
const square = x => x * x;

console.log(square(5)); // Output: 25
// 10. What is the Currying Function?
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each with a single argument. Currying allows you to partially apply functions, which can be useful for creating specialized functions from more general ones.

// Code Snippet:

// A curried function that adds two numbers
const add = x => y => x + y;

const addFive = add(5); // Partially apply the first argument
console.log(addFive(3)); // Output: 8
// 11. What is the Closure Function?
// A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. Closures allow a function to access variables from an outer function even after the outer function has completed execution. This is a powerful feature in JavaScript that enables data privacy and the creation of function factories.

// Code Snippet:

function outerFunction(outerVariable) {
 return function innerFunction(innerVariable) {
    console.log('outerVariable:', outerVariable);
    console.log('innerVariable:', innerVariable);
 };
}

const newFunction = outerFunction('outside');
newFunction('inside'); // Output: outerVariable: outside, innerVariable: inside
// 12. What is a Callback in Callback?
// A callback in a callback refers to a situation where a function (the callback function) is passed as an argument to another function and is executed after the first function has completed its execution. This pattern is commonly used in asynchronous operations, event handling, and higher-order functions.

// Code Snippet:

// A function that takes a callback as an argument
const processData = (data, callback) => {
 // Simulate processing data
 setTimeout(() => {
    const result = data.map(x => x * 2);
    callback(result);
 }, 1000);
};

// Using the processData function with a callback
processData([1, 2, 3], result => {
 console.log(result); // Output: [2, 4, 6]
});
// In this example, processData is a higher-order function that takes an array of data and a callback function as arguments. It simulates processing the data asynchronously (using setTimeout to mimic an asynchronous operation) and then calls the callback function with the processed data.

