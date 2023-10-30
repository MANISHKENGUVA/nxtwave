let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = {
  1: 'learn HTML',   //  i made some change according to my logic
  2: 'manage tasks',  //  i made some change according to my logic
  3:"javascript",   //  i made some change according to my logic
  4:"react"
};
//  i made some change according to my logic


function createAndAppendTodo(todo) {
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = "checkboxInput";
  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", "checkboxInput");
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIconContainer.appendChild(deleteIcon);
}

for (let key in todoList) { //  i made some change according to my logic
  let todo = todoList[key];  //  i made some change according to my logic
 createAndAppendTodo(todo); //  i made some change according to my logic
}
