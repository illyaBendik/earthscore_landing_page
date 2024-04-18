<template>
  <div class="w-full h-screen">
    <div class="grid flex-nowrap gap-5 overflow-x-auto grid-cols-3 px-14 pt-5">
      <div
        v-for="(item, i) in list"
        :key="i"
        :class="{
          'col-span-2': i === activeIndex,
          hidden: i !== activeIndex && i !== activeIndex + 1
        }"
      >
        <h2 :class="{ invisible: activeIndex !== i }" class="mb-10 text-[40px] min-h-[60px]">
          {{ item.title }}
        </h2>
        <div
          :class="{
            'bg-cover bg-center': i === activeIndex,
            'bg-left bg-cover': i !== activeIndex
          }"
          class="flex-none h-[583px]"
          :style="{ 'background-image': 'url(' + item.img + ')' }"
        ></div>
        <div class="flex justify-end pt-12 pr-12" v-if="i === activeIndex + 1">
          <div class="flex gap-5">
            <span v-for="(_, btnIndex) in list" :key="btnIndex">
              <button
                @click="setActiveIndex(btnIndex)"
                v-if="btnIndex !== list.length - 1"
                class="text-xl"
                :class="{
                  'text-primary-A300': activeIndex === btnIndex,
                  'text-black-N70': activeIndex !== btnIndex
                }"
              >
                {{ btnIndex + 1 }}
              </button>
            </span>
          </div>
        </div>

        <p :class="{ invisible: activeIndex !== i }" class="text-[32px] my-7">
          {{ item.subtitle }}
        </p>
        <p :class="{ invisible: activeIndex !== i }" class="text-base">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SliderImg1 from '@/assets/img/slider-1.png'
import SliderImg2 from '@/assets/img/slider-2.png'
import { ref } from 'vue'

const list = [
  {
    title: 'EarthScore for Everyone',
    subtitle: 'Make The Best Decisions For Your Sustainable Consumption',
    text: 'EarthScore app helps you make sustainable consumer decisions conveniently. It analyzes products and services across the board for their sustainability. Our goal is to give you full transparency about the environmental impact of the products and services of your choice. Become a part of our community and help to make our planet a better place for us and future generations! ',
    img: SliderImg1
  },
  {
    title: 'EarthScore for Consumers',
    subtitle: 'Find the Right Products',
    text: 'Do you know how sustainable the products you consume really are? Scan the barcode of your products & learn about their environmental impact. Find suggestions for alternative products easily and improve your overall footprint on our planet with every step you take! ',
    img: SliderImg2
  },
  {
    title: 'EarthScore for Consumers',
    subtitle: 'The EarthScore ',
    text: `The foundation for our EarthScore are our ES SubScores:Climate,Packaging,Water,Product Quality and Social.
Understand how every single dimension of your products & services are rated and how the EarthScore is evaluated. Our SubScores also give you the opportunity to put an emphasis on your personal focus. Do you prefer local products? Is your focus on social & human rights aspects, or are you trying to avoid harmful packaging? The SubScores deliver information on several drill down levels. `,
    img: SliderImg1
  },
  {
    title: '',
    subtitle: ' ',
    text: '',
    img: SliderImg1
  }
]

const activeIndex = ref(0)

const setActiveIndex = (index: number) => {
  activeIndex.value = index
}
</script>
