//Task 1

// Function named 'mysteryOp' that takes an array of numbers as input
function mysteryOp(arr) {
	// The reduce() method iterates over the array and accumulates a single result
	// Here, the accumulator 'acc' starts at 0 (specified as the second argument to reduce)
	// For each element 'val' in the array, it performs a bitwise XOR operation with the accumulator
	return arr.reduce((acc, val) => acc ^ val, 0);
}

//cloude - answer
function mysteryOp(arr) {
	// reduce() recorre cada elemento del array aplicando una función acumuladora
	return arr.reduce(
		(acc, val) => acc ^ val, // XOR bit a bit entre el acumulador y el valor actual
		0, // Valor inicial del acumulador
	);
}

//Task 3

/**
 * Calculates the sum of all even numbers in an array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The sum of even numbers.
 */
function sumEvenNumbers(numbers) {
	let sum = 0; // Initialize sum of even numbers

	// Loop through each number in the array
	for (const num of numbers) {
		// Add to sum if the number is even
		if (num % 2 === 0) {
			sum += num;
		}
	}

	return sum;
}

// Example usage:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12

//Cloude - answer
