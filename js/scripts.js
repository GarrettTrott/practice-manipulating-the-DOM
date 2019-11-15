// 1: Set the text of the <h1> element

const heading1 = document.querySelector("h1");
heading1.textContent = "Activities";

// 2: Set the color of the <h1> to a different color

heading1.style.color = "lightblue";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

const para = document.querySelector(".desc");
para.innerHTML = "<span>Things I like</span>";

// 4: Set the class of the <ul> to 'list'

const ul = document.querySelector("ul");
ul.className = "list";

// 5: Create a new list item and add it to the <ul>

const item = document.createElement("li");
item.innerHTML = "<input> Computers";
ul.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes

const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].type = "checkbox";
}

// 7: Create a <button> element, and set its text to 'Delete'

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

// Add the <button> inside the '.extra' <div>

const extraDiv = document.querySelector(".extra");
extraDiv.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

deleteButton.addEventListener("click", () => {
  extraDiv.remove();
});
