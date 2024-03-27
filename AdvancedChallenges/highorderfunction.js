// A higher-order function is a function that takes one or more functions as arguments, returns a function as its result, or both. Higher-order functions are a fundamental concept in functional programming and are used extensively in JavaScript for tasks like mapping, filtering, and reducing collections.


// A higher-order function that returns a function
const createMultiplier = function(multiplier) {
    return function(x) {
       return x * multiplier;
    };
   };
   
   const double = createMultiplier(2);
   console.log(double(5)); // Output: 10
   
   // A higher-order function that takes a function as an argument
   const applyToArray = function(func, array) {
    return array.map(func);
   };
   
   const squareAll = applyToArray(x => x * x, [1, 2, 3, 4]);
   console.log(squareAll); // Output: [1, 4, 9, 16]
   