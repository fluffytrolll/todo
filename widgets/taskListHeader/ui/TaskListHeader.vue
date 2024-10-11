<template>
  <header class="header">
    <Chips title="Всего задач" :count="total" :class-names="['accent']" />
    <Chips title="Завершено" :count="successed" :class-names="['secondary']" />
  </header>
</template>

<script setup lang="ts">
import { useTaskStore } from "~/entities/task";
import { Chips } from "~/shared/ui";

const taskStore = useTaskStore();

const total = computed(() => taskStore.tasks.length);
const successed = computed(() => taskStore.tasks.filter((task) => task.status).length);
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  margin: 0 8px;
  border-bottom: 1px solid var(--c-gray-black, #333);
}
</style>
