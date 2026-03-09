// Task 1: Explain the function
function mysteryOp(arr) {
  // Initialize accumulator to 0
  return arr.reduce((acc, val) => acc ^ val, 0); // XOR all elements
}

// Explanation: This function uses the XOR operator (^) to combine all elements in the array.
// XOR has properties: a ^ a = 0, a ^ 0 = a, and is associative.
// If each number appears even times, result is 0.
// If one number appears odd times, result is that number.
// Useful for finding the single number in array where others appear twice.