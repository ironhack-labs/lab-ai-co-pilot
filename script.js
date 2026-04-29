// ==========================
// Task 1: XOR Function
// ==========================

// Combines all numbers in an array using XOR
function mysteryOp(arr) {
  return arr.reduce((acc, val) => acc ^ val, 0);
}


// ==========================
// Task 2: DOM Manipulation
// ==========================

// Wait until the DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {

  // Get button and status elements
  const button = document.getElementById("updateBtn");
  const status = document.getElementById("status");

  // Update text when button is clicked
  button.addEventListener("click", () => {
    status.textContent = "Button was clicked!";
  });

});


// ==========================
// Task 3: Refactored Function
// ==========================

// Sums all even numbers in an array
function sumEvenNumbers(arr) {

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    // Check if the number is even
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}