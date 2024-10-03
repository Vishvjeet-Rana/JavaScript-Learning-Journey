/* Q.
Create an input element on the page with a placeholder "Enter your name" and an H2 heading on the page inside HTML. 
The purpose of this input element is to enter a user’s name, so it should only input letters from a-z, A-Z, and space 
(all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically 
visible inside the heading. [Please note that no other character apart from the allowed characters should be visible 
in the heading].
*/

let input = document.querySelector("input");

input.addEventListener("input", () => {
  let filterInput = input.value.replace(/[^a-zA-Z\s]/g, "");
  document.querySelector("h2").textContent = filterInput;
});
