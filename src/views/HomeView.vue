<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <main class="text-white">
    <h2>{{ $t('nav.header') }}</h2>
    <Button :label="$t('nav.buttons.search')" />
  </main>
</template>

<style scoped>
</style>