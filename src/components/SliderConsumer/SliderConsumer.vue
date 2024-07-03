<template>
  <div id="slider-consumer">
    <div class="hidden lg:block">
      <SliderDesktop :contentList="contentList"></SliderDesktop>
    </div>
    <div class="lg:hidden">
      <SliderMobile :contentList="contentList"></SliderMobile>
    </div>
  </div>
</template>
<script setup lang="ts">
import SliderDesktop from './components/SliderDesktop.vue'
import SliderMobile from './components/SliderMobile.vue'
import Img1 from '@/assets/img/B2B_1.png'
import Img2 from '@/assets/img/B2B_2.png'
import Img3 from '@/assets/img/B2B_3.png'
import Img4 from '@/assets/img/B2B_3.png'
import Img5 from '@/assets/img/B2B_5.png'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const contentList = computed(() => [
  {
    name: t('homePage.screen5.item1.title'),
    img: Img1,
    className: 'min-w-[250px]',
    text: t('homePage.screen5.item1.text')
  },
  {
    name: t('homePage.screen5.item2.title'),
    img: Img2,
    className: 'min-w-[250px]',
    text: t('homePage.screen5.item2.text')
  },
  {
    name: t('homePage.screen5.item3.title'),
    img: Img3,
    className: 'min-w-[550px]',
    text: t('homePage.screen5.item3.text')
  },
  {
    name: t('homePage.screen5.item4.title'),
    img: Img4,
    className: 'min-w-[150px]',
    text: t('homePage.screen5.item4.text')
  },
  {
    name: t('homePage.screen5.item5.title'),
    img: Img5,
    className: 'min-w-[180px]',
    text: t('homePage.screen5.item5.text')
  }
])
</script>
