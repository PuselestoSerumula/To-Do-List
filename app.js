const inputField = document.getElementById("inputField");
const btnElement = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");

btnElement.addEventListener("click", function () {
  //   then we create a paragraph
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  inputField.value = "";
  //   appendChild paragraph to our toDoContainer
  toDoContainer.appendChild(paragraph);

  //   adding another event listener for our paragraph
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
