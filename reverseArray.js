const reverseArrayInPlace = (array) => {
    let start = 0;
    let end = array.length - 1;
  
    while (start < end) {
      // Swap elements at start and end indices
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
  
      // Move towards the center of the array
      start++;
      end--;
    }
  
    // No need to return as the array is modified in-place
  };
  
  let originalArray = ["A", "B", "C", "D"];
  reverseArrayInPlace(originalArray);
  console.log(originalArray);  // Output: ["D", "C", "B", "A"]
  


// const reverseArrayInPlace = (array) => {
//     for (let start = 0, end = array.length - 1; start < end; start++, end--) {
//       // Swap elements at start and end indices
//       let temp = array[start];
//       array[start] = array[end];
//       array[end] = temp;
//     }
//   };
  
//   let originalArray = ["A", "B", "C", "D"];
//   reverseArrayInPlace(originalArray);
//   console.log(originalArray); // Output: ["D", "C", "B", "A"]
  