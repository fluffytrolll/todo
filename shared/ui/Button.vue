<!-- src/shared/ui/Button.vue -->
<template>
  <button v-bind="$attrs" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);

const handleClick = (event: Event) => {
  emit("click", event);
};
</script>

<style scoped>
button {
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--c-accent, #00dc82);

  color: var(--c-gray-dark, #0d0d0d);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
</style>
