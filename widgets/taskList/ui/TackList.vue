<template>
  <ul class="task-list">
    <TaskItem
      v-for="(task, key) in tasks"
      :text="task.text"
      :id="task.timestamp"
      :checked="task.status"
      :key="key"
    />
  </ul>
</template>

<script setup lang="ts">
import { useTaskStore } from "~/entities/task";
import { TaskItem } from "~/features/taskCreation";

const taskStore = useTaskStore();
const tasks = ref(taskStore.tasks);
</script>

<style scoped lang="scss">
.task-list {
  display: flex;
  flex-flow: column-reverse nowrap;
  gap: 20px;
  padding: 0 8px;
  padding-top: 24px;
}
</style>
