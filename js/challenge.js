function incrementCounter () { counter.innerText = parseInt(counter.innerText) + this; }
// Note: I need to look up how "this" works. In the function above, "this" is 1 or -1.

document.addEventListener("DOMContentLoaded", function () {
  const counter = document.getElementById('counter');
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  
  plus.addEventListener('click', incrementCounter.bind(1), false);
  minus.addEventListener('click', incrementCounter.bind(-1), false);
  
}, false);


/* I think I should do it in this order:
  1. Implement the + and - buttons.
  2. Implement the heart button.
    a. This should add a list item: (counter number) has been liked (x) times.
    b. It should NOT add an additional list item if the user likes the same number multiple times. Instead, increment (x).
  3. Implement the "leave a comment" feature.
  4. Implement the timer.
  5. Implement the pause button, which stops the timer, heart, counter buttons, and submit (not the actual writing of a comment).
    a. It should toggle between "pause" and "resume". 
*/