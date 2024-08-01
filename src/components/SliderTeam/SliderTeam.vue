<template>
  <div>
    <swiper
      :key="Number(isMobileScreen)"
      :allowTouchMove="isMobileScreen"
      :slides-per-view="1"
      @init="onSwiperMain"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(user, i) in users" :key="i" v-slot="{ isActive }">
        <SliderItem
          :isActive="isActive"
          :isFirst="swiperInstanceMain ? swiperInstanceMain.activeIndex === 0 : false"
          :isLast="swiperInstanceMain ? swiperInstanceMain.activeIndex === users.length - 1 : false"
          v-bind="user"
          @click-next="next()"
          @click-prev="prev()"
        ></SliderItem>
      </swiper-slide>
    </swiper>
    <div class="bg-[#E6F2FF80] w-full py-5 lg:py-10 mt-10">
      <swiper
        id="slider-team-pagination"
        :slides-per-view="slidesPerView"
        @init="onSwiperPagination"
      >
        <swiper-slide v-for="(user, i) in users" @click="onClikcBtn(i)" :key="i">
          <div class="flex flex-col items-center justify-start min-w-[200px]">
            <div
              :class="{
                'border-2 border-black-N700': slideIndex === i
              }"
              class="h-[84px] w-[84px] bg-center bg-cover rounded-full cursor-pointer hover:border-[1.2px] hover:border-black-N700"
              :style="{ 'background-image': 'url(' + user.img + ')' }"
            ></div>
            <p class="text-base text-center mt-1.5 mb-0.5">
              {{ user.name }}
            </p>
            <p class="text-xs text-center">{{ user.position }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import SliderItem from './components/SliderItem.vue'
import ImgUser1 from '@/assets/img/user-1.png'
import ImgUser2 from '@/assets/img/user-2.png'
import ImgUser3 from '@/assets/img/user-3.png'
import ImgUser4 from '@/assets/img/user-4.png'
import ImgUser5 from '@/assets/img/user-5.png'
import ImgUser6 from '@/assets/img/user-6.png'

import { useI18n } from 'vue-i18n'
import { useWidth } from '@/composables/useWidth'

const { t } = useI18n({ useScope: 'global' })

const users = computed(() => [
  {
    name: t('homePage.screen8.item1.name'),
    position: t('homePage.screen8.item1.position'),
    deskPosition: t('homePage.screen8.item1.deskPosition'),
    img: ImgUser1,
    text: t('homePage.screen8.item1.text')
  },
  {
    name: t('homePage.screen8.item2.name'),
    position: t('homePage.screen8.item2.position'),
    deskPosition: t('homePage.screen8.item2.deskPosition'),
    img: ImgUser2,
    text: t('homePage.screen8.item2.text')
  },
  {
    name: t('homePage.screen8.item3.name'),
    position: t('homePage.screen8.item3.position'),
    deskPosition: t('homePage.screen8.item3.deskPosition'),
    img: ImgUser3,
    text: t('homePage.screen8.item3.text')
  },
  {
    name: t('homePage.screen8.item4.name'),
    position: t('homePage.screen8.item4.position'),
    deskPosition: t('homePage.screen8.item4.deskPosition'),
    img: ImgUser4,
    text: t('homePage.screen8.item4.text')
  },
  {
    name: t('homePage.screen8.item5.name'),
    position: t('homePage.screen8.item5.position'),
    deskPosition: t('homePage.screen8.item5.deskPosition'),
    img: ImgUser5,
    text: t('homePage.screen8.item5.text')
  },
  {
    name: t('homePage.screen8.item6.name'),
    position: t('homePage.screen8.item6.position'),
    deskPosition: t('homePage.screen8.item6.deskPosition'),
    img: ImgUser6,
    text: t('homePage.screen8.item6.text')
  }
])

const swiperInstanceMain = ref()
const swiperInstancePagination = ref()
const slideIndex = ref(0)
const { screenWidth } = useWidth()

const onSwiperMain = (swiper: any) => {
  swiperInstanceMain.value = swiper
}

const onSwiperPagination = (swiper: any) => {
  swiperInstancePagination.value = swiper
}

const onClikcBtn = (index: number) => {
  swiperInstanceMain.value.slideTo(index)
  swiperInstancePagination.value.slideTo(index)
  slideIndex.value = index
}

const onSlideChange = (e: { activeIndex: number }) => {
  const index = e.activeIndex
  swiperInstancePagination.value.slideTo(index)
  slideIndex.value = index
}

const next = () => {
  if (swiperInstanceMain.value.activeIndex !== users.value.length - 1) {
    const index = swiperInstanceMain.value.activeIndex + 1
    swiperInstanceMain.value.slideTo(index)
    swiperInstancePagination.value.slideTo(index)
    slideIndex.value = index
  }
}

const prev = () => {
  if (swiperInstanceMain.value.activeIndex !== 0) {
    const index = swiperInstanceMain.value.activeIndex - 1
    swiperInstanceMain.value.slideTo(index)
    swiperInstancePagination.value.slideTo(index)
    slideIndex.value = index
  }
}

const isLgAndMore = computed(() => screenWidth.value > 1024)
const isMd = computed(() => screenWidth.value > 768 && screenWidth.value < 1024)
const isMobileScreen = computed(() => screenWidth.value < 640)

const slidesPerView = computed(() => {
  if (isMd.value) {
    return 3
  }
  if (isLgAndMore.value) {
    return 6
  }
  return 2
})
</script>
<style>
#slider-team-pagination .swiper-wrapper {
  max-height: 234px;
  display: flex;
  align-items: center;
}

#slider-team-pagination .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
