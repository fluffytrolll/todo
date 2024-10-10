<template>
  <span class="chips">
    Всего задач
    <i>{{ taskStore.tasks.length }}</i>
  </span>
</template>

<script setup lang="ts">
import { useTaskStore } from "../model/taskStore";

const taskStore = useTaskStore();
</script>

<style scoped lang="scss">
.chips {
  color: var(--c-accent, #00dc82);
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
