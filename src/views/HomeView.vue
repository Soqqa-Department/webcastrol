<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

import { ref } from 'vue'

import DataContainer from '@/components/DataContainer.vue';
import { useWebAppMainButton } from 'vue-tg'

const searchQuery = ref('')
const productContainer = ref()
const mainButton = useWebAppMainButton()

const handleClick = (event: any) => {
  if(event.target.ariaLabel != 'product'){
    mainButton.hideMainButton()
  }
}

const handleFocus = () => {
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
}); 
}

</script>

<template>
  <div
    class="w-full flex flex-column align-items-center text-white gap-5"
    @click="handleClick"
  >
    <nav class="w-10 flex align-items-center justify-content-around mt-3">
      <img
        src="/log.webp"
        alt="logo"
        class="h-3rem"
      >

      <IconField
        icon-position="left"
        class="w-9 overflow-hidden"
      >
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="searchQuery"
          :placeholder="$t('nav.buttons.search')"
          @focus="handleFocus"
          class="w-12 overflow-hidden"
        />
      </IconField>
    </nav>



    <div ref="productContainer">
      <DataContainer
        :query="searchQuery"
      />
    </div>
  </div>
</template>

<style scoped>
</style>