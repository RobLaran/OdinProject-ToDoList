// List view

// Create element to display a list

export function createListElement(list) {
    const listDiv = document.createElement("li");
    listDiv.className = "list-item";

    const listName = document.createElement("p");
    listName.className = "list-name";
    listName.textContent = list.name;

    const editListNameIcon = document.createElement("div");
    editListNameIcon.className = "edit-list icon";

    const deleteListIcon = document.createElement("div");
    deleteListIcon.className = "delete-list icon";

    listDiv.append(
        listName,
        editListNameIcon,
        deleteListIcon
    );

    editListNameIcon.addEventListener("click", () => {
        console.log("editing");
    });

    deleteListIcon.addEventListener("click", () => {
        const parent = listDiv.parentElement;

        parent.removeChild(listDiv);
    });

    listName.addEventListener("click", () => {
        console.log("clicked");
    });

    return listDiv;
}

