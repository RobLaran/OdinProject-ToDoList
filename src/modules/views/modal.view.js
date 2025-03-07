import { createList } from "../models/list.model.js";
import { addList, refresh, removeList, editList, addTask, removeTask, editTask } from "../controller.js";
import { createTask } from "../models/task.model.js";

const container = document.getElementById("content-container");

const ListModal = () => {
    
    // Create components
    const modal = document.createElement("dialog");
    modal.id = "list-modal";
    modal.className = "modal";

    const form = document.createElement("form");
    form.id = "list-form";
    form.className = "list form";

    const listLabel = document.createElement("label");
    listLabel.className = "list-label";
    listLabel.textContent = "List name";
    listLabel.setAttribute("for", "list-name-input");

    const listNameInput = document.createElement("input");
    listNameInput.type = "text";
    listNameInput.className = "text-input";
    listNameInput.id = "list-name-input";
    listNameInput.maxLength = 120;

    const modalButtons = document.createElement("div");
    modalButtons.className = "modal-btns";

    const submitButton = document.createElement("button");
    submitButton.id = "submit-list";
    submitButton.className = "submit-btn modal-btn";
    submitButton.textContent = "Submit";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-list";
    cancelButton.className = "cancel-btn modal-btn";
    cancelButton.textContent = "Cancel";

    // Add buttons to button div
    modalButtons.append(
        submitButton,
        cancelButton
    );

    // Add sub components to modal
    form.append(
        listLabel,
        listNameInput,
        modalButtons
    );

    modal.append(form);

    // Functions
    const show = () => {
        container.append(modal);

        modal.showModal();
    };

    let submit = () => {
        refresh();
        close();
    };

    const close = () => {
        listNameInput.value = "";

        modal.close();
        container.removeChild(modal);
    };

    const getValue = () => listNameInput.value.trim();

    const setValue = (value) => listNameInput.value = value;

    const setSubmitButton = (func, text="Submit") => {
        submitButton.addEventListener("click", func);
        submitButton.textContent = text;
    }

    // Set event listener
    cancelButton.addEventListener("click", close);

    return {
        getValue,
        setValue,
        setSubmitButton,
        show,
        submit,
        close
    }
};

const TaskModal = () => {

    // Create components
    const modal = document.createElement("dialog");
    modal.id = "add-task-modal";
    modal.className = "task modal";

    const form = document.createElement("form");
    form.id = "task-form";
    form.className = "task form";

    const titleLabel = document.createElement("label");
    titleLabel.className = "task-title-label";
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for", "task-title-input");

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.className = "text-input";
    titleInput.id = "task-title-input";
    titleInput.maxLength = 120;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.className = "description-label";
    descriptionLabel.textContent = "Description";
    descriptionLabel.setAttribute("for", "description-input");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.className = "textarea-input";
    descriptionInput.id = "description-input";
    descriptionInput.maxLength = 240;

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

        prioritySelection.append(option);
    }

    const notesLabel = document.createElement("label");
    notesLabel.className = "notes-label";
    notesLabel.textContent = "Notes";
    notesLabel.setAttribute("for", "notes-input");

    const notesInput = document.createElement("textarea");
    notesInput.className = "textarea-input";
    notesInput.id = "notes-input";
    notesInput.maxLength = 240;

    const modalButtons = document.createElement("div");
    modalButtons.className = "modal-btns";

    const submitButton = document.createElement("button");
    submitButton.id = "add-task";
    submitButton.className = "submit-btn modal-btn";
    submitButton.textContent = "Submit";
    submitButton.type = "submit";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-task";
    cancelButton.className = "cancel-btn modal-btn";
    cancelButton.textContent = "Cancel";

    // Add buttons to button div
    modalButtons.append(
        submitButton,
        cancelButton,
    );

    // Add sub components to modal
    form.append(
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

    modal.append(form);

    // Functions
    const show = () => {
        container.append(modal);

        modal.showModal();
    };

    const submit = () => {
        refresh();
        close();
    };

    const close = () => {
        modal.close();
        container.removeChild(modal);
    };

    const setSubmitButton = (func, text="Submit") => {
        submitButton.addEventListener("click", func);
        submitButton.textContent = text;
    }

    const setTitle = (title) => titleInput.value = title;
    
    const getTitle = () => titleInput.value.trim() || undefined;

    const setDescription = (description) => descriptionInput.value = description;

    const getDescription = () => descriptionInput.value.trim();
        
    const setDueDate = (dueDate) => dueDateInput.value = dueDate;
        
    const getDueDate = () => dueDateInput.value || undefined;

    const setPriority = (priority) => prioritySelection.value = priority;

    const getPriority = () => prioritySelection.value || undefined;

    const setNotes = (notes) => notesInput.value = notes;

    const getNotes = () => notesInput.value

    // Set event listener
    cancelButton.addEventListener("click", close);
    
    return {
        show,
        submit,
        close,
        setSubmitButton,
        setTitle,
        getTitle,
        setDescription,
        getDescription,
        setDueDate,
        getDueDate,
        setPriority,
        getPriority,
        setNotes,
        getNotes,
    };
};

