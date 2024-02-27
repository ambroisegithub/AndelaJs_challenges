function hasMajorityElement(array) {
    let candidate = null;
    let count = 0;
  
    // Find a potential candidate
    for (let num of array) {
      if (count === 0) {
        candidate = num;
      }
  
      count += (num === candidate) ? 1 : -1;
    }
  
    // Verify if the candidate is the majority element
    count = 0;
    for (let num of array) {
      if (num === candidate) {
        count++;
      }
    }
  
    return count > array.length / 2;
  }
  
  // Example usage:
  const array1 = [3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3];
  const array2 = [3, 1, 3, 4, 4];
  
  console.log(hasMajorityElement(array1)); // Output: true
  console.log(hasMajorityElement(array2)); // Output: false
  