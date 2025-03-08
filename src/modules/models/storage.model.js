import { createList } from "./list.model";
import { createTask } from "./task.model";

//  Add localStorage
export function loadList(name="data") {
    const savedData = JSON.parse(localStorage.getItem(name));

    if (!savedData) return loadDefault(); 

    const listStorage = createList(savedData.name);

    savedData.items.forEach(item => {
        if (typeof item === "object") {
            const list = createList(item.name);

            item.items.forEach((task) => {
                list.add(task);
            });

            listStorage.add(list); 
        } 
    });

    return listStorage;
}

export function saveList(list) {
    const listStorage = {
        name: list.name,
        items: []
    };

    list.items.forEach((item) => {
        listStorage.items.push({
            name: item.name,
            items: item.items
        });
    });

    localStorage.setItem("data", JSON.stringify(listStorage));
}

// Check localStorage
export function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}

// Default values
function loadDefault() {
    const list = createList("Todo Lists");
    const defaultList = createList("Default list");

    let task1 = createTask("Task One");
    let task2 = createTask("Task Two");
    let task3 = createTask("Task Three");

    defaultList.add(task1);
    defaultList.add(task2);
    defaultList.add(task3);

    list.add(defaultList);
    return list; 
}