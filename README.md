![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | The AI Assistant Trials, who’s the Best Co-Pilot?

> :test_tube: Focus: Critical AI comparison, Prompt Engineering, Output Review

## :brain: Scenario

Your dev team is considering integrating an AI assistant into your daily workflow, but which one fits best?

You’ve been tasked with leading **“The AI Assistant Trials”**, a side-by-side comparison between:

-  **ChatGPT (Free)**  
-  **Claude (Free)**  
-  **Your pick** (if you use another AI tool like Gemini or so)

You’ll evaluate each AI by giving them the same set of coding challenges and analysing their responses.

<br />

## :dart: Learning Goals

By completing this lab, you will:

:white_check_mark: Compare AI assistants on real-world tasks   <br>
:white_check_mark: Practice prompt clarity and iteration   <br>
:white_check_mark: Learn how to critically evaluate AI suggestions   <br>
:white_check_mark: Choose the best assistant for your own dev flow

<br />

<br>

## Requirements

- Fork this repo.
- Clone this repo.

<br>

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request so that your work can be checked.

<br>

## :test_tube: Tasks

Perform **3 challenges** with each AI. You must use the **same prompt** for all three.

### :white_check_mark: Task 1: Explain a Function

**Prompt:**  
> “Explain this JavaScript function in detail. Add comments as needed.”



<br />
chat gpt:

```js
function mysteryOp(arr) {
// The function takes an array of numbers called 'arr'
  // and uses the reduce() method to combine them into a single value.
  return arr.reduce((acc, val) => acc ^ val, 0);
// ^ = Bitwise XOR operator (exclusive OR)
  //
  // reduce() goes through each element of the array:
  //   - 'acc' is the accumulator (it starts at the initial value 0)
  //   - 'val' is the current element from the array
  //
  // On each iteration, it performs a bitwise XOR between 'acc' and 'val',
  // and the result becomes the new 'acc' for the next iteration.
  //
  // After processing all elements, reduce() returns the final accumulated value.
}
```

claude:

javascriptfunction mysteryOp(arr) {
  return arr.reduce((acc, val) => acc ^ val, 0);
}
What does it do?
This function performs a XOR (exclusive OR) operation on all elements of an array.
Detailed breakdown:

reduce() iterates through the array, combining all values into a single result
acc is the accumulator (starts at 0)
val is each value in the array
^ is the bitwise XOR operator
The final result is the XOR of all numbers

Practical example:
javascriptmysteryOp([2, 3, 2]) // Result: 3
// Why: 2 ^ 3 ^ 2 = 3
// (the 2 appears twice and "cancels out")
Common use case: This technique is used to find the unique element in an array where all others appear in pairs, because n ^ n = 0 (a number XOR'd with itself equals zero).

Perplexity:

What does this function do?
Purpose: This function combines all numbers in the arr array using bitwise XOR (^). It returns the final result after applying XOR across the entire array.

Parameters: arr — an array of numbers.

Return value: The single number resulting from XOR-ing all elements in the array together.

How does it work?
JavaScript's reduce method takes an array and produces a single value by running a function (here, (acc, val) => acc ^ val) over each element.

The operation acc ^ val uses the bitwise XOR operator (^). XOR produces a 1 in a bit position if the bits differ, and 0 if they are the same.

The reduction starts from 0.

### :white_check_mark: Task 2: DOM Manipulation

**Prompt:**  
> “Write a function that changes the text of an HTML element with id `status` when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.”

<br />
chat gpt:

// Wait until the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
  // Get references to the button and status element
  const button = document.getElementById('updateButton');
  const statusText = document.getElementById('status');

  // Add a click event listener to the button
  button.addEventListener('click', function () {
    // Update the text content of the status element
    statusText.textContent = 'Status: Process complete ✅';

    // Optionally, manage focus for accessibility
    // This ensures users using screen readers are aware of the change
    statusText.focus();
  });
});

claude:



Perplexity:

### :white_check_mark: Task 3: Refactor Obfuscated Code

**Prompt:**  
> “Refactor this function to make it readable and efficient. Add meaningful variable names and comments.”

```js
function r(a){let b=0;for(let i=0;i<a.length;i++){if(a[i]%2===0){b+=a[i]}}return b}
```

<br />
chat gpt:

