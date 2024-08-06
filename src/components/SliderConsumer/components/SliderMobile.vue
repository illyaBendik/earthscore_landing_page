<template>
  <h3 class="headline mt-16 mb-8 px-6 md:px-14">
    {{ t('homePage.screen5.title') }}
  </h3>

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
    :auto-height="true"
  >
    <swiper-slide
      class="uppercase px-6 md:px-14"
      v-for="(contentItem, contentItemIndex) in contentList"
      :key="contentItemIndex"
    >
      <span class="font-medium text-[18px] md:text-xl leading-[21px] h-[46px] block">{{
        contentItem.name
      }}</span>
    </swiper-slide>
    <div class="relative w-full mt-[32px] px-[0.5]">
      <div class="w-full h-1.5 bg-black-N40 rounded-md">
        <div class="relative">
          <div
            class="w-[75px] h-1.5 rounded-md bg-primary-A300 absolute top-[0px]"
            :class="{
              'left-[0px]': swiperInstancePagination && swiperInstancePagination.activeIndex === 0,
              'left-[20%]': swiperInstancePagination && swiperInstancePagination.activeIndex === 1,
              'left-[45%]': swiperInstancePagination && swiperInstancePagination.activeIndex === 2,
              'left-[70%]': swiperInstancePagination && swiperInstancePagination.activeIndex === 3,
              'right-0': swiperInstancePagination && swiperInstancePagination.activeIndex === 4
            }"
          ></div>
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
    :slides-per-view="1"
  >
    <swiper-slide
      v-for="(contentItem, contentItemIndex) in contentList"
      :key="contentItemIndex"
      v-slot="{ isActive }"
      ><div class="pl-6 pt-5">
        <div
          :style="{ 'background-image': 'url(' + contentItem.imgMobi + ')' }"
          class="h-[322px] bg-contain bg-center bg-no-repeat rounded-md"
        ></div>
        <p v-if="isActive" class="my-5 text-base">{{ contentItem.text }}</p>
      </div></swiper-slide
    >
  </swiper>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
defineProps<{ contentList: { name: string; imgMobi: string; className: string; text: string }[] }>()

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
