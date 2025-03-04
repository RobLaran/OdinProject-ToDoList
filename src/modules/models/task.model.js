// Task model

// Create task
export function createTask(title="Untitled task",description="",dueDate=null,priority="Low",notes="A note to guide my task") {
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

