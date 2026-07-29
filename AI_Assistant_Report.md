# AI Assistant Trials – Final Report

## My Pick: **Claude**

**Claude** stood out by not only solving the tasks but also explaining the reasoning behind each design choice. It frequently discussed best practices, trade-offs, and alternative implementations.

# Pros & Cons
## ChatGPT

### Pros

- Excellent at breaking concepts down into smaller, beginner-friendly steps.
- Uses simple language and gradually introduces new concepts.
- Includes detailed walkthroughs and well-commented code.
- Makes complex topics (such as the XOR operator) easier to understand.
- Organises explanations in a logical and easy-to-follow order.


### Cons

- Sometimes more verbose than necessary.
- Focuses mainly on understanding the code rather than discussing alternative implementations.
- Occasionally omits more advanced best practices or performance trade-offs.



## Claude

### Pros

- Highly accurate and technically detailed.
- Explains **why** code is written in a particular way, not just **what** it does.
- Regularly includes best practices, such as accessibility, documentation, and performance considerations.
- Discusses the trade-offs between different approaches.
- Produces code that closely resembles professional production code.

### Cons

- Assumes more prior programming knowledge.
- Uses technical terminology that may be difficult for complete beginners.
- Sometimes goes beyond the prompt, which can be overwhelming for someone who is still learning.


# Task-by-Task Highlights

## Task 1 – Explain the JavaScript Function


### ChatGPT

- Explained each part of the function separately.
- Used simple language and visual examples.
- Walked through the code step by step.


### Claude

- Explained the function accurately.
- Included XOR properties, algorithm complexity (`O(n)` and `O(1)`), and edge cases.
- More concise but assumed greater familiarity with programming concepts.

**Winner:** ChatGPT (for beginner learning)

---


## Task 2 – Accessible Button and Status Update



### ChatGPT

- Used semantic HTML.
- Included `aria-live="polite"`.
- Used `textContent` and `addEventListener()`.
- Clearly explained each accessibility feature.

### Claude

- Added `role="status"` and explained why it is useful.
- Included `type="button"` to prevent unintended form submissions.
- Added guard clauses to handle missing elements gracefully.
- Waited for `DOMContentLoaded` before accessing the DOM.
- Explained why live regions should already exist before their content changes.

**Winner:** Claude


## Task 3 – Refactor JavaScript Function

Both assistants successfully refactored the original function.

### ChatGPT

- Renamed variables with meaningful names.
- Added comments and JSDoc documentation.
- Focused on readability.

### Claude

- Explained every change in a comparison table.
- Added JSDoc documentation.
- Discussed alternative implementations using `filter()` and `reduce()`.
- Compared readability, performance, and memory usage of each approach.

**Winner:** Claude


# Surprises & Bugs

Overall, both assistants generated correct, functional code and followed the prompts accurately.


# Final Thoughts

Both AI assistants performed well, but they excelled in different areas.

If I were **learning JavaScript from scratch**, I would choose **ChatGPT** because it explains concepts slowly, uses simpler language, and makes complex ideas easier to understand.

If I were **working on a real software project**, I would choose **Claude** because it consistently included best practices, documentation, accessibility considerations, and discussions about trade-offs between different implementations.







