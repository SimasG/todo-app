// TODO: (maybe) -> fix items left counter
// TODO: (maybe) -> fix duplicate input bug (possible solution: unique ID)

const form = document.querySelector(".input-form");
const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input");
const deleteBtn = document.querySelectorAll(".delete");
const todoInfoContainer = document.querySelector(".todo-info-container");
const completeBtn = document.querySelectorAll(".circle");
const clearBtn = document.querySelector(".btn-clear");
const itemsLeft = document.querySelector(".items-left");
const btnAll = document.querySelector(".btn-all");
const btnActive = document.querySelector(".btn-active");
const btnCompleted = document.querySelector(".btn-completed");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addNewTodo();
});

let todos = [];

function addNewTodo() {
  const txt = document.querySelector("#todo-input");
  let todo = {
    content: txt.value,
    state: "incomplete",
  };

  if (
    todo.content === "" ||
    todo.content == null ||
    todo.content.length > 75 ||
    todo.content.match(/^\s+/g)
  )
    return;
  if (todo.content.match(/\w{1,}/g)) {
    todo.content = todo.content.trim();
  }

  const uniqueId = Math.floor(Math.random() * 100000);

  const todoHtml = `<li class="todo list-item" id=${uniqueId}>
  <div class="circle">
    <img class="checkmark" src="./images/icon-check.svg" alt="" />
  </div>
  <p class="todo-text">${todo.content}</p>
  <img class="delete" src="./images/icon-cross.svg" alt="" />
</li>`;
  todoList.insertAdjacentHTML("afterbegin", todoHtml);

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  document.querySelector("#todo-input").value = "";
}

// checking if todos key is available
if (localStorage && localStorage.getItem("todos")) {
  // if so, parse todos into a displayable object
  todos = JSON.parse(localStorage.getItem("todos"));
} else {
  // if not, convert todos into a string (for storing)
  localStorage.setItem("todos", JSON.stringify(todos));
}

// COMPLETE AND DELETE BTN EVENTS LISTENERS
todoList.addEventListener("click", (e) => {
  let storageLength = JSON.parse(localStorage["todos"]).length;

  // console.log(e.target.parentNode.parentNode.childNodes[3].innerHTML);
  // console.log(e.target.parentNode.childNodes[5].classList.value);

  // complete btn
  if (
    e.target.classList.contains("circle") ||
    e.target.classList.contains("gradient-background")
    // && e.target.parentNode.childNodes[3].innerHTML ===
    //   JSON.parse(localStorage["todos"])[i].content
  ) {
    e.target.classList.toggle("gradient-background");
    e.target.parentNode.querySelector(".todo-text").classList.toggle("gray");
    e.target.parentNode
      .querySelector(".todo-text")
      .classList.toggle("strikethrough");
    e.target.classList.toggle("completed");
    e.target.parentNode.classList.toggle("todo-completed");

    // todos[i].state = "complete";
    // console.log(todos[i]);
    // return localStorage.setItem("todos", JSON.stringify(todos));
  } else if (
    e.target.classList.contains("checkmark")
    // && e.target.parentNode.parentNode.childNodes[3].innerHTML ===
    //   JSON.parse(localStorage["todos"])[i].content
  ) {
    e.target.parentNode.classList.toggle("gradient-background");
    e.target.parentNode.parentNode
      .querySelector(".todo-text")
      .classList.toggle("gray");
    e.target.parentNode.parentNode
      .querySelector(".todo-text")
      .classList.toggle("strikethrough");
    e.target.parentNode.classList.toggle("completed");
    e.target.parentNode.parentNode.classList.toggle("todo-completed");

    // todos[i].state = "complete";
    // console.log(todos[i]);
    // return localStorage.setItem("todos", JSON.stringify(todos));
  }

  for (let i = 0; i < storageLength; i++) {
    // delete btn;
    if (
      e.target.parentNode.childNodes[3].innerHTML ===
        JSON.parse(localStorage["todos"])[i].content &&
      e.target.classList.value === "delete"
    ) {
      const newTodos = todos.filter((todo) => {
        return todo.content !== JSON.parse(localStorage["todos"])[i].content;
      });
      todos = newTodos;
      localStorage.setItem("todos", JSON.stringify(todos));
      e.target.parentNode.remove();
    }
  }

  displayTodosLeft();
});

// clear all completed todos
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".completed").forEach((todo) => {
    todo.parentNode.remove();
    // todo.parentNode.classList.add("hide");
  });
  displayTodosLeft();
});

// display number of todos left
function displayTodosLeft() {
  let allTodos;
  let completedTodos;
  let todosLeft;
  allTodos = todoList.getElementsByTagName("li").length;
  completedTodos = todoList.getElementsByClassName("completed").length;
  todosLeft = allTodos - completedTodos;
  if (todosLeft > 0) {
    itemsLeft.innerHTML = `${todosLeft} items left`;
  } else {
    itemsLeft.innerHTML = `All done!`;
  }
}

// filter btns
function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll(".todo-completed");
  completedTasks.forEach((todo) => {
    // todo.remove();
    todo.classList.add("hide");
  });
}

function addCompletedTasks() {
  const completedTasks = document.querySelectorAll(".todo-completed");
  completedTasks.forEach((todo) => {
    // todo.remove();
    todo.classList.remove("hide");
  });
}

function removeUncompletedTasks() {
  const uncompletedTasks = document.querySelectorAll("li:not(.todo-completed)");
  uncompletedTasks.forEach((todo) => {
    // todo.remove();
    todo.classList.add("hide");
  });
}

function addUncompletedTasks() {
  const uncompletedTasks = document.querySelectorAll("li:not(.todo-completed)");
  uncompletedTasks.forEach((todo) => {
    // todo.remove();
    todo.classList.remove("hide");
  });
}

// display uncompleted todos
btnActive.addEventListener("click", () => {
  console.log(document.querySelectorAll("li:not(.todo-completed)"));
  btnAll.classList.remove("current");
  btnCompleted.classList.remove("current");
  btnActive.classList.add("current");

  addCompletedTasks();
  addUncompletedTasks();
  removeCompletedTasks();
});

// display completed todos
btnCompleted.addEventListener("click", () => {
  console.log(document.querySelectorAll(".todo-completed"));
  btnAll.classList.remove("current");
  btnActive.classList.remove("current");
  btnCompleted.classList.add("current");

  addCompletedTasks();
  addUncompletedTasks();
  removeUncompletedTasks();
});

// display all todos
btnAll.addEventListener("click", () => {
  console.log(document.querySelectorAll(".list-item"));
  btnActive.classList.remove("current");
  btnCompleted.classList.remove("current");
  btnAll.classList.add("current");

  addCompletedTasks();
  addUncompletedTasks();
});

window.addEventListener("DOMContentLoaded", () => {
  for (let todo of todos) {
    const uniqueId = Math.floor(Math.random() * 100000);
    const todoHtml = `<li class="todo list-item" id=${uniqueId}>
    <div class="circle">
      <img class="checkmark" src="./images/icon-check.svg" alt="" />
    </div>
    <p class="todo-text">${todo.content}</p>
    <img class="delete" src="./images/icon-cross.svg" alt="" />
  </li>`;
    todoList.insertAdjacentHTML("afterbegin", todoHtml);
  }
});

let sortable = new Sortable(todoList, {
  delay: 100,
  delayOnTouchOnly: true,
  onStart: function (e) {
    e.item.classList.add("dragged");
  },
  onEnd: function (e) {
    e.item.classList.remove("dragged");
  },
});
