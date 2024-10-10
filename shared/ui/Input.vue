<template>
  <input v-bind="$attrs" :value="modelValue" @input="updateValue" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style scoped lang="scss">
input {
  display: flex;
  padding: 16px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--c-gray-dark, #0d0d0d);
  background: var(--c-gray, #020420);
  color: var(--c-gray-light, #808080);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  width: 100%;
}
</style>
