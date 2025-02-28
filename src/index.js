import "./styles.css";

import { createTask, updateTask, taskDetails } from "./modules/models/task.model.js";

const task = createTask();

console.log(task.title);

const taskUpdates = createTask("New title","my description",null,2);

updateTask(task,taskUpdates);

console.log(task.title);

taskDetails(task);

