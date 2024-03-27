// A first-order function is a function that can take other functions as arguments and/or return functions as results. This concept is closely related to the idea of first-class functions, as it extends the capabilities of functions to operate on other functions.



// A first-order function that takes another function as an argument
const applyFunction = function(func, value) {
 return func(value);
};

// Using the first-order function
const square = function(x) {
 return x * x;
};

console.log(applyFunction(square, 5)); // Output: 25