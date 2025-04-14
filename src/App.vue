<script setup lang="ts">
import TheGreeter from './components/TheGreeter';
</script>

<template>
  <header>
    <div class="wrapper">
      <TheGreeter message="Foo Bar" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
