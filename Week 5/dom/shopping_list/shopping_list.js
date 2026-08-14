// Shopping list
// Create three variables that hold references to the list
const ul = document.querySelector("ul");
const btn = document.querySelector("button");
const itemInput = document.querySelector("#item");

// Create a function that will run in response to the button being clicked
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // storing the current value of the input in a variable.
  const inputValue = itemInput.value.trim();

  if (!inputValue) return;
  // clear the input element by setting its value to an empty string
  itemInput.value = "";

  // Create three new elements — a list item (<li>), a <span>, and a <button>
  const li = document.createElement("li");
  const spanText = document.createElement("span");
  const button = document.createElement("button");

  // Append the span and button as children of the list item
  li.appendChild(spanText);
  li.appendChild(button);

  // Set the text content of the span to the input value you saved earlier,
  // and set the text content of the button to Delete

  spanText.textContent = inputValue;
  button.textContent = "Delete";

  // Append the list item to the list.
  ul.appendChild(li);

  // Attach an event handler to the Delete button so that, when clicked, it removes the entire list item
  button.addEventListener("click", () => {
    li.remove();
  });

  // use the focus() method to focus the input element,
  itemInput.focus();
});