const DeleteModal = (itemName) => {

    // Create components
    const modal = document.createElement("dialog");
    modal.id = "delete-list-modal";
    modal.className = "modal";

    const deleteListLabel = document.createElement("label");
    deleteListLabel.className = "delete-list-label";
    deleteListLabel.textContent = "Delete list";

    const deleteStatement = document.createElement("p");
    deleteStatement.className = "statement";
    deleteStatement.innerText = `"${itemName}" will be permanently deleted.`

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

    const submit = () => {
        close();
        refresh();
    };

    const close = () => {
        modal.close();
        container.removeChild(modal);
    };

    const setDeleteButton = (func) => {
        deleteButton.addEventListener("click", func);
    };

    // Set event listener
    cancelButton.addEventListener("click", close);

    return {
        show,
        submit,
        close,
        setDeleteButton
    }
};



// Modals for list
export function openNewListModal() {
    const addModal = ListModal();

    const confirm = () => {
        const listName = addModal.getValue() || undefined;

        addList(createList(listName));
        
        addModal.submit();
    };

    addModal.setSubmitButton(confirm, "Confirm");
    addModal.show();
};

export function editListModal(list) {
    const editModal = ListModal();

    const edit = () => {
        list.name = editModal.getValue() || "Untitled list";

        editList(list);
        
        editModal.submit();
    };
    
    editModal.setValue(list.name);
    editModal.setSubmitButton(edit, "Edit");
    editModal.show();
}

export function deleteListModal(list) {

    const deleteListModal = DeleteModal(list.name);

    const remove = () => {
        removeList(list);
        deleteListModal.submit();
    };

    deleteListModal.setDeleteButton(remove);
    deleteListModal.show();
}



// Modals for task
export function addTaskModal() {
    const addModal = TaskModal();

    const add = () => {
        const title = addModal.getTitle();
        const description = addModal.getDescription();
        const dueDate = addModal.getDueDate();
        const priority = addModal.getPriority();
        const notes = addModal.getNotes();

        addTask(createTask(title, description, dueDate, priority, notes));

        addModal.submit();
    };

    addModal.setSubmitButton(add, "Add");
    addModal.show();
}


export function editTaskModal(task) {
    const editModal = TaskModal();

    const edit = () => {
        task.title = editModal.getTitle();
        task.description = editModal.getDescription();
        task.dueDate = editModal.getDueDate();
        task.priority = editModal.getPriority();
        task.notes = editModal.getNotes();

        editTask(task);

        editModal.submit();
    };

    console.log(task);
    
    editModal.setTitle(task.title);
    editModal.setDescription(task.description);
    editModal.setDueDate(task.dueDate);
    editModal.setPriority(task.priority);
    editModal.setNotes(task.notes);
    editModal.setSubmitButton(edit, "Edit");
    editModal.show();
}


export function deleteTaskModal(task) {
    const deleteModal = DeleteModal(task.title);

    const remove = () => {
        removeTask(task);
        deleteModal.submit();
    };

    deleteModal.setDeleteButton(remove);
    deleteModal.show();
}