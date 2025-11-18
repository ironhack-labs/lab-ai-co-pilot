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

```js
/*function mysteryOp(arr) {
  // 'reduce' iterates over all elements of the array, accumulating a result
  // Initial value of the accumulator (acc) is 0
  return arr.reduce((acc, val) => 
    acc ^ val,  // XOR (bitwise exclusive OR) operation between accumulator and current value
    0           // initial value of the accumulator
  );
}*/




<br />

### :white_check_mark: Task 2: DOM Manipulation

**Prompt:**  
> “Write a function that changes the text of an HTML element with id `status` when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.”
/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Status Example</title>
</head>
<body>
  <!-- Status text -->
  <p id="status" aria-live="polite">Current status: Idle</p>

  <!-- Button to change status -->
  <button id="changeStatusBtn">Update Status</button>

  <script>
    // Select the button and the status element

    const button = document.getElementById('changeStatusBtn');
    const status = document.getElementById('status');

    // Add click event listener
    button.addEventListener('click', () => {
      // Change the text of the status element
      status.textContent = 'Current status: Updated';
    });
  </script>
</body>
</html>*/

<br />

### :white_check_mark: Task 3: Refactor Obfuscated Code

**Prompt:**  
> “Refactor this function to make it readable and efficient. Add meaningful variable names and comments.”

/*
 * Calculates the sum of all even numbers in an array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The sum of all even numbers.
 
function sumEvenNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    // Check if the number is even
    if (currentNumber % 2 === 0) {
      sum += currentNumber; // Add it to the sum
    }
  }

  return sum;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(myArray)); // Output: 12*/

<br />

## :bar_chart: AI Evaluation Table

| AI Tool     | Task | Clarity (1–5) | Accuracy (1–5) | Speed (1–5) | Tone (1–5) | Notes |
|-------------|------|----------------|----------------|--------------|----------|-------|
| ChatGPT     | 1    |        5       |         5       |         5   |     5    |   20  |
| ChatGPT     | 2    |        5       |         5       |         3   |     5    |   18  |
| ChatGPT     | 3    |        5       |         5       |         3   |        5 |   18  |
| Claude      | 1    |        5        |        5        |        2   |     3    |   15  |
| Claude      | 2    |        5        |        5        |         2  |      3   |   15  |
| Claude      | 3    |         5       |        5        |         2  |      3   |   15  |
| companion   | 1    |          4      |         5       |        3      |    3  |   15  |
| companion   | 2    |          4      |         5       |         3     |    3  |   15  |
| companion   | 3    |          5      |         5       |         3     |    3  |   16  |

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
/*1. Directly modifying the DOM too often

Mistake: Using multiple DOM updates inside loops or repeatedly accessing the DOM for every single change.

// Inefficient
const list = document.getElementById('myList');
for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.textContent = items[i];
  list.appendChild(li); // DOM is updated on each iteration
}


Why it’s a problem:

Each DOM update can trigger reflows and repaints, slowing down performance.

How to avoid it:

Use DocumentFragment or build elements in memory first, then append once.

const list = document.getElementById('myList');
const fragment = document.createDocumentFragment();

items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  fragment.appendChild(li);
});

list.appendChild(fragment); // Only one DOM update

2. Not considering element existence / null checks

Mistake: Trying to manipulate elements that may not exist, causing runtime errors.

document.getElementById('nonExistent').textContent = 'Hello'; // Error!


How to avoid it:

Always check if the element exists before manipulating it.

const el = document.getElementById('nonExistent');
if (el) {
  el.textContent = 'Hello';
}

3. Overusing inline event handlers

Mistake: Using onclick="..." in HTML instead of properly attaching event listeners.

Why it’s a problem:

Reduces separation of concerns (HTML vs JS).

Harder to manage multiple listeners.

How to avoid it:

Use addEventListener in JS.

const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});*/


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