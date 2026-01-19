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

| AI Tool  | Task | Clarity (1–5) | Accuracy (1–5) | Speed (1–5) | Tone (1–5) | Notes |
|---------|------|---------------|----------------|-------------|------------|-------|
| ChatGPT | 1    | 4             | 5              | 5           | 4          | Clear explanation of XOR with an example, a bit casual but very understandable. |
| ChatGPT | 2    | 4             | 4              | 5           | 4          | Correct DOM code, but only minimal mention of accessibility (no real explanation). |
| ChatGPT | 3    | 4             | 5              | 5           | 4          | Good refactor with better names, but very few comments and no alternative approaches. |
| Claude  | 1    | 5             | 5              | 4           | 4          | Very precise explanation of XOR reduction, structured and concise, slightly less “friendly” than ChatGPT. |
| Claude  | 2    | 5             | 5              | 4           | 4          | Clean solution with `aria` usage and named handler; clearly cares about accessibility best practices. |
| Claude  | 3    | 5             | 5              | 4           | 4          | Refactor uses `for...of`, clear naming, and short but focused comments on intent. Feels very readable. |
| Gemini  | 1    | 4             | 5              | 4           | 3          | Correct explanation and comments, but a bit verbose and slightly repetitive in how it explains XOR. |
| Gemini  | 2    | 4             | 4              | 4           | 3          | Works fine; mentions accessibility but mixes a lot of text with code, which makes it feel a bit cluttered. |
| Gemini  | 3    | 4             | 5              | 4           | 3          | Good refactor with comments; sometimes over-explains obvious parts of the loop, making it longer than needed. |


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

4️⃣ Bonus Round – Junior DOM Mistakes Question

Prompt (same to all three):

“What are 3 common mistakes junior developers make in DOM manipulation, and how can they be avoided?”

Simulated Comparison

You don’t need the full raw outputs for the lab, just a summary for your report / notes:

ChatGPT
Listed mistakes like:

Using innerHTML unnecessarily (risking XSS / performance).

Not waiting for DOMContentLoaded before querying elements.

Not cleaning up event listeners.
Gave short fixes and examples. Clear and practical.

Claude
Gave three well-structured mistakes such as:

Querying elements inefficiently or repeatedly.

Mixing presentation logic and data logic in DOM code.

Ignoring accessibility and semantics.
Each point had a concise explanation + how to avoid it. Very “guide-like”.

Gemini
Listed similar mistakes, but with longer paragraphs of explanation and more context around each issue (e.g. how the rendering pipeline works, how event propagation works). Helpful but quite verbose.

Who gave the clearest, most useful guidance?

I’d say ChatGPT and Claude both performed very well here.

ChatGPT was the clearest for quick practical advice.

Claude was the clearest if you want a structured, “best practices” view.

For fast learning and immediate application, I’d give the edge to ChatGPT.

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