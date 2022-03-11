// TODO: add todos to the list -> DONE
// TODO: delete todos from the list -> DONE
// TODO: mark todos as complete -> DONE
// TODO clear all completed todos -> DONE

// TODO: clean UI stuff (limit todo size, etc.)

const form = document.querySelector(".input-form");
const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input");
const deleteBtn = document.querySelectorAll(".delete");
const todoInfoContainer = document.querySelector(".todo-info-container");
const completeBtn = document.querySelectorAll(".circle");
const clearBtn = document.querySelector(".btn-clear");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addNewTodo();
});

function addNewTodo() {
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
      <p class="todo-text">${
        document.querySelector("#todo-input").value.charAt(0).toUpperCase() +
        document.querySelector("#todo-input").value.slice(1)
      }</p>
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
  document.querySelector("#todo-input").value = "";
  const deleteBtnDynamic = document.querySelectorAll(".delete-dynamic");
  const completeBtnDynamic = document.querySelectorAll(".circle-dynamic");

  deleteBtnDynamic.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log("dynamic btn clicked!");
      console.log(e.target.parentElement);
      e.target.parentElement.remove();
    });
  });

  completeBtnDynamic.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.backgroundImage =
        "linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
      btn.parentNode.querySelector(".todo-text").style.color = "#D1D2DA";
      btn.parentNode.querySelector(".todo-text").classList.add("strikethrough");
      btn.classList.add("completed");
    });
  });
}

// delete todo
deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("static btn clicked");
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  });
});

// mark todo as completed
completeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.backgroundImage =
      "linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
    btn.parentNode.querySelector(".todo-text").style.color = "#D1D2DA";
    btn.parentNode.querySelector(".todo-text").classList.add("strikethrough");
    btn.classList.add("completed");
  });
});

// clear all completed todos
clearBtn.addEventListener("click", () => {
  console.log(document.querySelectorAll(".completed"));
  document.querySelectorAll(".completed").forEach((todo) => {
    todo.parentNode.remove();
  });
});
