Informe final de las pruebas del asistente de inteligencia artificial

Mi elección:
Gemini


Pros y contras

ChatGPT
Pros
- Muy completo y técnico: explica el “por qué” y el “cómo” con ejemplos.
- Buenas prácticas claras (por ejemplo accesibilidad en DOM y refactor).
- Añadió un detalle importante sobre el operador ^ en JavaScript (tema de 32 bits).

Contras
- A veces da demasiadas alternativas y se hace un poco largo para algo que podría ser más simple.

Claude
Pros
- Muy claro y ordenado, fácil de seguir.
- Explica paso a paso y justifica lo que hace.
- En el ejercicio del DOM dio detalles extra útiles (aria-controls, focus-visible, etc.).

Contras
- En comparación, no añadió tantos detalles técnicos como ChatGPT (aunque estaba bien y correcto).

Gemini (mi elección)
Pros
- Respuestas limpias y fáciles de usar (código directo).
- Explica lo justo para entender y normalmente no se enrolla tanto.
- En el refactor dio dos opciones y explicó cuándo usar cada una.

Contras
- A veces usa un tono un poco “de venderlo” (“elegante”, “profesional”…).
- En el ejercicio 1 no dijo el detalle de que ^ en JavaScript trabaja con enteros de 32 bits (eso puede dar sorpresas).


Aspectos destacados de cada tarea

Tarea 1: Explicar una función
- ChatGPT: Explicó reduce y XOR muy bien, puso propiedades útiles y avisó del tema de 32 bits. También refactorizó con buenos nombres.
- Claude: Muy didáctico. Puso una tabla de XOR y un ejemplo paso a paso muy fácil de entender.
- Gemini: Explicó bien y puso ejemplos con binario/decimal y complejidad. Le faltó algún matiz técnico.

Tarea 2: Manipulación del DOM
- ChatGPT: Solución muy completa. Usó buenas prácticas de accesibilidad (role status, aria-live, aria-atomic) y también aria-pressed para el botón.
- Claude: También muy completo. Encapsuló la lógica en una función, validó elementos, y añadió aria-controls. Incluyó HTML y CSS (quizá extra, pero ayuda a entender).
- Gemini: Correcto y limpio. Usó aria-live y textContent. Fue más simple que los otros y le faltó algún detalle extra de accesibilidad como role="status".

Tarea 3: Refactorizar código ofuscado
- ChatGPT: Refactor muy bien presentado, con JSDoc, nombres claros y comentarios. Dio versión con for y otra con reduce.
- Claude: Muy legible con for...of, variable isEven y explicación de cambios. También dio una versión funcional con filter + reduce.
- Gemini: Dio dos opciones (declarativa y rendimiento) y lo justificó bien. Fácil de copiar y entender.


Sorpresas y errores
- Gemini (Tarea 1): No mencionó que el operador ^ en JavaScript convierte a enteros de 32 bits, y eso puede dar resultados raros si hay decimales o números grandes.
- Claude (Tarea 2): Puso bastante CSS y HTML completo. No es un error, pero si el ejercicio solo pide JavaScript puede ser más de lo necesario.
- ChatGPT (Tarea 2): Fue muy completo (toggle con aria-pressed). Está bien, pero para un ejercicio simple quizá es demasiado avanzado.


Reflexiones finales
Confiaría en Gemini para un proyecto real porque me da código limpio y entiendo rápido qué hace. Si necesito máxima precisión técnica o detalles más avanzados (edge cases o accesibilidad muy completa), usaría ChatGPT como segunda opinión. Claude lo usaría cuando quiero una explicación muy clara y bien ordenada.


Tabla de evaluación de IA

| Herramienta de IA | Tarea | Claridad (1–5) | Precisión (1–5) | Velocidad (1–5) | Tono (1–5) | Notas |
|---|---:|---:|---:|---:|---:|---|
| ChatGPT | 1 | 5 | 5 |  | 5 | Muy completo + aviso 32 bits |
| ChatGPT | 2 | 5 | 5 |  | 5 | Accesibilidad muy completa |
| ChatGPT | 3 | 5 | 5 |  | 5 | JSDoc + varias opciones |
| Claude | 1 | 5 | 5 |  | 5 | Tabla XOR + ejemplo paso a paso |
| Claude | 2 | 5 | 5 |  | 5 | Encapsulación + aria-controls (CSS extra) |
| Claude | 3 | 5 | 5 |  | 5 | Refactor muy legible |
| Gemini | 1 | 4 | 5 |  | 4 | Buen ejemplo, le faltó matiz 32 bits |
| Gemini | 2 | 4 | 5 |  | 4 | Correcto pero más simple |
| Gemini | 3 | 5 | 5 |  | 4 | Dos enfoques bien explicados |