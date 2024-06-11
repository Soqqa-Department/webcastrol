<script setup lang="ts">
import { computed, ref } from 'vue'

import initialData from '@/data/products.json'
import ProductCard from '@/components/ProductCard.vue'
import { useWebAppMainButton } from 'vue-tg'
import { useI18n } from "vue-i18n";

const props = defineProps({
    query: {
        required: true,
        type: String
    }
})

const { t } = useI18n();
const selectedProduct = ref()
const mainButton = useWebAppMainButton()

const suggestions = computed(()=>{
  if (props.query){
    return initialData.filter((x)=>(x.name.toLowerCase()).includes(props.query.toLowerCase()))
  }
  return initialData
})

const handleFocus = (item: Object) => {
  selectedProduct.value = item
  mainButton.setMainButtonText(t('buttons.download'))
  mainButton.mainButtonColor.value = "#0EA5E9"
  mainButton.showMainButton()
}

mainButton.onMainButtonClicked(()=>{
  console.log('clicked')
  openPdf('Alpha-SP-Range.pdf')
})

const openPdf = async (filename: string) => {
  const pdfUrl = `https://raw.githubusercontent.com/mmnvb/webcastrol/main/public/pdf/${filename}`

  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = `${new Date().getTime()}_${filename}`
  link.target = '_target';

  // Программа клик по ссылке, чтобы открыть PDF
  document.body.appendChild(link); // необходимо для Firefox
  link.click();
  document.body.removeChild(link);
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