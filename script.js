// TODO: add todos to the list

const form = document.querySelector(".input-form");
const todoList = document.querySelector(".todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addNewTodo();
});

function addNewTodo() {
  console.log("new todo added");
  const todoHtml = `<li class="todo list-item">
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
    <path
      fill="none"
      stroke="#000"
      stroke-width="2"
      d="M1 4.304L3.696 7l6-6"
    />
  </svg>
  <p>shit workeddddddd</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path
      fill="#494C6B"
      fill-rule="evenodd"
      d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
    />
  </svg>
</li>`;
  todoList.insertAdjacentHTML("afterbegin", todoHtml);
}
