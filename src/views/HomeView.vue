<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

import { ref } from 'vue'

import DataContainer from '@/components/DataContainer.vue';
import DownloadButton from "@/components/DownloadButton.vue"

const searchQuery = ref('')
const downloadLink = ref('')
const productContainer = ref()

const handleSelect = (link: string) => {
  downloadLink.value = link
}
</script>

<template>
  <div
    class="w-full flex flex-column align-items-center text-white gap-5"
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
        @item-selected="handleSelect"
      />
    </div>
  </div>

  <DownloadButton
    v-if="downloadLink"
    :link="downloadLink"
  />
</template>

<style scoped>
</style>