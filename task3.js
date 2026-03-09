// Task 3: Refactored function
function sumEvenNumbers(array) {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      total += array[index];
    }
  }
  return total;
}