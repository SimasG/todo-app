// delete todo
deleteBtn.forEach((btn) => {
btn.addEventListener("click", (e) => {
console.log("static btn clicked");
console.log(e.target.parentElement);
e.target.parentElement.remove();
displayTodosLeft();
});
});
