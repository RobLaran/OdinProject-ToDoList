// Task view
import { deleteTaskModal, editTaskModal } from "./modal.view";

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

    const editButton = document.createElement("button");
    editButton.className = "edit-task btn";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-task btn";

    // Set event listener
    checkbox.addEventListener("click", () => {
        task.completed = !task.completed;
    });

    taskName.addEventListener("click", () => {
        console.log("name clicked");

        console.log(task);
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
        editButton,
        deleteButton
    );

    return taskDiv;
}
