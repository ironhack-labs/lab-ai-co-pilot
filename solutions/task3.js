/**
 * Calculates the sum of all even numbers in a given array.
 */
function sumEvenNumbers(numbers) {
  let evenSum = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenSum += num;
    }
  }

  return evenSum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
