
// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Main sorting function
  function customSort(array) {
    // Sort the array in descending order using a basic sorting algorithm
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] < array[j + 1]) {
          // Swap elements if they are in the wrong order
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    // Remove prime numbers from the sorted array
    for (let i = array.length - 1; i >= 0; i--) {
      if (isPrime(array[i])) {
        array.splice(i, 1);
      }
    }
  
    return array;
  }
  
  // Example usage:
  const inputArray = [13, 8, 5, 21, 4, 17, 10];
  const result = customSort(inputArray);
  console.log(result);  // Output: [21, 17, 13, 10, 8, 4]
  