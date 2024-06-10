<script setup lang="ts">
import Button from 'primevue/button';


</script>

<template>
  <Button
    :label="$t('buttons.download')"
    class="button"
    :pt="{
      root: {class: 'border-none border-noround'}
    }"
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
}

</style>