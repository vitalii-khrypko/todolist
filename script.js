let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let btn = document.getElementById("add-task-btn");

let todoList = [];

function renderTodoList() {
    if (todoList.length > 0) {
            const latestTask = todoList[todoList.length - 1];
            let li = document.createElement("li");
            li.innerHTML = latestTask;
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
    inputBox.value = "";
}

btn.addEventListener("click", e => {
        todoList.push(inputBox.value);
        renderTodoList();
});

document.body.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        todoList.push(inputBox.value);
        renderTodoList();
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});