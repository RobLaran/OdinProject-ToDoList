import { createTask, taskDetails } from "./models/task.model.js";
import { createTaskElement } from "./views/task.view.js";
import modal from "./views/listModal.view.js";

// Add new task
function addNewTask() {
    const taskList = document.getElementById("task-list");

    const task = createTask();
    const taskElement = createTaskElement(task);

    taskList.append(taskElement);
}

// Remove list

// Open modal
function newListModal() {
    const container = document.getElementById("content-container");

    const listModal = modal; 

    container.append(listModal);

    listModal.showModal();
}

// Close modal

// Handle button events
function newListEventListener() {
    const newListButton = document.getElementById("new-list");

    newListButton.addEventListener("click", newListModal);
}

function newTaskEventListener() {
    const newTaskButton = document.getElementById("add-task");

    newTaskButton.addEventListener("click", addNewTask);
}


// Initialize
export default function initialize() {
    newListEventListener();
    newTaskEventListener();
}

