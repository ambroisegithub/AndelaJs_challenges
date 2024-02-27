const IsPrimeNumber = (number) => {
    if (number === 1) {
      return false;
    } else if (number === 2) {
      return true;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  };
  
  const filterPrimeNumbers = (numbers) => {
    const primeNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (IsPrimeNumber(numbers[i])) {
        primeNumbers.push(numbers[i]);
      }
    }
    return primeNumbers;
  };
  
  const inputArray = [8, 13, 4, 17, 6, 23, 11];
  const resultArray = filterPrimeNumbers(inputArray);
  console.log(resultArray);
  