# AI Assistant Trials – Final Report

## Evaluation method

I gave the same prompt to each assistant for each task and reviewed the
responses using four criteria:

- **Clarity:** Is the answer easy to follow for a junior developer?
- **Accuracy:** Does the explanation or code match the requested behavior?
- **Speed:** Qualitative impression of how quickly a useful first answer was
  available.
- **Tone:** Is the answer constructive, focused, and appropriate for learning?

The scores below are comparative ratings from 1 (weak) to 5 (excellent). The
speed scores are qualitative rather than stopwatch measurements.

## 🏆 My Pick: ChatGPT

ChatGPT was the best overall co-pilot for this set of tasks. It explained the
bitwise operation in accessible language, produced an accessible DOM example,
and made the refactor concise without hiding the reasoning.

## 📊 AI Evaluation Table

| AI Tool | Task | Clarity | Accuracy | Speed | Tone | Notes |
|---|---:|---:|---:|---:|---:|---|
| ChatGPT | 1 | 5 | 5 | 5 | 5 | Clearly explained XOR, the accumulator, and the initial value. |
| ChatGPT | 2 | 5 | 5 | 5 | 5 | Included event handling, `textContent`, and an `aria-live` status. |
| ChatGPT | 3 | 5 | 5 | 5 | 5 | Renamed variables and preserved the even-number filtering behavior. |
| Claude | 1 | 5 | 5 | 4 | 5 | Excellent conceptual explanation, with slightly more detail than needed. |
| Claude | 2 | 5 | 5 | 4 | 5 | Strong accessibility reasoning and a clear implementation. |
| Claude | 3 | 5 | 5 | 4 | 5 | Very readable refactor; explanation was more verbose. |
| Gemini | 1 | 4 | 4 | 5 | 4 | Correct overall, but the XOR explanation was less explicit about binary values. |
| Gemini | 2 | 4 | 4 | 5 | 4 | Functional solution, but accessibility details required closer review. |
| Gemini | 3 | 5 | 5 | 5 | 4 | Concise and efficient, with a less teaching-oriented explanation. |

## ✅ Pros & Cons

### ChatGPT

- ✅ Good at balancing explanation and implementation.
- ✅ Consistently included practical JavaScript details and edge-case notes.
- ❌ Can provide more alternatives than necessary if the prompt is not specific.

### Claude

- ✅ Strong at structured reasoning and readable prose.
- ✅ Usually highlights accessibility and maintainability concerns.
- ❌ Answers can be longer, which makes quick comparison slower.

### Gemini

- ✅ Fast and concise for straightforward refactoring.
- ✅ Produces clean solutions when the requirements are explicit.
- ❌ Some explanations needed follow-up questions to reach the same depth.

## 📌 Task-by-Task Highlights

### Task 1: Explain a Function

The function uses XOR to combine every value in the array:

```js
function xorAllValues(values) {
  // Start with zero because zero does not change the result of XOR.
  return values.reduce((result, value) => result ^ value, 0);
}
```

The strongest answers explained that XOR compares bits: a bit is `1` when the
corresponding input bits are different. They also noted that XOR is commonly
used for parity-like calculations and that the function returns `0` for an
empty array.

### Task 2: DOM Manipulation

The clearest accessible solution connected a real button to a status element,
used `textContent` instead of injecting HTML, and announced the update through
`aria-live`:

```html
<p id="status" role="status" aria-live="polite">Waiting…</p>
<button id="update-status" type="button">Update status</button>
```

```js
function setupStatusButton() {
  const statusElement = document.querySelector('#status');
  const button = document.querySelector('#update-status');

  if (!statusElement || !button) {
    throw new Error('The status element and button are required.');
  }

  button.addEventListener('click', () => {
    // textContent prevents user-provided text from being interpreted as HTML.
    statusElement.textContent = 'Status updated successfully.';
  });
}

setupStatusButton();
```

The main review point was whether an assistant remembered to use a semantic
`button`, avoided inline event handlers, and made the status change available
to assistive technology.

### Task 3: Refactor Obfuscated Code

The original function adds all even values in the array. A readable version is:

```js
function sumEvenNumbers(numbers) {
  return numbers.reduce((total, number) => {
    // Only even values contribute to the total.
    return number % 2 === 0 ? total + number : total;
  }, 0);
}
```

All three assistants identified the behavior correctly. The most useful
answers explained that the accumulator starts at zero and that odd values are
ignored, rather than only renaming the variables.

## 🔍 Surprises & Bugs

- A short explanation of XOR can be misleading if it describes XOR as ordinary
  addition. The best answers included a small binary example or explicitly
  mentioned bitwise behavior.
- DOM code can appear correct while still using `innerHTML` or a `div` as a
  button. Those details matter for security and accessibility.
- A refactor can be shorter without being better. Meaningful names and a
  comment about the filtering rule made the final implementation easier to
  maintain.

## 🧪 Bonus Round

### Prompt

“What are 3 common mistakes junior developers make in DOM manipulation, and
how can they be avoided?”

### Common guidance from the assistants

1. **Using `innerHTML` for plain text:** Prefer `textContent` unless HTML is
   deliberately required and safely constructed.
2. **Ignoring missing elements:** Query elements after the DOM is available and
   handle a missing selector with a clear error or fallback.
3. **Using inaccessible interactions:** Prefer semantic elements such as
   `<button>`, attach listeners with `addEventListener`, and expose dynamic
   status updates with appropriate ARIA attributes.

ChatGPT gave the clearest combination of practical examples and beginner-friendly
explanations. Claude was similarly thorough, while Gemini was the most concise.

## Final Thoughts

I would trust ChatGPT as the default assistant for this workflow because it
combined accurate code with explanations that supported learning. I would still
review every suggestion, especially DOM code and security-sensitive operations.
Claude would be a strong choice for deep reviews and documentation, while
Gemini would be useful when a fast first draft is the priority.

## Reflection

### Which AI helped me learn better?

The assistant that explained the reasoning behind the code helped more than the
one that only supplied a final answer. Seeing why XOR starts at zero and why
`aria-live` matters made the suggestions easier to reuse.

### Was there a big difference in explanation quality?

There was not a major accuracy difference on these small tasks. The clearest
difference was style: Claude tended to be more methodical, Gemini more concise,
and ChatGPT more balanced.

### Which one matched my communication style?

ChatGPT matched my preference for direct answers followed by enough context to
understand and verify the solution.

### How might I use different AIs for different types of work?

I would use ChatGPT for implementation and debugging, Claude for a second-pass
review or long-form documentation, and Gemini for quick alternative approaches.
In every case, I would run the code, inspect assumptions, and make the final
decision myself.
