import { addList, render, showTasks } from "./views/list.view.js";
import { createList } from "./models/list.model.js";
import { openNewListModal, addTaskModal } from "./views/modal.view.js";
import { createTask } from "./models/task.model.js";

// Add new task
// function addTask() {
//     const taskList = document.getElementById("task-list");

//     const task = createTask();
//     const taskElement = createTaskElement(task);

//     taskList.append(taskElement);
// }

// Handle button events
function newListEventListener() {
    const newListButton = document.getElementById("new-list");

    newListButton.addEventListener("click", () => {
        openNewListModal();
    });
}

function newTaskEventListener() {
    const newTaskButton = document.getElementById("add-task");

    newTaskButton.addEventListener("click", () => {
        addTaskModal();
    });
}


// Initialize
export function initialize() {
    newListEventListener();
    newTaskEventListener();

    const defaultList = createList("Default list");

    const task = createTask();

    defaultList.add(task);

    addList(defaultList);
    showTasks(defaultList);
    render();
}


