import { createList } from "../models/list.model.js";
import { createListElement } from "./list.view.js";
import { addList } from "../controller.js";

export default (function createNewListModal() {

    // Create components
    const modal = document.createElement("dialog");
    modal.id = "list-modal";
    modal.className = "modal";

    const listLabel = document.createElement("label");
    listLabel.className = "list-label";
    listLabel.textContent = "List name";
    listLabel.setAttribute("for", "list-name-input");

    const listNameInput = document.createElement("input");
    listNameInput.type = "text";
    listNameInput.className = "text-input";
    listNameInput.id = "list-name-input";

    const modalButtons = document.createElement("div");
    modalButtons.className = "modal-btns";

    const confirmButton = document.createElement("button");
    confirmButton.id = "confirm-list";
    confirmButton.className = "confirm-btn modal-btn";
    confirmButton.textContent = "Confirm";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-list";
    cancelButton.className = "cancel-btn modal-btn";
    cancelButton.textContent = "Cancel";

    function confirmList() {
        const listName = listNameInput.value.trim() != 0 ? listNameInput.value.trim() : undefined;

        addList(createList(listName));

        closeModal();
    }

    function closeModal() {
        const parent = modal.parentElement;

        listNameInput.value = "";

        modal.close();
        parent.removeChild(modal);
    }

    // Set event listener
    confirmButton.addEventListener("click", confirmList);

    cancelButton.addEventListener("click", closeModal);

    // Add buttons to button div
    modalButtons.append(
        confirmButton,
        cancelButton
    );

    // Add sub components to modal
    modal.append(
        listLabel,
        listNameInput,
        modalButtons
    );

    return modal; 
})();