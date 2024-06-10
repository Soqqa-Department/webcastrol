<script setup lang="ts">
const props = defineProps({
    query: {
        required: true,
        type: String
    }
})

import { computed } from 'vue'

import initialData from '@/data/products.json'
import ProductCard from '@/components/ProductCard.vue'

const suggestions = computed(()=>{
  if (props.query){
    return initialData.filter((x)=>(x.name.toLowerCase()).includes(props.query.toLowerCase()))
  }
  return initialData
})

</script>

<template>
  <div class="flex flex-column align-items-center">
    <p>Querry is {{ props.query }}</p>
    <div
      class="w-11 flex flex-wrap justify-content-center gap-5"
      v-auto-animate
    >
      <ProductCard
        v-for="item in suggestions"
        :key="item.id"
        :name="item.name"
        :image="item.image"
        :file-link="item.pdf_link"
      />
    </div>
  </div>
</template>