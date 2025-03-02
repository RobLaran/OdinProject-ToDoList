

export default function editListModal() {

    // Create components
    const modal = document.createElement("dialog");
    modal.id = "edit-list-modal";
    modal.className = "modal";

    const editListLabel = document.createElement("label");
    editListLabel.className = "edit-list-label";
    editListLabel.textContent = "List name";
    editListLabel.setAttribute("for", "edit-list-input");

    const editListInput = document.createElement("input");
    editListInput.type = "text";
    editListInput.className = "text-input";
    editListInput.id = "edit-list-input";

    const modalButtons = document.createElement("div");
    modalButtons.className = "modal-btns";

    const editButton = document.createElement("button");
    editButton.id = "edit-list";
    editButton.className = "edit-btn modal-btn";
    editButton.textContent = "Edit";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-list";
    cancelButton.className = "cancel-btn modal-btn";
    cancelButton.textContent = "Cancel";

    // Set event listsner
    
}