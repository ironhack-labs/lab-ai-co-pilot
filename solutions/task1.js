/**
 * Finds the single unique element in an array where every other element appears twice.
 * Uses the bitwise XOR (^) operator: a ^ a = 0 and a ^ 0 = a.
 */
function findUniqueNumber(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator ^ currentValue,
    0,
  );
}

console.log(findUniqueNumber([4, 1, 2, 1, 2])); // 4
