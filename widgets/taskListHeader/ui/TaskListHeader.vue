<template>
  <header class="header">
    <TaskCount />
    <SuccessedTaskCount />
  </header>
</template>

<script setup lang="ts">
import { SuccessedTaskCount, TaskCount } from "~/entities/task";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid var(--c-gray-black, #333);
}
</style>
