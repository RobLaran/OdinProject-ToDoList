import { createListElement } from "./views/list.view.js";
import { createTaskElement } from "./views/task.view.js";
import { openNewListModal, addTaskModal } from "./views/modal.view.js";
import { storageAvailable, loadList, saveList } from "./models/storage.model.js";

export const mainList = loadList();

export const todoList = document.getElementById("todo-list");

export const taskTitle = document.getElementById("task-title");
export const taskList = document.getElementById("task-list");

export let currentList = 0;

export const changeList = (index) => currentList = index;


// List operations
export function addList(list) {
    mainList.add(list);
};

export function removeList(list) {
    mainList.removeItem(list);
};

export function editList(updatedList) {
    mainList.updateItem(updatedList);
};


// Task operations
export function addTask(task) {
    console.log(mainList.getItem(currentList));

    mainList.getItem(currentList).add(task);
}

export function editTask(updatedTask) {
    mainList.getItem(currentList).updateItem(updatedTask);
}

export function removeTask(task) {
    const list = mainList.getItem(currentList);

    if(list) {
        list.removeItem(task);
    }
}

export function showTasks() {
    const list = mainList.getItem(currentList);

    if(list) {
        taskTitle.innerText = list.name;
        const tasks = list.items;
    
        if(list.size() === 0) {
            if(!document.getElementById("message")) {
                const message = "Task list is empty"; 
    
                const messageWrapper = document.createElement("h4");
                messageWrapper.innerText = message; 
                messageWrapper.id = "message";
                
                taskList.append(messageWrapper);
            }
        } else {
            tasks.forEach(task => {
                taskList.append(createTaskElement(task));
            });
        }   
    }
}

// Handle events
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


// Reloading the page
export function render() {
    mainList.items.forEach(element => {
        if(element) {
            todoList.appendChild(createListElement(element));
        }
    });

    showTasks();
};

export function refresh() {
    let listChild = todoList.lastElementChild;

    while(listChild) {
        todoList.removeChild(listChild);

        listChild = todoList.lastElementChild;
    }

    let taskChild = taskList.lastElementChild;

    while(taskChild) {
        taskList.removeChild(taskChild);

        taskChild = taskList.lastElementChild;
    }

    saveList(mainList);
    render();
};


// Initialize
export function initialize() {
    // Web Storage API available
    console.log("'localStorage' availability: " + storageAvailable("localStorage"));

    newListEventListener();
    newTaskEventListener();

    render();
}


