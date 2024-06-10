<script setup lang="ts">
const props = defineProps({
    query: {
        required: true,
        type: String
    }
})

import { computed, ref } from 'vue'

import initialData from '@/data/products.json'
import ProductCard from '@/components/ProductCard.vue'

const selectedProduct = ref()

const suggestions = computed(()=>{
  if (props.query){
    return initialData.filter((x)=>(x.name.toLowerCase()).includes(props.query.toLowerCase()))
  }
  return initialData
})


const handleFocus = (item: Object) => {
  selectedProduct.value = item
}
</script>

<template>
  <div class="flex flex-column align-items-center">
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
        @in-focus="handleFocus(item)"
      />
    </div>
  </div>
</template>