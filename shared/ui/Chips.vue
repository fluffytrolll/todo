<template>
  <span class="chips" :class="classNames">
    {{ title || "Всего" }}
    <i>{{ count || 0 }}</i>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  classNames?: string[];
  count?: number;
}>();
</script>

<style scoped lang="scss">
.chips {
  color: var(--c-gray, #808080);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  i {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    border-radius: 999px;
    background: var(--c-gray-black, #333);
    color: var(--c-gray-light, #808080);
    font-family: Interб sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

.chips.accent {
  color: var(--c-accent, #00dc82);
}

.chips.secondary {
  color: var(--c-white, #fff);
}
</style>
