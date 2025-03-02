import { createList } from "./models/list.model.js";
import { createListElement } from "./views/list.view.js";
import { createTask, taskDetails } from "./models/task.model.js";
import { createTaskElement } from "./views/task.view.js";
import modal from "./views/listModal.view.js";

const todoList = createList();

const taskList = createList("Default list");

todoList.add(taskList);

// ? Duplicates list when rendering/refreshing

function renderTodoList() {
    const list = document.getElementById("todo-list");
    
    todoList.items.forEach(element => {
        if(element) {
            const taskListElement = createListElement(element);

            list.appendChild(taskListElement);
        }
    });

    console.log(todoList.items);
}

function refresh() {
    const list = document.getElementById("todo-list");
    
    for(let element of list.children) list.removeChild(element);
    
    renderTodoList();
}

// Add new task
function addTask() {
    const taskList = document.getElementById("task-list");

    const task = createTask();
    const taskElement = createTaskElement(task);

    taskList.append(taskElement);
}

// Add new list
export function addList(list) {
    todoList.add(list);

    refresh();
}

// Open new list modal
function newListModal() {
    const container = document.getElementById("content-container");

    const listModal = modal; 

    container.append(listModal);

    listModal.showModal();
}

// Handle button events
function newListEventListener() {
    const newListButton = document.getElementById("new-list");

    newListButton.addEventListener("click", newListModal);
}

function newTaskEventListener() {
    const newTaskButton = document.getElementById("add-task");

    newTaskButton.addEventListener("click", addTask);
}


// Initialize
export function initialize() {
    newListEventListener();
    newTaskEventListener();

    renderTodoList();
}

