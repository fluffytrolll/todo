<template>
  <li class="task-list-item" @click="handleCheck(id)">
    <Checkbox
      :text="text"
      :id="id"
      @click="handleCheck(id)"
      :checked="checked"
    />
    <IconButton @click="handleDelete(id)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="gray"
          d="M14.202 9.985h-1.33v5.522h1.33V9.985Zm-2.74 0h-1.33v5.522h1.33V9.985Z"
        />
        <path
          fill="gray"
          d="M18.478 7.167a.644.644 0 0 0-.46-.605.62.62 0 0 0-.184-.045h-3.547a2.144 2.144 0 0 0-4.1 0H6.638a.641.641 0 0 0-.172.027h-.015a.641.641 0 0 0 .09 1.246l.711 9.743A1.512 1.512 0 0 0 8.683 19h7.104a1.512 1.512 0 0 0 1.433-1.467l.708-9.734a.638.638 0 0 0 .55-.632Zm-6.242-.952a.937.937 0 0 1 .69.302h-1.379a.932.932 0 0 1 .69-.302Zm3.55 11.575H8.684c-.081 0-.208-.133-.223-.344L7.758 7.81h8.957l-.701 9.635c-.016.211-.143.344-.227.344Z"
        />
      </svg>
    </IconButton>
  </li>
</template>

<script setup lang="ts">
import { useTaskStore } from "~/entities/task";
import { Checkbox, IconButton } from "~/shared/ui";

const props = defineProps<{
  id: number;
  text: string;
  checked: boolean;
}>();

const taskStore = useTaskStore();

const handleCheck = (id: number) => {
  const index = taskStore.tasks.findIndex((task) => task.timestamp === id);
  taskStore.tasks[index].status = !taskStore.tasks[index].status;
};

const handleDelete = (id: number) => {
  const index = taskStore.tasks.findIndex((task) => task.timestamp === id);
  taskStore.tasks.splice(index, 1);
};
</script>

<style scoped lang="scss">
.task-list-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--c-gray-black, #333);
  background: var(--c-gray, #262626);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
}
</style>
