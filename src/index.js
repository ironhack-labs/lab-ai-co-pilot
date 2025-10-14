// 1.)

function mysteryOp(arr) {
  return arr.reduce((acc, val) => acc ^ val, 0);
} //chatgpt explained very well what this does, but cladue is more solid and reliable on technical stuff like XOR details and binary operations, copilot is really good because it completees my comments well and if i have any question i can try to write a comment and it will give the correct answer while completing the comment, just like i'm doing now :D


// 2.)

// Write a function that changes the text of an HTML element with id status when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.
// cladue was perfect, it can create a working web app with html css and js, it can also explain the code well, chatgpt was not very good at this task, it gave a very basic example that didn't follow best practices, copilot was also good but it needs more guidance from me to give a good answer, it can complete my comments well but if i don't give enough context it can give a wrong answer or incomplete answer.


// 3.)
// Refactor this function to make it readable and efficient. Add meaningful variable names and comments.

function r(a){let b=0;for(let i=0;i<a.length;i++){if(a[i]%2===0){b+=a[i]}}return b}

// here is the refactored version of the function:
function sumOfEvens(arr) {
  // Initialize a variable to hold the sum of even numbers
  let sum = 0; 
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is even
        if (arr[i] % 2 === 0) {
            // If it is even, add it to the sum
            sum += arr[i]; 
        }       
    }
    // Return the total sum of even numbers
    return sum; 
}

// above code is made by copilot, i just wrote the comment and it completed the code perfectly, i just changed the variable names to be more meaningful, but copilot did a great job on that too, it suggested good names like sumOfEvens and sum instead of a and b.

// claude was also very good and efficient... passed

// chatgpt was slow and not very good at this task, it gave a very basic refactor that didn't improve much on the original code, it just added some comments and changed variable names to a and b which are not very meaningful.




// sum: claude > copilot > chatgpt


