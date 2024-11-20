let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let btn = document.getElementById("add-task-btn");
let btnEdit = document.querySelector(".edit");

let todoList = [];

//Створення задачі
function renderTodoList() {
    if (todoList.length > 0) {
            const latestTask = todoList[todoList.length - 1];
            let li = document.createElement("li");
            li.innerHTML = latestTask;
            listContainer.appendChild(li);

        // Створюємо елемент <img>
        let editIMG = document.createElement("img");
        editIMG.classList.add("edit");
        editIMG.src = "images/edit_btn.png"; // Замініть на шлях до вашого зображення
        editIMG.alt = "Edit";

        li.appendChild(editIMG);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    inputBox.value = "";
}

//Додавання задачі на сторінку/в масив
btn.addEventListener("click", e => {
        todoList.push(inputBox.value);
        renderTodoList();
});

//Редагування задачі на сторінці/в масиві
listContainer.addEventListener('click', e => {
    if (e.target.classList.contains("edit")) {
        const li = e.target.parentElement;

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = li.firstChild.textContent.trim();

        li.firstChild.replaceWith(inputField);

        inputField.focus();

        inputField.addEventListener("blur", () => {
            const updatedValue = inputField.value.trim();

            const index = Array.from(listContainer.children).indexOf(li);
            todoList[index] = updatedValue;

            inputField.replaceWith(document.createTextNode(updatedValue));
        });

        inputField.addEventListener("keydown", e => {
            if (e.key === "Enter") {
                inputField.blur();
            }
        });
    }
});

document.body.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        if (inputBox.value !== "") {
            todoList.push(inputBox.value);
            renderTodoList();
        }
    }
});

//Зміна стану та видалення задачі зі сторінки/масиву
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        const li = e.target.parentElement;

        const taskText = li.firstChild.textContent.trim();

        const index = todoList.indexOf(taskText);
        if (index !== -1) {
            todoList.splice(index, 1);
        }

        li.remove();
    }
});