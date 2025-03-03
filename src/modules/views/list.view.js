// List view
import { createList } from "../models/list.model";
import { deleteListModal, editListModal } from "./modal.view";
import { createTaskElement } from "./task.view";

const mainList = createList("Todo List");
const todoList = document.getElementById("todo-list");

const taskTitle = document.getElementById("task-title");
const taskList = document.getElementById("task-list");

let currentList = 0;

// Create element to display a list
export function createListElement(list) {
    
    // Create components 
    const listDiv = document.createElement("li");
    listDiv.className = "list-item";

    const listName = document.createElement("p");
    listName.className = "list-name";
    listName.innerText = list.name;

    const editListNameIcon = document.createElement("button");
    editListNameIcon.className = "edit-list btn";

    const deleteListIcon = document.createElement("button");
    deleteListIcon.className = "delete-list btn";
    

    // Set event listener
    editListNameIcon.addEventListener("click", () => {
        editListModal(list);
    });

    deleteListIcon.addEventListener("click", () => {
        deleteListModal(list);
    });

    listName.addEventListener("click", () => {
        currentList = mainList.items.indexOf(list);

        showTasks(list);

        console.log("List index: " + currentList);
    });

    // Add all sub components
    listDiv.append(
        listName,
        editListNameIcon,
        deleteListIcon
    );

    return listDiv;
}

export function addList(list) {
    mainList.add(list);
};

export function removeList(list) {
    mainList.removeItem(list);
};

export function editList(list) {
    const index = mainList.items.indexOf(list);

    if(index != -1) {
        console.log(index);
        console.log(list.name);
        console.log(index);
        
        const oldList = mainList.getItem(index);
        oldList.name = list.name;
    }
};

export function showTasks(list) {
    console.log(list, list.size);
    

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

export function render() {
    mainList.items.forEach(element => {
        if(element) {
            todoList.appendChild(createListElement(element));
        }
    });
};

export function refresh() {
    let listChild = todoList.lastElementChild;

    while(listChild) {
        todoList.removeChild(listChild);

        listChild = todoList.lastElementChild;
    }
    
    render();
};
