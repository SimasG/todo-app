// delete todo
deleteBtn.forEach((btn) => {
btn.addEventListener("click", (e) => {
console.log("static btn clicked");
console.log(e.target.parentElement);
e.target.parentElement.remove();
displayTodosLeft();
});
});

          <!-- <li class="todo list-item">
            <div class="circle">
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
            <p class="todo-text">Jog around the park 3x</p>
            <svg
              class="delete"
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
          </li> -->

// for (let i = 0; i < storageLength; i++) {
// for svg element
// if (
// e.target.parentNode.childNodes[3].innerHTML ===
// JSON.parse(localStorage["todos"]).tasks[i].content &&
// e.target.classList.value === "delete"
// ) {
// const newTodos = todos.tasks.filter((todo) => {
// return (
// todo.content !== JSON.parse(localStorage["todos"]).tasks[i].content
// );
// });

// todos.tasks = newTodos;
// localStorage.setItem("todos", JSON.stringify(todos));
// e.target.parentNode.remove();
// }
// for path element
// else if (e.target.farthestViewportElement.classList.value === "delete") {
// e.target.parentNode.parentNode.remove();

// const newTodos = todos.tasks.filter((todo) => {
// return (
// todo.content !== JSON.parse(localStorage["todos"]).tasks[i].content
// );
// });

// todos.tasks = newTodos;
// localStorage.setItem("todos", JSON.stringify(todos));
// }
// }

// const todoText =
// document.querySelector("#todo-input").value.charAt(0).toUpperCase() +
// document.querySelector("#todo-input").value.slice(1);
// const todoHtml = `<li class="todo list-item"> // <div class="circle circle-dynamic"> // <svg // class="checkmark" // xmlns="http://www.w3.org/2000/svg" // width="11" // height="9" // > // <path // fill="none" // stroke="#fff" // stroke-width="2" // d="M1 4.304L3.696 7l6-6" // /> // </svg> // </div> // <p class="todo-text">${todoText}</p> // <svg // class="delete-dynamic" // xmlns="http://www.w3.org/2000/svg" // width="18" // height="18" // > // <path // fill="#494C6B" // fill-rule="evenodd" // d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" // /> // </svg> // </li>`;
// todoList.insertAdjacentHTML("beforeend", todoHtml);
