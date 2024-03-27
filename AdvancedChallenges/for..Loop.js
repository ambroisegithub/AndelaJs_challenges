// Loops are an essential component of any programming language, and JavaScript is no exception. Among the various loop structures available in JavaScript, the “for” loop stands out as a powerful tool for repetitive tasks. This article aims to explore the different types of “for” loops in JavaScript and provides insights into when to use each type.

// The “for” Loop: The traditional “for” loop is commonly used when the number of iterations is known or when iterating over an array or a fixed range of values. Its syntax consists of three components: initialization, condition, and increment/decrement statement. Here’s an example:
for (let i = 0; i < 5; i++) {
  // Code to be executed in each iteration
}
// 2. The “for…in” Loop: The “for…in” loop iterates over the enumerable properties of an object, such as object keys. This loop is ideal for traversing objects and performing operations on their properties. However, caution should be exercised when using it with arrays, as it may not guarantee the order of iteration. Consider the following example:

const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// 3. The “for…of” Loop: Introduced in ECMAScript 6, the “for…of” loop provides an elegant way to iterate over iterable objects like arrays, strings, maps, and sets. It assigns the value of each element to a variable, simplifying the code compared to traditional “for” loops. Here’s an example:

const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit);
}
// The “forEach” Loop: While not technically a “for” loop, the “forEach” method is widely used for iterating over arrays. It executes a provided function once for each element in the array, in order. The “forEach” loop simplifies the code by abstracting away the iteration logic. Consider this example:
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});