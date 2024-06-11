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
             border-primary
             hover:border-white
             "
      ref="product"
      @click="handleClick"
      aria-label="product"
    >
      <!-- photo container -->
      <div class="w-9 overflow-hidden text-center pt-2">
        <img
          :src="`/images/${props.image}`"
          :alt="`img_${name}`"
          class="productImage"
          aria-label="product"
        >
      </div>
      <p
        class="m-0 text-center w-10"
        aria-label="product"
      >
        {{ props.name }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.productImage{
    object-fit: contain;
    width: 90%;
    height: 90%;
}

.card:hover{
    transition: .3s ease;
    border-color: white;
}

.card:hover .productImage{
  transform: scale(1.05);
  transition: .3s ease;
}

</style>