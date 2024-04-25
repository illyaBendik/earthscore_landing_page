<template>
  <div id="slider-team">
    <swiper :allow-touch-move="false" :slides-per-view="1" @init="onSwiperMain">
      <swiper-slide v-for="(user, i) in users" :key="i">
        <SliderItem
          :isFirst="swiperInstanceMain ? swiperInstanceMain.activeIndex === 0 : false"
          :isLast="swiperInstanceMain ? swiperInstanceMain.activeIndex === users.length - 1 : false"
          v-bind="user"
          @click-next="next()"
          @click-prev="prev()"
        ></SliderItem>
      </swiper-slide>
    </swiper>
    <div class="bg-[#E6F2FF80] w-full py-5 lg:py-10 mt-3 lg:mt-10">
      <swiper
        id="slider-team-pagination"
        :slides-per-view="slidesPerView"
        @init="onSwiperPagination"
      >
        <swiper-slide v-for="(user, i) in users" @click="onClikcBtn(i)" :key="i">
          <div class="flex flex-col items-center justify-start min-w-[200px]">
            <div
              :class="{
                'border-2 border-black-N700':
                  swiperInstancePagination && swiperInstancePagination.activeIndex === i
              }"
              class="h-[84px] w-[84px] bg-center bg-cover rounded-full cursor-pointer hover:border-2 hover:border-black-N700"
              :style="{ 'background-image': 'url(' + user.img + ')' }"
            ></div>
            <p class="text-base text-center mt-1.5 mb-0.5">{{ user.name }}</p>
            <p class="text-xs text-center">{{ user.position }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import SliderItem from './components/SliderItem.vue'
import ImgUser1 from '@/assets/img/user-1.png'
import ImgUser2 from '@/assets/img/user-2.png'
import ImgUser3 from '@/assets/img/user-3.png'
import ImgUser4 from '@/assets/img/user-4.png'
import ImgUser5 from '@/assets/img/user-5.png'

const users = [
  {
    name: 'Manuel Mattern',
    position: 'Founder, CEO',
    deskPosition: 'Visionary Management Team',
    img: ImgUser1,
    text: 'Manuel Mattern, visionary & CEO of EarthScore, built and marketed one of the most well-known trust seals in the German e-commerce industry before becoming a successful entrepreneur with outstanding knowledge in technology and product development.'
  },
  {
    name: 'Martin Börner',
    position: 'Industry Expert',
    deskPosition: 'Growth, Clients & Marketing Specialists Team',
    img: ImgUser2,
    text: 'Martin Börner is our Chief Sales Officer & General Manager. We are delighted to have Martin as part of EarthScore. His exceptional career in the German IT and telecom industry, with highly decorated positions such as Deputy Managing Director of Samsung Electronics GmbH and General Manager as well as Sales Director of Motorola, reflect his excellence and speak for themselves. '
  },
  {
    name: 'Prof. Agnieszka Gehringer',
    position: 'Head of Board of Scientific Research',
    deskPosition: 'Sustainability, Applied Science & ESG Excellence Center Team',
    img: ImgUser3,
    text: 'Prof. Dr. Agnieszka Gehringer studied Economics at the Sapienza Università di Roma, Italy. There she was a teaching assistant and academic councilor. Since 2016 Agnieszka has been a private lecturer at the Georg-August University of Göttingen and since 2019 a professor for the subject “Economics” at the Cologne University of Applied Sciences. She also works as a Senior Research Analyst at Flossbach von Storch Research Institute in Cologne. Her research areas include financial market integration, capital market research, innovation economics, technological progress and sustainability measurement. With Agnieszka’s experience and scientific expertise, she leads the scientific advisory board of EarthScore.'
  },
  {
    name: 'Igor Shtelmakh',
    position: 'Technology and AI expert',
    deskPosition: 'Technology & Customer Centric Solutions Team',
    img: ImgUser4,
    text: `Igor Shtelmakh, a seasoned technology leader from Vinnytsia, Ukraine, holds a PhD in Computer Science and a Master's degree in Automatics and Computer Control Systems from Vinnitsia National Technical University. As the Chief Technology Officer at Xcubator GmbH and a Senior Software Developer at Secjur since August 2021, Igor leads technological innovations and software development projects. Previously, he served as Chief Data Officer at Widr Pay in Paris, enhancing data governance and business intelligence. His expertise spans software development, data science, and AI, contributing to his significant role in advancing technology solutions in legal and business environments.`
  },
  {
    name: 'Claus Adams',
    position: 'Senior Advisor',
    deskPosition: 'Growth, Clients & Marketing Specialists',
    img: ImgUser5,
    text: `Claus Adams is a seasoned professional with +20 years in the advertising & marketing industry. His career has been a rewarding journey of learning and leading, from top agencies like Geometry Global, Cheil, VMLY&R, and Ogilvy to my current roles as a founder, investor, advisor and partner in various fields, including Sustainability, Retail Media, Advertising, and DTC/Social Commerce. His experience spans diverse sectors, where he has embraced the complexities of consumer behaviour, commerce, and technology. In his leadership and advisory positions, he is passionate about driving growth, fostering innovation and cooperation in these areas.`
  }
]

const swiperInstanceMain = ref()
const swiperInstancePagination = ref()
const screenWidth = ref(window.innerWidth)

const onSwiperMain = (swiper: any) => {
  swiperInstanceMain.value = swiper
}

const onSwiperPagination = (swiper: any) => {
  swiperInstancePagination.value = swiper
}

const onClikcBtn = (index: number) => {
  swiperInstanceMain.value.activeIndex = index
  swiperInstanceMain.value.slideTo(index)

  swiperInstancePagination.value.activeIndex = index
  swiperInstancePagination.value.slideTo(index)
}

const next = () => {
  if (swiperInstanceMain.value.activeIndex !== users.length - 1) {
    const index = swiperInstanceMain.value.activeIndex + 1

    swiperInstanceMain.value.activeIndex = index
    swiperInstanceMain.value.slideTo(index)

    swiperInstancePagination.value.slideTo(index)
    swiperInstancePagination.value.activeIndex = index
  }
}

const prev = () => {
  if (swiperInstanceMain.value.activeIndex !== 0) {
    const index = swiperInstanceMain.value.activeIndex - 1

    swiperInstanceMain.value.activeIndex = index
    swiperInstanceMain.value.slideTo(index)

    swiperInstancePagination.value.slideTo(index)
    swiperInstancePagination.value.activeIndex = index
  }
}

const isLgAndMore = computed(() => screenWidth.value > 1024)
const isMd = computed(() => screenWidth.value > 768 && screenWidth.value < 1024)

const slidesPerView = computed(() => {
  if (isMd.value) {
    return 3
  }
  if (isLgAndMore.value) {
    return 5
  }
  return 2
})

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
