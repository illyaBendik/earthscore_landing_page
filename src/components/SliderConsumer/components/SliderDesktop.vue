<template>
  <div class="grid grid-cols-6 gap-10 py-10 px-4">
    <div class="col-span-4">
      <swiper
        @init="onSwiperMain"
        @slideChange="onChangeSlide($event)"
        direction="vertical"
        :slidesPerView="1"
        :speed="500"
        id="slider-consumer-desktop-main"
      >
        <swiper-slide v-for="(item, i) in contentList" :key="i">
          <div class="relative flex justify-items items-center flex-col justify-center h-full">
            <div class="max-w-[760px]">
              <div
                :style="{ 'background-image': 'url(' + item.img + ')' }"
                class="w-full h-[414px] bg-cover bg-center rounded-md"
              ></div>
              <div>
                <p class="pt-10">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="col-span-2 relative border-l border-l-black-N80">
      <h3 class="text-[40px] ml-5 absolute left-0">EarthScore for Your Business</h3>
      <swiper
        id="slider-consumer-desktop-pagination"
        class="mt-36"
        @init="onSwiperPagination"
        direction="vertical"
        :slidesPerView="5"
        :speed="500"
        :height="450"
      >
        <swiper-slide v-for="(item, i) in contentList" :key="i" @click="onChangePagination(i)">
          <p
            :class="{
              'text-black-N900': swiperInstanceMain ? i === swiperInstanceMain.activeIndex : false
            }"
            class="ml-5 uppercase text-xl text-black-N100 transition-all hover:text-black-N900 cursor-pointer pb-0"
          >
            {{ item.name }}
          </p>
        </swiper-slide>
      </swiper>

      <div
        class="absolute left-0 z-[9999] h-[28px] w-[4px] bg-primary-A300 transition-top duration-1000 ease-in-out transition-height"
        :class="{
          'top-[145px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 0,
          'top-[235px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 1,
          'top-[325px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 2,
          'top-[415px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 3,
          'top-[505px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 4
        }"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

defineProps<{ contentList: { name: string; img: string; className: string; text: string }[] }>()

const swiperInstanceMain = ref()
const swiperInstancePagination = ref()

const onSwiperMain = (swiper: any) => {
  swiperInstanceMain.value = swiper
}

const onSwiperPagination = (swiper: any) => {
  swiperInstancePagination.value = swiper
}

const onChangePagination = (index: number) => {
  swiperInstanceMain.value.activeIndex = index
  swiperInstanceMain.value.slideTo(index)
}

const onChangeSlide = (e: any) => {
  const index =
    e.swipeDirection === 'next'
      ? swiperInstancePagination.value.activeIndex + 1
      : swiperInstancePagination.value.activeIndex - 1

  swiperInstancePagination.value.activeIndex = index
  swiperInstancePagination.value.slideTo(index)
}
</script>
<style>
#slider-consumer-desktop-main .swiper-wrapper {
  height: 671px;
  margin: 0 auto;
}

#slider-consumer-desktop-pagination .swiper-slide {
  height: 100px;
}
</style>