function r(a){
  let b=0;
  for(let i=0;i<a.length;i++){
    if(a[i]%2 === 0){
      b+=a[i];
    }
  }
  return b;
}

Claude:

 even (divisible by 2 with no remainder)
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }/**
 * Calculates the sum of all even numbers in an array
 * @param {number[]} numbers - Array of numbers to process
 * @returns {number} Sum of all even numbers
 */
function sumEvenNumbers(numbers) {
  let sum = 0;
  
  // Iterate through each number in the array
  for (let i = 0; i < numbers.length; i++) {
    // Check if the number is
  }
  
  return sum;
}

// Alternative: More functional and concise approach
function sumEvenNumbersFunctional(numbers) {
  return numbers
    .filter(num => num % 2 === 0)  // Keep only even numbers
    .reduce((sum, num) => sum + num, 0);  // Sum them up
}

// Example usage:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: 12
console.log(sumEvenNumbersFunctional([1, 2, 3, 4, 5, 6]));  // Output: 12

Perplexity:

/**
 * Calculates the sum of even numbers in an array.
 * @param {number[]} numbers - Array of numbers to process.
 * @returns {number} Sum of all even numbers in the array.
 */
function sumEvenNumbers(numbers) {
  let totalEvenSum = 0; // Initialize sum accumulator

  // Iterate through each number in the array
  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];

    // Check if the number is even
    if (currentNumber % 2 === 0) {
      totalEvenSum += currentNumber; // Add even number to the sum
    }
  }

  return totalEvenSum; // Return the final sum of even numbers
}

## :bar_chart: AI Evaluation Table

| AI Tool     | Task | Clarity (1–5) | Accuracy (1–5) | Speed (1–5) | Tone (1–5) | Notes |
|-------------|------|----------------|----------------|--------------|-------------|-------|
| ChatGPT     | 1    | 4              |4               |   5          |      4      |4,5    |
| ChatGPT     | 2    |3               5                |  5           |      4      |  4    |
| ChatGPT     | 3    |    3           |   5            |   5          |      3      | 4     |
| Claude      | 1    |    4           |    5           | 5            |  5          | 5     |
| Claude      | 2    |    5           |      4         |      5       |   3         |  4,5  |
| Claude      | 3    |      0         |     0          |    0         |    0        | 0     |
| Your Pick   | 1    |     4          |      2         |    4         |     5       |3,5    |
| Your Pick   | 2    |      0         |      0         |      0       |    0        |   0   |
| Your Pick   | 3    |     5          |     4          |     5        |     5       |   5   |

> 💡 Don’t just give scores write down what stood out.  
> Was one clearer, but verbose? Another too short but correct?

<br />

## :receipt: Your Recommendation Report

Create a Markdown report in your project folder with the following sections:

### AI_Assistant_Report.md

# AI Assistant Trials – Final Report

## :trophy: My Pick:
[Name of AI]

## :white_check_mark: Pros & Cons

### ChatGPT
- :white_check_mark: [Insert good things]
- :x: [Insert limitations]

### Claude
- :white_check_mark:
- :x:

### [Your Pick]
- :white_check_mark:
- :x:

## :pushpin: Task-by-Task Highlights
- Task 1: [Summary of performance]
- Task 2: ...
- Task 3: ...

## :mag: Surprises & Bugs
- [Mention hallucinations, bugs, or bad suggestions]

## Final Thoughts
Which AI would you trust in a real project? Why?

<br />

##  Reflection Prompts

Write in your journal or digital notebook:

- Which AI helped *you* learn better?
- Was there a big difference in explanation quality?
- Which one matched your communication style?
- How might you use different AIs for different types of work?

<br />

## :microscope: Bonus Round

Ask all three:

> “What are 3 common mistakes junior developers make in DOM manipulation, and how can they be avoided?”

Who gave the clearest, most useful guidance?

<br />

## :white_check_mark: Submission Checklist

- [ ] Filled-out evaluation table  
- [ ] AI_Assistant_Report.md with a clear winner  
- [ ] Reflections written  

<br />

## :dart: You’re the AI Captain Now

Well done, dev! You’ve tested, documented, and decided.

> Remember: These tools are powerful but **you** are the architect of your process.

Choose wisely. :man_technologist: :woman_technologist: