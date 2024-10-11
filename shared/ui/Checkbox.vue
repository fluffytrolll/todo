<template>
  <input
    type="checkbox"
    :name="`task-checkbox-${id}`"
    :id="`task-checkbox-${id}`"
    :checked="checked"
    @click="handleClick"
    hide
  />
  <label class="checkbox" :for="`task-checkbox-${id}`">
    <div></div>
    {{ text }}
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number;
  text: string;
  checked: boolean;
}>();

const emit = defineEmits(["click"]);

const handleClick = (event: Event) => {
  emit("click", event);
};
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 15px;

  color: var(--c-blue, #e1e7ef);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.checkbox > div {
  width: 18px;
  height: 18px;
  border: 2px solid var(--c-accent, #00dc82);
  border-radius: 18px;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='7' fill='none' viewBox='0 0 10 7'%3E%3Cpath fill='%23333' d='M8.43.342 4.1 4.674 1.616 2.192l-.836.836L4.1 6.346l5.167-5.168-.835-.836Z'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: 10px 7px;
  background-position: center;
  transition: background-color ease-in-out 0.2s;
}

input[type="checkbox"]:checked + .checkbox > div {
  background-color: var(--c-accent, #00dc82);
}

input[type="checkbox"]:checked + .checkbox {
  text-decoration: line-through;
}

input[type="checkbox"]:checked + .checkbox,
input[type="checkbox"]:focus-visible + .checkbox {
  color: var(--c-accent, #00dc82);
}
</style>
