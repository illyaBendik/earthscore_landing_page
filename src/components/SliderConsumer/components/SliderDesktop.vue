<template>
  <div class="grid grid-cols-6 py-10 px-4">
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
          <div class="relative flex justify-start items-center flex-col h-full">
            <div class="px-16">
              <div
                :style="{ 'background-image': 'url(' + item.img + ')' }"
                class="w-full h-[444px] bg-cover bg-no-repeat bg-center rounded-md"
              ></div>
              <div>
                <p class="pt-8">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="col-span-2 rounded-md relative">
      <div class="absolute left-[-6px] h-full w-[5.5px] bg-black-N40 rounded-md"></div>
      <h3 class="text-[40px] absolute left-0 pl-[64px] leading-[44px]">
        {{ t('homePage.screen5.title') }}
      </h3>
      <swiper
        id="slider-consumer-desktop-pagination"
        class="mt-[120px]"
        @init="onSwiperPagination"
        direction="vertical"
        :slidesPerView="5"
        :speed="500"
        :height="340"
      >
        <swiper-slide v-for="(item, i) in contentList" :key="i" @click="onChangePagination(i)">
          <p
            :class="{
              'text-black-N900 font-medium': swiperInstanceMain
                ? i === swiperInstanceMain.activeIndex
                : false
            }"
            class="uppercase text-xl text-black-N100 transition-all hover:text-black-N900 cursor-pointer pb-0 pl-[64px]"
          >
            {{ item.name }}
          </p>
        </swiper-slide>
      </swiper>

      <div
        class="absolute left-[-5.6px] z-[9999] h-[28px] w-[6px] bg-primary-A300 rounded-md transition-top duration-1000 ease-in-out transition-height"
        :class="{
          'top-[140px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 0,
          'top-[200px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 1,
          'top-[275px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 2,
          'top-[340px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 3,
          'top-[415px]': swiperInstanceMain && swiperInstanceMain.activeIndex === 4
        }"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

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
  display: flex;
  align-items: center;
}
</style>
