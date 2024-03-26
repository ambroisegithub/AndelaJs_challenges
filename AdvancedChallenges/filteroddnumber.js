let mixArray = [1, 2, 8, 9, 5, 4, 5];

function evenNumber(number) {
  return number % 2 === 0;
}

let isEven = mixArray.filter(evenNumber);
console.log(isEven);
