// TODO: add todos to the list -> DONE
// TODO: delete todos from the list -> DONE
// TODO: mark todos as complete -> DONE
// TODO: clear all completed todos -> DONE
// TODO: display numbers of todos left -> DONE
// TODO: add ability to unmark todos as complete (toggle) -> DONE
// TODO: filter by all/active/complete todos -> DONE
// TODO: play around with localStorage
// TODO: fix bugs (input validation (e.g. empty input), deleting todos, marking all todos as complete, shaper clear completed btn functionality)
// TODO: clean UI stuff (limit todo size, etc.)

window.addEventListener("load", () => {
  //   console.log(localStorage.getItem("todo"));
  const todoHtml = `<li class="todo list-item">
      <div class="circle circle-dynamic">
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
        >
          <path
            fill="none"
            stroke="#fff"
            stroke-width="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </div>
      <p class="todo-text">${localStorage.getItem("todo")}</p>
      <svg
        class="delete-dynamic"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </li>`;
  todoList.insertAdjacentHTML("beforeend", todoHtml);
});

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

function addNewTodo() {
  const todoText =
    document.querySelector("#todo-input").value.charAt(0).toUpperCase() +
    document.querySelector("#todo-input").value.slice(1);
  const todoHtml = `<li class="todo list-item">
      <div class="circle circle-dynamic">
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
        >
          <path
            fill="none"
            stroke="#fff"
            stroke-width="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </div>
      <p class="todo-text">${todoText}</p>
      <svg
        class="delete-dynamic"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </li>`;
  todoList.insertAdjacentHTML("beforeend", todoHtml);

  localStorage.setItem("todo", `${todoText}`);

  document.querySelector("#todo-input").value = "";
  const deleteBtnDynamic = document.querySelectorAll(".delete-dynamic");
  const completeBtnDynamic = document.querySelectorAll(".circle-dynamic");

  deleteBtnDynamic.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log("dynamic btn clicked!");
      console.log(e.target.parentElement);
      e.target.parentElement.remove();
    });
    displayTodosLeft();
  });

  completeBtnDynamic.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("gradient-background");
      btn.parentNode.querySelector(".todo-text").classList.toggle("gray");
      btn.parentNode
        .querySelector(".todo-text")
        .classList.toggle("strikethrough");
      btn.classList.toggle("completed");
      btn.parentNode.classList.toggle("todo-completed");
      displayTodosLeft();
    });
  });
}

// delete todo
deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("static btn clicked");
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
    displayTodosLeft();
  });
});

// mark todo as completed
completeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("gradient-background");
    btn.parentNode.querySelector(".todo-text").classList.toggle("gray");
    btn.parentNode
      .querySelector(".todo-text")
      .classList.toggle("strikethrough");
    btn.classList.toggle("completed");
    btn.parentNode.classList.toggle("todo-completed");
    displayTodosLeft();
  });
});

// clear all completed todos
clearBtn.addEventListener("click", () => {
  console.log(document.querySelectorAll(".completed"));
  document.querySelectorAll(".completed").forEach((todo) => {
    // todo.parentNode.remove();
    todo.parentNode.classList.add("hide");
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
  //   console.log(document.querySelectorAll(".todo-completed"));
  console.log(document.querySelectorAll("li:not(.todo-completed)"));
  addCompletedTasks();
  addUncompletedTasks();
  removeCompletedTasks();
});

// display completed todos
btnCompleted.addEventListener("click", () => {
  //   console.log(document.querySelectorAll("li:not(.todo-completed)"));
  console.log(document.querySelectorAll(".todo-completed"));
  addCompletedTasks();
  addUncompletedTasks();
  removeUncompletedTasks();
});

// display all todos
btnAll.addEventListener("click", () => {
  console.log(document.querySelectorAll(".list-item"));
  addCompletedTasks();
  addUncompletedTasks();
});
