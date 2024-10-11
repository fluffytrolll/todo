<template>
  <form class="form" method="post" @submit="submitTask">
    <Input v-model="text" name="task" placeholder="Введите задачу" />
    <Button type="submit" @click="submitTask">Создать</Button>
  </form>
</template>

<script setup lang="ts">
import { Button, Input } from "~/shared/ui";
import { useTaskCreation } from "../model/useTaskCreation";
import type { Task } from "~/entities/task";

const text = ref<string>("");

const { createTask } = useTaskCreation();

const submitTask = (e: Event) => {
  e.preventDefault();

  const task = ref<Task>({
    text: text.value,
    timestamp: Date.now(),
    status: false,
  });

  if (text.value.trim()) {
    createTask(task.value);
  }

  text.value = "";
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
  padding: 0 8px;
}
</style>
