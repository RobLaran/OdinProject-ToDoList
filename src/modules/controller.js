import { createList } from "./models/list.model.js";
import { createTask, taskDetails } from "./models/task.model.js";
import { createListElement, newList } from "./views/list.view.js";

// Add new list
function addNewList() {
    const todoLists = document.getElementById("todo-list");

    const newList = createList();
    const newListElement = createListElement(newList);

    todoLists.append(newListElement);
}

// Remove list

// Open modal

// Close modal

// Handle button events
function newListEventListener() {
    const newListBtn = document.getElementById("new-list");

    newListBtn.addEventListener("click", addNewList) ;
}

// Initialize
export default function initialize() {
    newListEventListener()
}

