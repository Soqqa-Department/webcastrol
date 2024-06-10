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

</script>

<template>
  <div
    class="border-1 w-9rem flex flex-column 
           align-items-center jusitfy-content-between
           gap-3 py-2 overflow-hidden
           border-round
           "
  >
    <!-- photo container -->
    <div class="w-8rem h-10rem overflow-hidden">
      <img
        :src="`/images/${props.image}`"
        :alt="`img_${name}`"
        class="productImage"
      >
    </div>
    <p class="m-0">
      {{ props.name }}
    </p>
  </div>
</template>

<style scoped>
.productImage{
    object-fit: contain;
    width: 100%;
    height: 100%;
}

</style>