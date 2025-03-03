// Task model

// Functions

// create task
// input: title, description, dueDate, priority, notes
export function createTask(title="Untitled task",description="",dueDate=null,priority=1,notes="A note to guide my task") {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        completed: false
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

