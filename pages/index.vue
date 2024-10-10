<script setup lang="ts">
import { TackList } from "~/widgets/taskList";
import { TaskListHeader } from "~/widgets/taskListHeader";
</script>

<template>
  <section class="container">
    <TaskListHeader />
    <TackList />
  </section>
</template>

<style scoped lang="scss">
.container {
    max-width: 768px;
    margin: 90px auto;
}
</style>
