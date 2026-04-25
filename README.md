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
}
```

<br />

### :white_check_mark: Task 2: DOM Manipulation

**Prompt:**  
> “Write a function that changes the text of an HTML element with id `status` when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.”

<br />

### :white_check_mark: Task 3: Refactor Obfuscated Code

**Prompt:**  
> “Refactor this function to make it readable and efficient. Add meaningful variable names and comments.”

```js
function r(a){let b=0;for(let i=0;i<a.length;i++){if(a[i]%2===0){b+=a[i]}}return b}
```

<br />

## :bar_chart: AI Evaluation Table

| AI Tool   | Task | Clarity (1–5) | Accuracy (1–5) | Speed (1–5) | Tone (1–5) | Notes |
|------------|------|----------------|----------------|--------------|-------------|-------|
| ChatGPT    | 1    | 5              | 5              | 5            | 5           | Very clear explanation |
| ChatGPT    | 2    | 5              | 5              | 5            | 5           | Clean DOM solution |
| ChatGPT    | 3    | 5              | 5              | 5            | 5           | Good refactor |
| Claude     | 1    | ...            | ...            | ...          | ...         | ... |
| Claude     | 2    | ...            | ...            | ...          | ...         | ... |
| Claude     | 3    | ...            | ...            | ...          | ...         | ... |

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

- ChatGPT helped me learn better because it was clear and easy to understand.
- Claude gave more detailed answers but sometimes too long.
- The main difference was explanation style, not correctness.
- I prefer ChatGPT for learning and coding practice.
- I would use different AIs depending on the task.

---

##  Bonus Round

I asked all three AI tools:

> “What are 3 common mistakes junior developers make in DOM manipulation, and how can they be avoided?”

- ChatGPT: Clear, simple, and practical explanation.
- Claude: Very detailed but slightly long and harder to scan quickly.
- My Pick: ChatGPT because it was the easiest to understand and apply.

 Final conclusion: ChatGPT gave the clearest and most useful guidance overall.

Who gave the clearest, most useful guidance?

<br />

## ✔ Submission Checklist

- [x] Filled-out evaluation table  
- [x] AI_Assistant_Report.md with a clear winner  
- [x] Reflections written  

<br />

## :dart: You’re the AI Captain Now

Well done, dev! You’ve tested, documented, and decided.

> Remember: These tools are powerful but **you** are the architect of your process.

Choose wisely. :man_technologist: :woman_technologist:
