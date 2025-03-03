import { createList } from "../models/list.model.js";
import { addList, refresh, removeList, editList } from "./list.view.js";

const container = document.getElementById("content-container");


export function openNewListModal() {

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

    // Functions
    const show = () => {
        container.append(modal);

        modal.showModal();
    };

    const confirm = () => {
        const listName = listNameInput.value.trim() != 0 ? listNameInput.value.trim() : undefined;

        addList(createList(listName));
        refresh();
        
        close();
    };

    const close = () => {
        listNameInput.value = "";

        modal.close();
        container.removeChild(modal);
    };

    // Set event listener
    confirmButton.addEventListener("click", confirm);
    cancelButton.addEventListener("click", close);

    show();
};

export function editListModal(list) {

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
    editListInput.value = list.name;

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

    // Add sub components
    modalButtons.append(
        editButton,
        cancelButton,
    );

    modal.append(
        editListLabel,
        editListInput,
        modalButtons
    );

    // Functions
    const show = () => {
        container.append(modal);

        modal.showModal();
    };

    const edit = () => {
        list.name = editListInput.value.trim();

        editList(list);
        refresh();
        
        close();
    };

    const close = () => {
        modal.close();
        container.removeChild(modal);
    };

    // Set event listener
    editButton.addEventListener("click", edit);
    cancelButton.addEventListener("click", close);

    show();
}

export function deleteListModal(list) {

    // Create components
    const modal = document.createElement("dialog");
    modal.id = "delete-list-modal";
    modal.className = "modal";

    const deleteListLabel = document.createElement("label");
    deleteListLabel.className = "delete-list-label";
    deleteListLabel.textContent = "Delete list";

    const deleteStatement = document.createElement("p");
    deleteStatement.className = "statement";
    deleteStatement.innerText = `"${list.name}" will be permanently deleted.`

    const modalButtons = document.createElement("div");
    modalButtons.className = "modal-btns";

    const deleteButton = document.createElement("button");
    deleteButton.id = "delete-list";
    deleteButton.className = "delete-btn modal-btn";
    deleteButton.textContent = "Delete";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-list";
    cancelButton.className = "cancel-btn modal-btn";
    cancelButton.textContent = "Cancel";

    // Add sub components
    modalButtons.append(
        deleteButton,
        cancelButton
    );

    modal.append(
        deleteListLabel,
        deleteStatement,
        modalButtons
    );

    // Functions
    const show = () => {
        container.append(modal);

        modal.showModal();
    };

    const remove = () => {
        removeList(list);
        close();
        refresh();
    };

    const close = () => {
        modal.close();
        container.removeChild(modal);
    };

    // Set event listener
    deleteButton.addEventListener("click", remove);

    cancelButton.addEventListener("click", close);

    show();
}

export function addTaskModal() {
    // Create components
    const modal = document.createElement("dialog");
    modal.id = "add-task-modal";
    modal.className = "modal";

    const titleLabel = document.createElement("label");
    titleLabel.className = "task-title-label";
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for", "task-title-input");

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.className = "text-input";
    titleInput.id = "task-title-input";

    const descriptionLabel = document.createElement("label");
    descriptionLabel.className = "description-label";
    descriptionLabel.textContent = "Description";
    descriptionLabel.setAttribute("for", "description-input");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.className = "textarea-input";
    descriptionInput.id = "description-input";

    const dueDateLabel = document.createElement("label");
    dueDateLabel.className = "due-date-label";
    dueDateLabel.textContent = "Due date";
    dueDateLabel.setAttribute("for", "due-date-input");

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.className = "date-input";
    dueDateInput.id = "due-date-input";

    const priotityLabel = document.createElement("label");
    priotityLabel.className = "priority-label";
    priotityLabel.textContent = "Priority";
    priotityLabel.setAttribute("for", "priority-selection");

    const prioritySelection = document.createElement("select");
    prioritySelection.className = "select-priority";
    prioritySelection.id = "priority-selection";
    prioritySelection.name = "priority";

    const priorities = ["Low", "Medium", "High"];

    for(let i = 0; i < 3; i++) {
        const option = document.createElement("option");
        option.className = "priority-option";
        option.innerText = priorities[i];
        option.value = priorities[i].toLowerCase();

        prioritySelection.appendChild(option);
    }

    const notesLabel = document.createElement("label");
    notesLabel.className = "notes-label";
    notesLabel.textContent = "Notes";
    notesLabel.setAttribute("for", "notes-input");

    const notesInput = document.createElement("textarea");
    notesInput.className = "textarea-input";
    notesInput.id = "notes-input";

    const modalButtons = document.createElement("div");
    modalButtons.className = "modal-btns";

    const addButton = document.createElement("button");
    addButton.id = "add-task";
    addButton.className = "add-btn modal-btn";
    addButton.textContent = "Add";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-task";
    cancelButton.className = "cancel-btn modal-btn";
    cancelButton.textContent = "Cancel";

    // Add buttons to button div
    modalButtons.append(
        addButton,
        cancelButton,
    );

    // Add sub components to modal
    modal.append(
        titleLabel,
        titleInput,
        descriptionLabel,
        descriptionInput,
        dueDateLabel,
        dueDateInput,
        priotityLabel,
        prioritySelection,
        notesLabel,
        notesInput,
        modalButtons
    );

    // Functions
    const show = () => {
        container.append(modal);

        modal.showModal();
    };

    const add = () => {
        close();
        refresh();
    };

    const close = () => {
        modal.close();
        container.removeChild(modal);
    };

    // Set event listener
    addButton.addEventListener("click", add);
    cancelButton.addEventListener("click", close);
    
    show();
}