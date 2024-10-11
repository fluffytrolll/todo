<!-- src/shared/ui/Button.vue -->
<template>
  <button v-bind="$attrs" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);

const handleClick = (event: Event) => {
  event.stopPropagation();
  emit("click", event);
};
</script>

<style scoped>
button {
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  background: transparent;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 24px;
    background-color: var(--c-gray-light, #808080);
    opacity: 0.2;
    transform: scale(0);
    height: inherit;
    width: inherit;

    transition: transform ease 0.2s;
  }
}

button:hover {
  &::before {
    transform: scale(1);
  }
}
</style>
