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

</script>

<template>
  <div
    class="w-full flex flex-column align-items-center text-white gap-5"
    @click="handleClick"
  >
    <nav>
      <h2>{{ $t('nav.header') }}</h2>
      <IconField
        icon-position="left"
      >
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="searchQuery"
          :placeholder="$t('nav.buttons.search')"
          class="w-20rem"
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