<template>
  <header class="header">
    <h1 class="header__title">To<strong>Do</strong></h1>
    <TaskCreationForm />
  </header>
</template>

<script setup lang="ts">
import { TaskCreationForm } from '~/features/taskCreation';
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: var(--c-primary);
}

.header__title {
  color: var(--c-white, #fff);
  font-family: Inter, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  strong {
    font-weight: 700;
    color: var(--c-accent, #00dc82);
  }
}
</style>
