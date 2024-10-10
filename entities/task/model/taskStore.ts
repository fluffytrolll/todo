import { defineStore } from 'pinia';
import type { Task } from './types';

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref<Task[]>([]);

    const addTask = (task: Task): void => {

        if (task) {
            tasks.value.push(task);
        }
    }

    return { tasks, addTask };
})