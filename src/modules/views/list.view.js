// List view
import { mainList, currentList, changeList, refresh } from "../controller";
import { deleteListModal, editListModal } from "./modal.view";

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
        const index = mainList.items.indexOf(list);

        changeList(index);

        refresh();

        console.log("List index: " + currentList);
        console.log(mainList.items[index]);
    });
    

    // Add all sub components
    listDiv.append(
        listName,
        editListNameIcon,
        deleteListIcon
    );

    return listDiv;
}







