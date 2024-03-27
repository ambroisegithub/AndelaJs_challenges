// To remove duplicates using the reduce() method, you need to
// declare an array as the accumulator value. In each iteration,
// check if the item is already included in the accumulator using the includes() method.
// Here, you can see that the reduce() method returns an array (without any duplicates)
//  instead of a single value.

const items = [1, 2, 3, 7, 8, 1, 2, 3, 7, 8];
const removeduplicate = items.reduce((accumulator, item) => {
  if (!accumulator.includes(item)) {
    accumulator.push(item);
  }
  return accumulator;
}, []);
console.log(removeduplicate);

// [ 1, 2, 3, 7, 8 ]

// The Array.reduce() function is used to reduce the elements of an array to a single value. It executes a provided callback function once for each element in the array, resulting in a single output value. The callback function can be used to perform any kind of computation, such as summing up the values, calculating an average, filtering elements, or transforming the array into a different structure.

// Here's a common use case for Array.reduce():

// Use Case: Calculating the Sum of Array Elements

// Suppose you have an array of numbers and you want to calculate the sum of all the elements in the array. You can use Array.reduce() to achieve this succinctly:

// javascript

const numbers = [1, 2, 3, 4, 5];

// Using Array.reduce() to calculate the sum
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

// In Above example:

// We start with an initial value of 0 for the accumulator parameter.
// The callback function takes two parameters: accumulator and currentValue.
// Inside the callback function, we add the currentValue to the accumulator.
// The result of each iteration is passed as the accumulator to the next iteration.
// Once all elements have been processed, the final value of the accumulator is returned as the output.
// So, Array.reduce() in this case allows us to easily compute the sum of all the elements in the array without needing to manually loop through the array. It provides a concise and declarative way to perform such operations on arrays.
