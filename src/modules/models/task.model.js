// Task model
import { format } from "date-fns";

const currentDate = format(new Date(), "MMMM dd, yyyy");

// Create task
export function createTask(
    title="Untitled task",
    description="",
    dueDate=currentDate,
    priority="low",
    notes="A note to guide my task",
    completed=false
) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        completed
    }
};
