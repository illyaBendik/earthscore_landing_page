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

import SliderImg1 from '@/assets/img/B2C_1.png'
import SliderImg2 from '@/assets/img/B2C_2.png'
import SliderImg3 from '@/assets/img/B2C_3.png'
import SliderImg4 from '@/assets/img/B2C_4.png'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const list = [
  {
    title: 'EarthScore for Everyone',
    subtitle: 'EarthScore App',
    text: `Elevate your shopping experience with our EarthScore Consumer App! Say goodbye to doubts and hello to confidence! With our app, you'll shop smarter and more sustainable, with profound knowledge at your fingertips. Our EarthScore scoring system ensures you make eco-friendly choices, avoiding greenwashing and reducing rebound effects. But that's not all! Share your lifestyle successes and track your progress seamlessly, just like your favorite fitness apps. Plus, your feedback directly shapes our features, making your experience even better. Shop with certainty, shop with our app.`,
    img: SliderImg1
  },
  {
    title: 'EarthScore for Consumers',
    subtitle: 'EarthScore for You – Confident, Convenient, Sustainable!',
    text: 'Ever wondered about the true sustainability of your purchases? With our app, scan any barcode and discover the environmental impact of your products instantly. From groceries to gadgets, empower yourself to make eco-conscious choices. Easily find alternatives to reduce your footprint and improve your shopping habits. Take control of your impact on the planet—one scan at a time. Start scanning, start changing, start making a difference.',
    img: SliderImg2
  },
  {
    title: 'EarthScore for Consumers',
    subtitle: 'More Advantages for You',
    text: `Explore the depths of sustainability with our ES SubScores— Packaging, Environment, Product Quality, Social, and Health. Understand the overall sustainability of products and services of your choice, and how they contribute to your personal EarthScore.
Tailor your focus with our EarthScore SubScores, whether it's prioritizing local products, focusing on health aspects, or avoiding harmful packaging. Dive deep into each dimension, uncovering layers of insight to shape your choices.`,
    img: SliderImg3
  },
  {
    title: 'EarthScore for Consumers',
    subtitle: 'The Direct Feedback Loop Function',
    text: `What do you think about the products you buy? What would you like to improve in terms of sustainability? Does the production process use too much water? Do you like the design of the "new packaging"? Tell the manufacturers directly what you think about their products and how they can be improved.`,
    img: SliderImg4
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
