📘 JavaScript Exercises & AI Comparison

=== Exercise 1 ===
🤖 ChatGPT 5.2
Prompt

“Explain this JavaScript function in detail. Add comments as needed.”

function mysteryOp(arr) {
  return arr.reduce((acc, val) => acc ^ val, 0);
}

Explanation

Sure — let’s break it down step by step and make it very clear.

What the function does

This function takes an array of numbers and returns a single number.

The key is:

the reduce() method

the ^ operator (XOR)

1. What reduce() does (in plain terms)

reduce() takes an array and combines all elements into one value.

General form:

array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);


In this function:

acc → accumulator (running result)

val → current element

0 → starting value

2. What ^ means in JavaScript

^ is the bitwise XOR (exclusive OR) operator.

Rules:

0 ^ 0 = 0
1 ^ 1 = 0
0 ^ 1 = 1
1 ^ 0 = 1


Important properties:

a ^ a = 0 (same numbers cancel out)

a ^ 0 = a

XOR is commutative and associative (order doesn’t matter)

3. What this function actually does

It XORs all numbers in the array together:

acc ^ val


This means:

Take the running result and XOR it with the next number.

4. Step-by-step example
mysteryOp([1, 2, 3, 2, 1])


Steps:

0 ^ 1 = 1
1 ^ 2 = 3
3 ^ 3 = 0
0 ^ 2 = 2
2 ^ 1 = 3


Final result: 3

5. Why this pattern is used (common interview trick)

Used to find the unique number in an array where all others appear twice.

Example:

[4, 1, 2, 1, 2] → 4


Because:

pairs cancel out (a ^ a = 0)

only the unique number remains

6. Same function with comments
function mysteryOp(arr) {
  // reduce the array to a single value
  return arr.reduce((acc, val) => {
    // XOR accumulator with current value
    // duplicates cancel out, unique number remains
    return acc ^ val;
  }, 0); // start accumulator at 0
}

7. One-sentence explanation

👉 This function returns the number that appears an odd number of times by XOR-ing all elements together.

=== Exercise 1 ===
🤖 Grok 4.2
Prompt

“Explain this JavaScript function in detail. Add comments as needed.”

Explanation
/**
 * Performs a bitwise XOR operation across all elements in an array.
 *
 * @param {Array<number>} arr
 * @returns {number}
 */
function mysteryOp(arr) {
  return arr.reduce((acc, val) => {
    // BITWISE XOR operator
    return acc ^ val;
  }, 0);
}

How it works (step-by-step)
1. Array reduction
(0 ^ a) ^ b ^ c ^ d

2. XOR in binary
1 (01) ^ 3 (11) = 2 (10)

3. Full trace
mysteryOp([7, 1, 3])

0 ^ 7 = 7
7 ^ 1 = 6
6 ^ 3 = 5


Result: 5

XOR properties
Operation	Result	Meaning
x ^ x	0	cancels out
x ^ 0	x	unchanged
a ^ b ^ a	b	self-inverse
Common Use Cases

Finding unique numbers

Checksums / parity bits

Bit manipulation

Simple encryption

=== Task 2 ===
🧩 DOM Manipulation
🤖 ChatGPT 5.2
Prompt

“Write a function that changes the text of an HTML element with id status when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.”

HTML (accessible)
<button id="statusBtn" aria-controls="status">
  Update status
</button>

<p id="status" aria-live="polite">
  Status: waiting...
</p>

JavaScript
function setupStatusButton() {
  const button = document.getElementById("statusBtn");
  const status = document.getElementById("status");

  button.addEventListener("click", () => {
    status.textContent = "Status: updated successfully!";
  });
}

setupStatusButton();

Why this is best practice

No inline JS

textContent is safer than innerHTML

Works with keyboard, mouse, and screen readers

Semantic HTML

Accessible ARIA usage

🤖 Grok 4.2
HTML
<p id="status" role="status" aria-live="polite">
  Status: Not clicked yet.
</p>

<button id="changeStatusBtn" type="button">
  Click me to change status
</button>

JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('changeStatusBtn');
  const statusText = document.getElementById('status');

  button.addEventListener('click', function () {
    statusText.textContent = '✅ Status: Button was clicked!';
  });
});

=== Task 3 ===
🔁 Refactoring Function
Original
function r(a){
  let b = 0;
  for(let i = 0; i < a.length; i++){
    if(a[i] % 2 === 0){
      b += a[i];
    }
  }
  return b;
}

🤖 ChatGPT 5.2 (Refactored)
/**
 * Returns the sum of all even numbers in an array
 */
function sumEvenNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (currentNumber % 2 === 0) {
      sum += currentNumber;
    }
  }

  return sum;
}

Modern version
const sumEvenNumbers = numbers =>
  numbers
    .filter(n => n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);

=== Scorecard ===
AI Tool	Task	Clarity	Accuracy	Speed	Tone	Notes
ChatGPT	1	4.5	4.5	3.8	3	Well rounded, friendly
ChatGPT	2	2	4	4	3	Not clear enough
ChatGPT	3	3.4	4	4	3	Fair, last example helped
Grok	1	3.6	4	2	3	Clear XOR bits explanation
Grok	2	3	4	4	2	Clearer than ChatGPT
Grok	3	3.4	4	4	2	Fair answer