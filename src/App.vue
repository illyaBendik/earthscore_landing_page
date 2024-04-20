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
    <h3 class="text-[32px] md:text-[40px] px-4 md:px-5">Meet the EarthScore Team</h3>
    <SliderTeam></SliderTeam>
    <!-- NINE  BLOCK -->
    <div class="px-20 py-10 grid grid-cols-2">
      <div class="flex flex-col">
        <h2 class="text-[40px]">Book a Demo!</h2>

        <p class="text-xl mt-5">Get in touch with our experts!</p>

        <div class="flex flex-col mt-20 space-y-3">
          <a
            class="hover:text-primary-A300 transition-all flex items-center gap-2"
            href="tel:+49(0)2238 4784075"
          >
            <CallIcon class="text-2xl"></CallIcon>
            <span class="text-xl"> +49 (0)2238 4784075</span></a
          >
          <a
            class="hover:text-primary-A300 transition-all flex items-center gap-2"
            href="mailto:info@earthscore.com"
          >
            <PostIcon class="text-2xl"></PostIcon>
            <span class="text-xl"> info@earthscore.com</span></a
          >
        </div>
      </div>
      <div>
        <form action="" class="flex justify-center">
          <div class="max-w-[546px] w-full">
            <div class="grid grid-cols-2 gap-5">
              <div class="relative z-0">
                <label
                  for="floating_standard"
                  class="text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Name</label
                >
                <input
                  type="text"
                  class="block px-0 mt-2 w-full text-sm pb-1 text-gray-900 bg-transparent border-0 border-b-2 border-black-N900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter your name"
                />
              </div>
              <div class="relative z-0">
                <label
                  for="floating_standard"
                  class="text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Email</label
                >
                <input
                  type="text"
                  class="block px-0 mt-2 w-full text-sm pb-1 text-gray-900 bg-transparent border-0 border-b-2 border-black-N900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div class="mt-10">
              <label for="message" class="block mb-2 text-[13px] text-gray-900 uppercase"
                >Your message here</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-black-N900 focus:ring-blue-500 focus:outline-blue-600"
                placeholder="Your message here"
              ></textarea>
            </div>

            <button
              type="button"
              class="bg-primary-A300 text-white text-lg rounded-lg px-4 py-2 mt-10"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- TEN  BLOCK -->
    <div class="h-[142px] w-full bg-black-N700 flex justify-between items-center text-white px-6">
      <div>
        <span>Icon</span>
        <span class="text-base pl-5 pr-8">Copyright © 2024 WhatsGreen GmbH</span>

        <a class="text-base transition-all hover:text-primary-A300" href="/">Career</a>
        <a class="text-base mx-12 transition-all hover:text-primary-A300" href="/">Imprint</a>
        <a class="text-base transition-all hover:text-primary-A300" href="/">Privacy Policy</a>
      </div>
      <div class="flex items-center space-x-5">
        <div class="flex justify-center items-center h-[54px] w-[140px] bg-white rounded-md">
          <div
            :style="{ 'background-image': 'url(' + FooterImg1 + ')' }"
            class="w-[106px] h-[32px] bg-cover bg-center"
          ></div>
        </div>
        <div class="flex justify-center items-center h-[54px] w-[140px] bg-white rounded-md">
          <div
            :style="{ 'background-image': 'url(' + FooterImg2 + ')' }"
            class="w-[77px] h-[54px] bg-cover bg-center"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BgImg from '@/assets/img/full-screen-1.jpg'
import BgImg2 from '@/assets/img/full-screen-2.jpg'
import BgImg3 from '@/assets/img/full-screen-3.jpg'

import FooterImg1 from '@/assets/img/footer-1.png'
import FooterImg2 from '@/assets/img/footer-2.png'

import MenuIcon from '@/components/icons/MenuIcon.vue'
import FiveBlock from '@/components/blocks/FiveBlock.vue'
import SevenBlock from '@/components/blocks/SevenBlock.vue'
import SliderTeam from '@/components/SliderTeam/SliderTeam.vue'
import CallIcon from '@/components/icons/CallIcon.vue'
import PostIcon from '@/components/icons/PostIcon.vue'

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
