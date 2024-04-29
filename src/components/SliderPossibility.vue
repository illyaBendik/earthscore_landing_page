<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 z-20">
    <h2 class="text-[40px] mb-8 px-3 xl:px-10">EarthScore for Everyone</h2>
    <div class="col-span-3">
      <swiper
        id="slider-possibility"
        @init="init"
        :spaceBetween="30"
        :allow-touch-move="false"
        :slidesPerView="isSmallScreen ? 1 : 1.1"
        :speed="500"
      >
        <swiper-slide v-for="(item, i) in list" :key="i" v-slot="{ isActive }">
          <div class="grid grid-cols-1 lg:grid-cols-3 z-20">
            <div class="w-full col-span-3 relative">
              <div
                :style="{ 'background-image': 'url(' + item.img + ')' }"
                class="h-[377px] lg:h-[471px] bg-cover bg-center rounded-md"
              ></div>
              <div v-if="i === activeIndex" class="fixed right-[10px] mt-5 space-x-5">
                <span v-for="(_, btnIndex) in list" :key="btnIndex">
                  <button
                    @click="onClikcBtn(btnIndex)"
                    v-if="btnIndex !== list.length - 1"
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
              <p
                :class="{ invisible: !isActive }"
                class="text-[32px] lg:my-7 my-3 mt-12 lg:mt-12 px-4 lg:px-0"
              >
                {{ item.title }}
              </p>
              <p :class="{ invisible: !isActive }" class="text-base px-4 lg:px-0">
                {{ item.text }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
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
    title: 'EarthScore App',
    text: `Elevate your shopping experience with our EarthScore Consumer App! Say goodbye to doubts and hello to confidence! With our app, you'll shop smarter and more sustainable, with profound knowledge at your fingertips. Our EarthScore scoring system ensures you make eco-friendly choices, avoiding greenwashing and reducing rebound effects. But that's not all! Share your lifestyle successes and track your progress seamlessly, just like your favorite fitness apps. Plus, your feedback directly shapes our features, making your experience even better. Shop with certainty, shop with our app.`,
    img: SliderImg1
  },
  {
    title: 'EarthScore for You – Confident, Convenient, Sustainable!',
    text: 'Ever wondered about the true sustainability of your purchases? With our app, scan any barcode and discover the environmental impact of your products instantly. From groceries to gadgets, empower yourself to make eco-conscious choices. Easily find alternatives to reduce your footprint and improve your shopping habits. Take control of your impact on the planet—one scan at a time. Start scanning, start changing, start making a difference.',
    img: SliderImg2
  },
  {
    title: 'More Advantages for You',
    text: `Explore the depths of sustainability with our ES SubScores— Packaging, Environment, Product Quality, Social, and Health. Understand the overall sustainability of products and services of your choice, and how they contribute to your personal EarthScore.
Tailor your focus with our EarthScore SubScores, whether it's prioritizing local products, focusing on health aspects, or avoiding harmful packaging. Dive deep into each dimension, uncovering layers of insight to shape your choices.`,
    img: SliderImg3
  },
  {
    title: 'The Direct Feedback Loop Function',
    text: `What do you think about the products you buy? What would you like to improve in terms of sustainability? Does the production process use too much water? Do you like the design of the "new packaging"? Tell the manufacturers directly what you think about their products and how they can be improved.`,
    img: SliderImg4
  },
  {
    title: 'EarthScore App',
    text: `Elevate your shopping experience with our EarthScore Consumer App! Say goodbye to doubts and hello to confidence! With our app, you'll shop smarter and more sustainable, with profound knowledge at your fingertips. Our EarthScore scoring system ensures you make eco-friendly choices, avoiding greenwashing and reducing rebound effects. But that's not all! Share your lifestyle successes and track your progress seamlessly, just like your favorite fitness apps. Plus, your feedback directly shapes our features, making your experience even better. Shop with certainty, shop with our app.`,
    img: SliderImg1
  }
]

const swiperInstance = ref()
const activeIndex = ref(0)
const screenWidth = ref(window.innerWidth)

const isSmallScreen = computed(() => screenWidth.value < 1024)

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
