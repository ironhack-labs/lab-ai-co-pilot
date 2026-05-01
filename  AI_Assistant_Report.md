**AI Assistant Trials – Final Report**
<br><br>
📊 **Evaluation Table**

| AI Tool | Task | Clarity (1–5) | Accuracy (1–5) | Speed (1–5) | Tone (1–5) | Notes                                                                          |
| ------- | ---- | ------------- | -------------- | ----------- | ---------- | ------------------------------------------------------------------------------ |
| ChatGPT | 1    | 5             | 5              | 4           | 3          | tone is more casual, delivers example to understand each step of the algorithm |
| ChatGPT | 2    | 4             | 5              | 4           | 3          | outputs also an alternative minimal version                                    |
| ChatGPT | 3    | 4             | 4              | 3           | 3          | alternative minimal version                                                    |
| Claude  | 1    | 4             | 4              | 4           | 4          | adds section "Things to watch out for..."                                      |
| Claude  | 2    | 4             | 4              | 3           | 5          | -                                                                              |
| Claude  | 3    | 3             | 4              | 3           | 4          | -                                                                              |
| Gemini  | 1    | 4             | 4              | 3           | 4          | adds performance note, uses quite scientific language                          |
| Gemini  | 2    | 3             | 4              | 3           | 4          | -                                                                              |
| Gemini  | 3    | 3             | 4              | 3           | 4          | provides an extra high performance version                                     |

<br><br>

🏆 **My Pick: ChatGPT**

Pros & Cons

ChatGPT (47 total points)
✅ delivers the largest amount of information
✅ is comparatively the best at identifying and addressing potential problems and follow-up questions that go beyond the original prompt
✅ provides well-structured answers divided into clearly labeled sections
❌ casual tone, which I personally do not prefer

Claude (45 total points)
✅ gives very concise, problem-oriented answers
✅ deriving coding solutions step-by-step
❌ answers are less structured

Gemini (43 total points)
✅ provides flawless, concise solutions
❌ generating answers more slowly in comparison
<br><br>

**Task-by-Task Highlights**
Task 1: Gemini also touches on time/space complexity issues
Task 2: ChatGPT provides an extra section "Optional enhancement"
Task 3: Both ChatGPT and Claude offer a longer, comprehensible version as well as
more concise one, which is still readable. Gemini provides an extra high performance version
<br><br>

**Final Thoughts**
ChatGPT is my first choice, when it comes to coding prompts due to the high level
of structuring and wealth of the answer provided. Claude also delivers solid, well commented code. Gemini's explanations tend to sound academic
<br><br>

**Bonus Round**
Prompt: "What are 3 common mistakes junior developers make in DOM manipulation, and how can they be avoided?"

ChatGPT:

- repeated DOM queries
- unnecessary reflows/repaints (layout thrashing)
- using innerHTML unsafely

Claude:

- Querying in loops
- One-at-a-time DOM updates
- innerHTML with user input Security (XSS)

Gemini:

- Loop Injections
- Individual Listeners High Memory Usage Event Delegation
- Zombie Listeners
  <br><br>

**Personal evaluation:**
ChatGPT and Claude explained common coding mistakes most clearly: why they are
problematic and how to avoid them.
