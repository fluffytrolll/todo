<template>
  <form class="form" method="post" @submit="submitTask">
    <Input v-model="task.text" name="task" placeholder="Введите задачу" />
    <Button type="submit" @click="submitTask">Создать</Button>
  </form>
</template>

<script setup lang="ts">
import { Button, Input } from "~/shared/ui";
import { useTaskCreation } from "../model/useTaskCreation";
import type { Task } from "~/entities/task";

const task = ref<Task>({
  text: "",
  timestamp: Date.now(),
  status: false
});

const { createTask } = useTaskCreation();

const submitTask = (e: Event) => {
  e.preventDefault();

  if (task.value.text.trim()) {
    createTask(task.value);
  }
};
</script>

<style lang="scss" scoped>
.form {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  max-width: 736px;
  width: 100%;
}
</style>
