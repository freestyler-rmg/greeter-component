<script setup lang="ts">
import { ref, type Ref } from 'vue';

interface Props {
  message?: string;
}

const { message = 'Hello World' } = defineProps<Props>();

const showText: Ref<boolean> = ref(false);

function handleClick(): void {
  showText.value = !showText.value;
}
</script>

<template>
  <div class="greeter-wrapper">
    <button @click="handleClick">Click Me</button>
    <p v-if="showText">{{ message }}</p>
  </div>
</template>

<style scoped>
.greeter-wrapper button {
  padding: 10px 16px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
