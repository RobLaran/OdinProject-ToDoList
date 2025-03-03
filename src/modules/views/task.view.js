// Task view
import { deleteListModal, editListModal } from "./modal.view";

// Create element to display a task
export function createTaskElement(task) {

    // Create components
    const taskDiv = document.createElement("li");
    taskDiv.className = "list-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskName = document.createElement("p");
    taskName.className = "task-name";
    taskName.innerText = task.title;

    const editButton = document.createElement("button");
    editButton.className = "edit-task btn";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-task btn";

    // Set event listener
    checkbox.addEventListener("click", () => {
        console.log("checked");
    });

    taskName.addEventListener("click", () => {
        console.log("name clicked");
    });

    editButton.addEventListener("click", () => {
        console.log("editing");
    });

    deleteButton.addEventListener("click", () => {
        const parent = taskDiv.parentElement;

        parent.removeChild(taskDiv);
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
