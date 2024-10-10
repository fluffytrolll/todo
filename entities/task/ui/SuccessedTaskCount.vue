<template>
  <span class="chips">
    Задачи завершены
    <i>{{ successed }}</i>
  </span>
</template>

<script setup lang="ts">
import { useTaskStore } from "../model/taskStore";

const taskStore = useTaskStore();

const successed = computed(() => {
  const tasks = taskStore.tasks;
  return tasks.filter((task) => task.status).length;
});
</script>

<style scoped lang="scss">
.chips {
  color: var(--c-accent-second, #dccd00);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  i {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    border-radius: 999px;
    background: var(--c-gray-black, #333);
    color: var(--c-gray-light, #808080);
    font-family: Interб sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
