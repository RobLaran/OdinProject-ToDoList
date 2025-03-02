import { addList, render, showTasks } from "./views/list.view.js";
import { createList } from "./models/list.model.js";
import { openNewListModal } from "./views/modal.view.js";

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

// function newTaskEventListener() {
//     const newTaskButton = document.getElementById("add-task");

//     newTaskButton.addEventListener("click", () => {
//         addTask()
//     });
// }


// Initialize
export function initialize() {
    newListEventListener();
    // newTaskEventListener();

    const defaultList = createList("Default list");

    addList(defaultList);
    showTasks(defaultList);
    render();
}


