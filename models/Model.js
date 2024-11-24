export class Model {
    constructor() {
        this.todoList = [];
    }

    addTask(task) {
        this.todoList.push(task);
    }

    editTask(index, updatedTask) {
        this.todoList[index] = updatedTask;
    }

    removeTask(index) {
        this.todoList.splice(index, 1);
    }

    getTasks() {
        return this.todoList;
    }
}
