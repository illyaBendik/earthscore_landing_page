<template>
  <swiper
    id="slider-possibility"
    @init="init"
    loop
    :slidesPerView="isSmallScreen ? 1 : 1.5"
    :spaceBetween="30"
    :speed="500"
  >
    <swiper-slide v-for="(item, i) in list" :key="i">
      <h2 :class="{ invisible: activeIndex !== i }" class="text-[40px] mb-8 px-6 lg:px-0 lg:pl-6">
        {{ item.title }}
      </h2>
      <div
        class="flex-none h-[583px] bg-cover bg-center rounded-md lg:ml-6 relative"
        :style="{ 'background-image': 'url(' + item.img + ')' }"
      >
        <div
          v-if="screenWidth < 1024 || isLast ? i === activeIndex : i === activeIndex + 1"
          :class="{ 'right-[20px] bottom-[-65px]': isLast, 'right-[55%] bottom-[-65px]': !isLast }"
          class="flex justify-end lg:justify-normal mt-5 gap-5 lg:mt-0 lg:absolute"
        >
          <span v-for="(_, btnIndex) in list" :key="btnIndex">
            <button
              @click="onClikcBtn(btnIndex)"
              v-if="btnIndex !== list.length"
              class="text-xl"
              :class="{
                'text-primary-A300': activeIndex === btnIndex,
                'text-black-N70': activeIndex !== btnIndex
              }"
            >
              0{{ btnIndex + 1 }}
            </button>
          </span>
        </div>
      </div>
      <p
        :class="{ invisible: activeIndex !== i }"
        class="text-[32px] lg:my-7 my-3 px-6 lg:px-0 lg:pl-6"
      >
        {{ item.subtitle }}
      </p>
      <p :class="{ invisible: activeIndex !== i }" class="text-base px-6 lg:px-0 lg:pl-6">
        {{ item.text }}
      </p>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import SliderImg1 from '@/assets/img/slider-1.png'
import SliderImg2 from '@/assets/img/slider-2.png'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const list = [
  {
    title: 'EarthScore for Everyone',
    subtitle: 'Make The Best Decisions For Your Sustainable Consumption',
    text: 'EarthScore app helps you make sustainable consumer decisions conveniently. It analyzes products and services across the board for their sustainability. Our goal is to give you full transparency about the environmental impact of the products and services of your choice. Become a part of our community and help to make our planet a better place for us and future generations! ',
    img: SliderImg1
  },
  {
    title: 'EarthScore for Consumers',
    subtitle: 'Find the Right Products',
    text: 'Do you know how sustainable the products you consume really are? Scan the barcode of your products & learn about their environmental impact. Find suggestions for alternative products easily and improve your overall footprint on our planet with every step you take! ',
    img: SliderImg2
  },
  {
    title: 'EarthScore for Consumers',
    subtitle: 'The EarthScore ',
    text: `The foundation for our EarthScore are our ES SubScores:Climate,Packaging,Water,Product Quality and Social.
Understand how every single dimension of your products & services are rated and how the EarthScore is evaluated. Our SubScores also give you the opportunity to put an emphasis on your personal focus. Do you prefer local products? Is your focus on social & human rights aspects, or are you trying to avoid harmful packaging? The SubScores deliver information on several drill down levels.`,
    img: SliderImg1
  }
]

const swiperInstance = ref()
const activeIndex = ref(0)
const screenWidth = ref(window.innerWidth)

const isSmallScreen = computed(() => screenWidth.value < 1024)

const isLast = computed(() => {
  if (swiperInstance.value) {
    return activeIndex.value === swiperInstance.value.slides.length - 1
  }
  return false
})

const init = (e: any) => {
  swiperInstance.value = e
}

const onClikcBtn = (index: number) => {
  activeIndex.value = index
  swiperInstance.value.slideTo(index)
}

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
