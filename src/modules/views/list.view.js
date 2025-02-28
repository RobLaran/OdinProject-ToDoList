import deleteIcon from "../../asset/icons/delete.svg";

// List view

// Create element to display a list

export function createListElement(list) {
    const listDiv = document.createElement("li");
    listDiv.className = "list-item";

    const listName = document.createElement("p");
    listName.className = "list-name";
    listName.textContent = list.name;

    const deleteListIcon = document.createElement("img");
    deleteListIcon.className = "delete-list icon delete";
    deleteListIcon.src = deleteIcon;

    listDiv.append(
        listName,
        deleteListIcon
    );

    return listDiv;
}

export function newList(list) {
    const todoList = document.getElementById("todo-list");

    // clearItems();

    todoList.append(list);

    function clearItems() {
        let element = todoList.lastElementChild;

        while(element) {
            todoList.removeChild(element);

            element = todoList.lastElementChild;
        }
    }
}