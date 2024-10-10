<script setup lang="ts">
import { TaskHeader } from "~/widgets/taskHeader";
</script>

<template>
  <TaskHeader />
  <main class="main">
    <slot></slot>
  </main>
</template>
