// List view

// Create element to display a list

export function createListElement(list) {
    
    // Create components 
    const listDiv = document.createElement("li");
    listDiv.className = "list-item";

    const listName = document.createElement("p");
    listName.className = "list-name";
    listName.textContent = list.name;

    const editListNameIcon = document.createElement("button");
    editListNameIcon.className = "edit-list btn";

    const deleteListIcon = document.createElement("button");
    deleteListIcon.className = "delete-list btn";
    

    // Set event listener
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


    // Add all sub components
    listDiv.append(
        listName,
        editListNameIcon,
        deleteListIcon
    );

    return listDiv;
}

