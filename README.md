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
function mysteryOp(arr) {
  return arr.reduce((acc, val) => acc ^ val, 0);

  // Esta función toma un array de números y devuelve el resultado de aplicar la operación XOR a todos los elementos. El valor inicial del acumulador es 0, por lo que el resultado final será el número que aparece un número impar de veces en el array. Si todos los números aparecen un número par de veces, el resultado será 0.
}
```


<br />

### :white_check_mark: Task 2: DOM Manipulation

**Prompt:**  
> “Write a function that changes the text of an HTML element with id `status` when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.”
```js
// HTML:  
// <button id="updateStatus">Update Status</button>
// <p id="status">Current status: Unknown</p>
// JavaScript:

document.getElementById('updateStatus').addEventListener('click', function() {
  const statusElement = document.getElementById('status');
  statusElement.textContent = 'Current status: Updated';
  statusElement.setAttribute('aria-live', 'polite'); // Accessibility: Announce changes to screen readers
});

```   



<br />

### :white_check_mark: Task 3: Refactor Obfuscated Code

**Prompt:**  
> “Refactor this function to make it readable and efficient. Add meaningful variable names and comments.”

```js
function r(a){let b=0;for(let i=0;i<a.length;i++){if(a[i]%2===0){b+=a[i]}}return b}

// Refactored version:
function sumEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) { // Check if the number is even
      sum += array[i]; // Add it to the sum
    }
  }
  return sum; // Return the total sum of even numbers
}


```

<br />

## :bar_chart: AI Evaluation Table

| AI Tool     | Task | Clarity (1–5) | Accuracy (1–5) | Speed (1–5) | Tone (1–5) | Notes |
|-------------|------|----------------|----------------|--------------|-------------|-------|
| ChatGPT     | 1    |      5         |       5        |      5       |      5      |    Clear explanation of the XOR operator and reduce method; added helpful comments and examples.    |
| ChatGPT     | 2    |      5         |       5        |      5       |      5      | Provided accessible DOM solution with event listeners and semantic best practices.      |
| ChatGPT     | 3    |      5         |       5        |      5       |      5      |   Refactored code with meaningful names and comments; efficient and easy to understand.    |
| Claude      | 1    |      5         |       4        |      4       |      4      |   Very clear breakdown of reduce logic, but explanation was more verbose than necessary.    |
| Claude      | 2    |      5         |       4        |      4       |      4      | Emphasized accessibility and structure; required minor adjustments to simplify.      |
| Claude      | 3    |      5         |       4        |      4       |      4      |  Improved readability and structure, but solution was slightly longer than needed.     |
| Copilot     | 1    |      4         |       5        |      4       |      4      |    Suggested correct explanation and comments, but less detailed context.   |
| Copilot     | 2    |      5         |       5        |      4       |      4      |   Generated functional DOM code quickly; required manual accessibility review.    |
| Copilot     | 3    |      5         |       5        |      4       |      4      |    Fast refactoring with clear variable names; minimal explanation provided.   |


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