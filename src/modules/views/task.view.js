// Task view
import { deleteTaskModal, editTaskModal, taskDetailsModal } from "./modal.view";
import { refresh } from "../controller";

// Create element to display a task
export function createTaskElement(task) {

    // Create components
    const taskDiv = document.createElement("li");
    taskDiv.className = "list-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = task.completed;

    const taskName = document.createElement("p");
    taskName.className = "task-name";
    taskName.textContent = task.title;

    const priorityCircle = document.createElement("span");
    priorityCircle.className = "priority " + task.priority;
    priorityCircle.textContent = "●";

    const editButton = document.createElement("button");
    editButton.className = "edit-task btn";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-task btn";

    // Set event listener
    checkbox.addEventListener("click", () => {
        task.completed = !task.completed;

        refresh();
    });

    taskName.addEventListener("click", () => {
        taskDetailsModal(task);
    });

    editButton.addEventListener("click", () => {
        editTaskModal(task);
    });

    deleteButton.addEventListener("click", () => {
        deleteTaskModal(task);
    });

    // Add sub components
    taskDiv.append(
        checkbox,
        taskName,
        priorityCircle,
        editButton,
        deleteButton
    );

    return taskDiv;
}
