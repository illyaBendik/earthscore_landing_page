<template>
  <h3 class="text-[32px] mt-16 mb-8 px-6 md:px-14">EarthScore for Your Business</h3>

  <swiper
    :grabCursor="true"
    @swiper="onSwiperPagination"
    @slideChange="isMain ? () => {} : onChangePagination($event)"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: ['-120%', 0, -500]
      },
      next: {
        shadow: true,
        translate: ['120%', 0, -500]
      }
    }"
    :slides-per-view="1"
  >
    <swiper-slide
      class="text-lg uppercase px-6 md:px-14"
      v-for="(contentItem, contentItemIndex) in contentList"
      :key="contentItemIndex"
    >
      <span>{{ contentItem.name }}</span>
    </swiper-slide>
    <div class="relative w-full mt-12">
      <div class="w-full h-0.5 bg-black-N80">
        <div class="relative">
          <div class="w-16 h-1.5 rounded-sm bg-primary-A300 absolute left-[-0px] top-[-3px]"></div>
        </div>
      </div>
    </div>
  </swiper>

  <swiper
    :grabCursor="true"
    @swiper="onSwiperMain"
    @slideChange="isPagination ? () => {} : onChangeSlide($event)"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: ['-120%', 0, -500]
      },
      next: {
        shadow: true,
        translate: ['120%', 0, -500]
      }
    }"
    :slides-per-view="1.1"
  >
    <swiper-slide
      v-for="(contentItem, contentItemIndex) in contentList"
      :key="contentItemIndex"
      v-slot="{ isActive }"
      ><div class="px-5 pt-5">
        <div
          :style="{ 'background-image': 'url(' + contentItem.img + ')' }"
          class="h-[322px] bg-cover bg-center"
        ></div>
        <p v-if="isActive" class="my-5">
          {{ contentItem.text }}
        </p>
      </div></swiper-slide
    >
  </swiper>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps<{ contentList: { name: string; img: string; className: string; text: string }[] }>()

const swiperInstanceMain = ref()
const swiperInstancePagination = ref()
const isMain = ref(false)
const isPagination = ref(false)

const onSwiperMain = (swiper: any) => {
  swiperInstanceMain.value = swiper
}
const onSwiperPagination = (swiper: any) => {
  swiperInstancePagination.value = swiper
}

const onChangePagination = (e: any) => {
  isPagination.value = true
  const index =
    e.swipeDirection === 'next'
      ? swiperInstanceMain.value.activeIndex + 1
      : swiperInstanceMain.value.activeIndex - 1
  if (index === swiperInstanceMain.value.slides.length) {
    swiperInstanceMain.value.slideToLoop(0)
  } else {
    swiperInstanceMain.value.slideTo(index)
  }
  isPagination.value = false
}

const onChangeSlide = (e: any) => {
  isMain.value = true
  const index =
    e.swipeDirection === 'next'
      ? swiperInstancePagination.value.activeIndex + 1
      : swiperInstancePagination.value.activeIndex - 1

  if (index === swiperInstancePagination.value.slides.length) {
    swiperInstancePagination.value.slideToLoop(0)
  } else {
    swiperInstancePagination.value.slideTo(index)
  }
  isMain.value = false
}
</script>
