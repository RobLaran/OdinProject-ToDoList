// Task model
import { format } from "date-fns";

// Create task
export function createTask(title="Untitled task",description="",dueDate=format(new Date(), "MMMM dd, yyyy"),priority="low",notes="A note to guide my task", completed=false) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        completed: completed
    }
};

// display task detail
export function taskDetails(task) {
    if(task instanceof Object) {
        for(const [key, value] of Object.entries(task)) {
            console.log(`${key}: ${value}`);
        }
    }
}

