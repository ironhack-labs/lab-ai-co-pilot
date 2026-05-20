# AI Assistant Trials – Final Report

## :trophy: My Pick:
Claude (Free)

## :white_check_mark: Pros & Cons

### ChatGPT
- :white_check_mark: Extrem schnell beim Raushauen von Code, man muss fast nie lange warten.
- :x: Die Erklärungen klingen manchmal voll roboterhaft und trocken, wie aus einem Lehrbuch kopiert.

### Claude
- :white_check_mark: Erklärt komplizierte Sachen (wie bitweise Operatoren) mega logisch mit einfachen Beispielen, die man sofort versteht.
- :x: Das Nachrichten-Limit in der Gratis-Version nervt, wenn man viel hintereinander fragen will.

### Gemini
- :white_check_mark: Liefert Antworten super schnell und fasst den Code oft sehr kompakt zusammen.
- :x: Manchmal fehlen in den Erklärungen ein paar Details, wenn man nicht ganz genau nachfragt.

## :bar_chart: AI Evaluation Table

| AI Tool     | Task | Clarity (1–5) | Accuracy (1–5) | Speed (1–5) | Tone (1–5) | Notes |
|-------------|------|----------------|----------------|--------------|-------------|-------|
| ChatGPT     | 1    | 4              | 5              | 5            | 4           | Hat die reduce-Funktion gut erklärt, aber ziemlich trocken. |
| ChatGPT     | 2    | 4              | 5              | 5            | 4           | Code funktioniert direkt, Barrierefreiheit war okay. |
| ChatGPT     | 3    | 5              | 5              | 5            | 4           | Refactoring war sauber und übersichtlich. |
| Claude      | 1    | 5              | 5              | 4            | 5           | Beste Erklärung mit einem echten Zahlenbeispiel für XOR. |
| Claude      | 2    | 5              | 5              | 4            | 5           | Hat direkt aria-live für Barrierefreiheit eingebaut. |
| Claude      | 3    | 5              | 5              | 5            | 5           | Variablen super lesbar umbenannt (sumEvenNumbers). |
| Gemini      | 1    | 4              | 5              | 5            | 5           | Antwort war sofort da, Erklärung kurz und schmerzlos. |
| Gemini      | 2    | 4              | 5              | 5            | 4           | Solider Code mit funktionierendem Event-Listener. |
| Gemini      | 3    | 5              | 5              | 5            | 5           | Hat die unleserliche Schleife perfekt reduziert. |

## :pushpin: Task-by-Task Highlights
- **Task 1 (Explain a Function):** Claude hat hier am besten abgeschnitten. Bitweise Operatoren (XOR `^`) sind echt verwirrend, aber Claude hat es mit echten Zahlenbeispielen so erklärt, dass man es kapiert.
- **Task 2 (DOM Manipulation):** Den Text per Button-Klick zu ändern, war für keine KI schwer. Claude war aber einen Tick besser, weil wichtige Attribute für Screenreader direkt ohne Extra-Prompt eingebaut wurden.
- **Task 3 (Refactor Obfuscated Code):** Das Aufräumen der unleserlichen Schleife haben alle drei KIs problemlos geschafft. Jede hat sofort gemerkt, dass die Funktion einfach nur gerade Zahlen addiert.

## :mag: Surprises & Bugs
- ChatGPT hat die Barrierefreiheit erst so richtig ernst genommen, als man im Prompt explizit darauf hingewiesen hat. Gemini war extrem schnell, aber die Kommentare im Code hätten manchmal etwas ausführlicher sein können.

## Final Thoughts
In einem echten Projekt würde ich am ehesten Claude als Co-Pilot nutzen. Die Erklärungen fühlen sich am natürlichsten an und man lernt tatsächlich was dabei, anstatt den Code einfach nur blind zu kopieren.