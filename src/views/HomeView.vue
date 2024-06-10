<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

import {ref} from 'vue'

import DataContainer from '@/components/DataContainer.vue';

const searchQuery = ref('')

</script>

<template>
  <div class="w-full flex flex-column align-items-center text-white gap-3">
    <nav>
      <h2>{{ $t('nav.header') }}</h2>
      <IconField icon-position="left">
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="searchQuery"
          :placeholder="$t('nav.buttons.search')"
        />
      </IconField>
    </nav>

    <DataContainer :query="searchQuery" />
  </div>
</template>

<style scoped>
</style>