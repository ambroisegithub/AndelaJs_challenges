const reverseArrayInPlace = (array) => {
    const length = array.length;
    const mid = Math.floor(length / 2);
  
    for (let i = 0; i < mid; i++) {
      // Swap elements at the corresponding positions from start and end
      let temp = array[i];
      array[i] = array[length - 1 - i];
      array[length - 1 - i] = temp;
    }
  };
  
  // Example usage:
  let originalArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(originalArray);
  console.log(originalArray); // Output: [5, 4, 3, 2, 1]
  