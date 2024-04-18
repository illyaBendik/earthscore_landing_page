<template>
  <SliderItem
    :name="currentItem.name"
    :position="currentItem.position"
    :deskPosition="currentItem.deskPosition"
    :img="currentItem.img"
    :text="currentItem.text"
    :isFirst="activeIndex === 0"
    :isLast="activeIndex === users.length - 1"
    @click-next="next"
    @click-prev="prev"
  ></SliderItem>
  <div class="bg-[#E6F2FF80] w-full px-40 py-10 mt-20 flex justify-center">
    <div class="max-w-7xl gap-32 flex">
      <div class="flex flex-col items-center justify-start" v-for="(user, i) in users" :key="i">
        <div
          class="h-[84px] w-[84px] bg-center bg-cover rounded-full"
          :style="{ 'background-image': 'url(' + user.img + ')' }"
        ></div>
        <p class="text-base mt-1.5 mb-0.5">{{ user.name }}</p>
        <p class="text-xs">{{ user.position }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImgUser1 from '@/assets/img/user-1.png'
import SliderItem from './components/SliderItem.vue'
import { ref, computed } from 'vue'

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
    img: ImgUser1,
    text: 'Martin Börner is our Chief Sales Officer & General Manager. We are delighted to have Martin as part of EarthScore. His exceptional career in the German IT and telecom industry, with highly decorated positions such as Deputy Managing Director of Samsung Electronics GmbH and General Manager as well as Sales Director of Motorola, reflect his excellence and speak for themselves. '
  },
  {
    name: 'Prof. Agnieszka Gehringer',
    position: 'Head of Board of Scientific Research',
    deskPosition: 'Sustainability, Applied Science & ESG Excellence Center Team',
    img: ImgUser1,
    text: 'Prof. Dr. Agnieszka Gehringer studied Economics at the Sapienza Università di Roma, Italy. There she was a teaching assistant and academic councilor. Since 2016 Agnieszka has been a private lecturer at the Georg-August University of Göttingen and since 2019 a professor for the subject “Economics” at the Cologne University of Applied Sciences. She also works as a Senior Research Analyst at Flossbach von Storch Research Institute in Cologne. Her research areas include financial market integration, capital market research, innovation economics, technological progress and sustainability measurement. With Agnieszka’s experience and scientific expertise, she leads the scientific advisory board of EarthScore.'
  },
  {
    name: 'Igor Shtelmakh',
    position: 'Technology and AI expert',
    deskpostion: 'Technology & Customer Centric Solutions Team',
    img: ImgUser1,
    text: `Igor Shtelmakh, a seasoned technology leader from Vinnytsia, Ukraine, holds a PhD in Computer Science and a Master's degree in Automatics and Computer Control Systems from Vinnitsia National Technical University. As the Chief Technology Officer at Xcubator GmbH and a Senior Software Developer at Secjur since August 2021, Igor leads technological innovations and software development projects. Previously, he served as Chief Data Officer at Widr Pay in Paris, enhancing data governance and business intelligence. His expertise spans software development, data science, and AI, contributing to his significant role in advancing technology solutions in legal and business environments.`
  },
  {
    name: 'Claus Adams',
    position: 'Senior Advisor',
    deskpostion: 'Growth, Clients & Marketing Specialists',
    img: ImgUser1,
    text: `Claus Adams is a seasoned professional with +20 years in the advertising & marketing industry. His career has been a rewarding journey of learning and leading, from top agencies like Geometry Global, Cheil, VMLY&R, and Ogilvy to my current roles as a founder, investor, advisor and partner in various fields, including Sustainability, Retail Media, Advertising, and DTC/Social Commerce. His experience spans diverse sectors, where he has embraced the complexities of consumer behaviour, commerce, and technology. In his leadership and advisory positions, he is passionate about driving growth, fostering innovation and cooperation in these areas.`
  }
]

const activeIndex = ref(0)

const currentItem = computed(() => users[activeIndex.value])

const next = () => {
  if (activeIndex.value !== users.length - 1) {
    activeIndex.value = activeIndex.value + 1
  }
}

const prev = () => {
  if (activeIndex.value !== 0) {
    activeIndex.value = activeIndex.value - 1
  }
}
</script>
