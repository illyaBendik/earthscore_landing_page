<template>
  <div>
    <!-- HEADER -->
    <header
      id="header"
      class="fixed top-0 z-50 w-full h-[90px] px-4 transition-all ease-out duration-500 flex items-center justify-between"
      :class="{ 'bg-white': isScrolled }"
    >
      <div>Icon</div>
      <div class="flex items-center gap-3">
        <button
          :class="{
            'border-none text-white bg-primary-A300': isScrolled,
            'border-black-N900 text-black-N900': !isScrolled
          }"
          class="text-lg border rounded-lg px-3 py-1.5"
        >
          Request a free demo
        </button>
        <button class="text-lg border border-black-N900 text-black-N900 rounded-lg px-3 py-1.5">
          <MenuIcon class="text-[28px]"></MenuIcon>
        </button>
      </div>
    </header>
    <!-- FIRST BLOCK -->
    <div
      :style="{ 'background-image': 'url(' + BgImg + ')' }"
      class="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
    >
      <h1 class="text-6xl text-center mb-4">EarthScore</h1>
      <h1 class="text-6xl text-center">ESG Opportunities</h1>
      <button type="button" class="rounded-md bg-primary-A300 text-white mt-12 px-4 py-2">
        Book a demo
      </button>
    </div>
    <!-- SECOND BLOCK -->
    <div class="px-14 py-24">
      <p class="text-primary-A300 text-xl mb-3">Our Mission</p>
      <p class="text-[40px]">
        EarthScore is an expert for digitally automated, intelligent ESG-Reporting &
        Change-Management.
      </p>
      <p class="text-[40px]">
        We define the new market standard for corporate sustainability solutions where prosperity
        and stewardship coexist.
      </p>
    </div>
    <!-- THIRD BLOCK -->
    <div class="grid grid-cols-3">
      <div class="bg-primary-A300 min-h-[500px] py-24 px-5">
        <p class="text-white text-xl mb-5">360° Approach</p>
        <p class="text-white text-[40px]">EarthScore Solutions:</p>
      </div>
      <div class="py-24 px-16 bg-white border-y border-y-gray-950">
        <p class="text-[40px] mb-5">For Business</p>
        <p class="text-base">
          ESG readiness is one of the biggest business opportunities in recent history. We marry
          knowledge with action, ensuring that our endeavors yield tangible results.
        </p>
      </div>
      <div class="py-24 px-16 bg-white border border-gray-950">
        <p class="text-[40px] mb-5">For Consumers</p>
        <p class="text-base">
          Our commitment is fostering sustainable lifestyle. We offer a user-friendly tool for
          making environmentally conscious consumer choices.
        </p>
      </div>
    </div>
    <!-- FOUR BLOCK -->
    <div
      :style="{ 'background-image': 'url(' + BgImg2 + ')' }"
      class="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
    ></div>
    <!-- FOUR FIVE -->
    <FiveBlock></FiveBlock>
    <!-- SIX BLOCK -->
    <div
      :style="{ 'background-image': 'url(' + BgImg3 + ')' }"
      class="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
    ></div>
    <!-- SEVEN BLOCK -->
    <SevenBlock></SevenBlock>
    <!-- EIGHT  BLOCK -->
    <EightBlock></EightBlock>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BgImg from '@/assets/img/full-screen-1.jpg'
import BgImg2 from '@/assets/img/full-screen-2.jpg'
import BgImg3 from '@/assets/img/full-screen-3.jpg'

import MenuIcon from '@/components/icons/MenuIcon.vue'
import FiveBlock from '@/components/blocks/FiveBlock.vue'
import SevenBlock from '@/components/blocks/SevenBlock.vue'
import EightBlock from '@/components/blocks/EightBlock.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  if (window.scrollY > 250) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
