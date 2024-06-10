<script setup lang="ts">
import Button from 'primevue/button';

defineProps({
  link: {
    required: true,
    type: String
  }
})

</script>

<template>
  <Button
    :label="$t('buttons.download')"
    class="button"
    severity="info"
    :pt="{
      root: {class: 'border-none border-noround'}
    }"
    @click="console.log(link)"
  />
</template>

<style scoped>
.button{
    position: fixed;
    width: 100%;
    bottom: 0;
    margin: 0;
    left:0;
    height: 3rem;
    font-family: "Inter var", sans-serif;
    font-weight: bold;
    z-index: 100;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>