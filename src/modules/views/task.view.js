// Task view

// Create element to display a task
export function createTaskElement() {
    const taskDiv = document.createElement("li");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskName = document.createElement("p");
    taskName.className = "task-name";

}
