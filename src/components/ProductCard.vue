<script setup lang="ts">
const props = defineProps({
    name: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    fileLink: {
        required: true,
        type: String
    }
})

import { ref } from 'vue'
import { publicUrl } from '@/consts';
import Image from 'primevue/image';

const product = ref()
const emit = defineEmits(['inFocus'])

const handleClick = () => {
    emit('inFocus')
}
</script>

<template>
  <div>
    <div
      class="card border-2 w-17rem h-17rem flex flex-column 
             align-items-center jusitfy-content-between
             gap-3 py-2 overflow-hidden
             border-round
             border-green-800
             hover:border-green-600
             "
      ref="product"
      @click="handleClick"
      aria-label="product"
    >
      <Image
        :src="`${publicUrl}/images/${props.image}`"
        :alt="`img_${name}`"
        class="w-10 h-full overflow-hidden text-center mt-2"
        aria-label="product"
        preview
        image-style="object-fit: contain; height:90%; width: 90%;"
        image-class="my-2 center"
        :pt="{
          button: {'aria-label': 'product', 
                   'class': 'border-round', 
                   'style': 'background-color: rgba(0,0,0,0.1)'},
          icon: {'aria-label': 'product'}
        }"
      />

      <p
        class="m-0 text-center w-10 mb-2" 
        aria-label="product"
      >
        {{ props.name }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card:hover{
    transition: .3s ease;
}

.card:hover .p-image{
  transform: scale(1.05);
  transition: .3s ease;
}
</style>  