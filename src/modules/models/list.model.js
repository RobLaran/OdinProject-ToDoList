// List model

// Functions
// Create list 
export function createList(name="Untitled list") {
    const list = [];

    const items = (() => list)();

    const size = (() => list.length)();

    const add = (item) => list.push(item);

    const getItem = (index) => list[index];

    const removeItem = (task) => {
        const index = list.indexOf(task);

        list.splice(index, 1);
    }

    return {
        name,
        items,
        size,
        add,
        getItem,
        removeItem
    }
}
