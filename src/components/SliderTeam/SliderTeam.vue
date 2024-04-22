<template>
  <swiper id="slider-team" @init="init" :pagination="false" :modules="modules">
    <swiper-slide v-for="(user, i) in users" :key="i">
      <SliderItem
        :isFirst="activeIndex === 0"
        :isLast="activeIndex === users.length - 1"
        v-bind="user"
        @click-next="next()"
        @click-prev="prev()"
      ></SliderItem>
    </swiper-slide>
  </swiper>
  <ListItems :active-index="activeIndex" :users="users" @on-click-item="onClikcBtn"></ListItems>
</template>
<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SliderItem from './components/SliderItem.vue'
import ImgUser1 from '@/assets/img/user-1.png'
import ImgUser2 from '@/assets/img/user-2.png'
import ImgUser3 from '@/assets/img/user-3.png'
import ImgUser4 from '@/assets/img/user-4.png'
import ImgUser5 from '@/assets/img/user-5.png'
import ListItems from './components/ListItems.vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Pagination]

const swiperInstance = ref()
const activeIndex = ref(0)

const init = (e: any) => {
  swiperInstance.value = e
}

const onClikcBtn = (index: number) => {
  activeIndex.value = index
  swiperInstance.value.slideTo(index)
}

const next = () => {
  if (activeIndex.value !== users.length - 1) {
    activeIndex.value = activeIndex.value + 1
    swiperInstance.value.slideTo(activeIndex.value)
  }
}

const prev = () => {
  if (activeIndex.value !== 0) {
    activeIndex.value = activeIndex.value - 1
    swiperInstance.value.slideTo(activeIndex.value)
  }
}

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
</script>
