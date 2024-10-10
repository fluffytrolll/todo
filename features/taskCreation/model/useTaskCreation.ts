import { useTaskStore, type Task } from "~/entities/task/";

export function useTaskCreation() {
    const taskStore = useTaskStore();

    const createTask = (task: Task): void => {
        if (task) {
            taskStore.addTask(task);
        }
    };

    return { createTask };
}
