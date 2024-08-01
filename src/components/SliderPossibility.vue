<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 z-20 py-12 md:py-16">
    <h2 class="headline mb-8 pl-6 md:pl-16">
      {{ t('homePage.screen7.title') }}
    </h2>
    <div class="col-span-3">
      <swiper
        id="slider-possibility"
        @init="init"
        :spaceBetween="30"
        :key="Number(isMobileScreen)"
        :allowTouchMove="isMobileScreen"
        :speed="500"
        :slidesPerView="
          isSmallScreen || (swiperInstance && swiperInstance.activeIndex == 3) ? 1 : 1.1
        "
      >
        <swiper-slide v-for="(item, i) in list" :key="i" v-slot="{ isActive }">
          <div class="grid grid-cols-1 lg:grid-cols-3 z-20">
            <div class="w-full col-span-3 relative">
              <div
                :style="{ 'background-image': 'url(' + item.img + ')' }"
                class="hidden md:block h-[377px] lg:h-[390px] bg-cover bg-center rounded-md"
              ></div>
              <div
                :style="{ 'background-image': 'url(' + item.imgMob + ')' }"
                class="h-[377px] bg-cover bg-no-repeat bg-center rounded-md md:hidden"
              ></div>
              <span class="invisible h-0">{{ swiperInstance && swiperInstance.activeIndex }}</span>
              <div
                v-if="swiperInstance"
                :key="swiperInstance.activeIndex"
                class="fixed right-[10px] mt-5 space-x-5"
              >
                <span v-for="(_, btnIndex) in list" :key="btnIndex">
                  <button
                    @click="onClikcBtn(btnIndex)"
                    v-if="isMobileScreen ? btnIndex !== list.length : btnIndex !== list.length - 1"
                    class="text-xl"
                    :class="{
                      'text-primary-A300 font-medium': swiperInstance.activeIndex === btnIndex,
                      'text-black-N70 transition-all hover:text-black-N900':
                        swiperInstance.activeIndex !== btnIndex
                    }"
                  >
                    0{{ btnIndex + 1 }}
                  </button>
                </span>
              </div>
              <p
                :class="{ invisible: !isActive }"
                class="text-[32px] font-light lg:my-4 mb-3 mt-16 lg:mt-12 px-6 lg:px-0"
              >
                {{ item.title }}
              </p>
              <p :class="{ invisible: !isActive }" class="text-base px-6 lg:px-0">
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
import SliderImgMob1 from '@/assets/img/b2c-mob-1.png'
import SliderImgMob2 from '@/assets/img/b2c-mob-2.png'
import SliderImgMob3 from '@/assets/img/b2c-mob-3.png'
import SliderImgMob4 from '@/assets/img/b2c-mob-4.png'

import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const list = computed(() => {
  const items = [
    {
      title: t('homePage.screen7.item1.title'),
      text: t('homePage.screen7.item1.text'),
      img: SliderImg1,
      imgMob: SliderImgMob1
    },
    {
      title: t('homePage.screen7.item2.title'),
      text: t('homePage.screen7.item2.text'),
      img: SliderImg2,
      imgMob: SliderImgMob2
    },
    {
      title: t('homePage.screen7.item3.title'),
      text: t('homePage.screen7.item3.text'),
      img: SliderImg3,
      imgMob: SliderImgMob3
    },
    {
      title: t('homePage.screen7.item4.title'),
      text: t('homePage.screen7.item4.text'),
      img: SliderImg4,
      imgMob: SliderImgMob4
    }
  ]

  if (!isMobileScreen.value) {
    items.push({
      title: t('homePage.screen7.item1.title'),
      text: t('homePage.screen7.item1.text'),
      img: SliderImg1,
      imgMob: SliderImgMob1
    })
  }

  return items
})

const swiperInstance = ref()
const activeIndex = ref(0)
const screenWidth = ref(window.innerWidth)

const isSmallScreen = computed(() => screenWidth.value < 1024)
const isMobileScreen = computed(() => screenWidth.value < 640)

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
