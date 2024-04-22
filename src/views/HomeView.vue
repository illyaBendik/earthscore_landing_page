<template>
  <!-- FIRST BLOCK -->
  <div
    :style="{ 'background-image': 'url(' + TestImg1 + ')' }"
    class="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
  >
    <h1 class="text-[32px] md:text-6xl font-light text-center leading-[50px] md:leading-[80px]">
      EarthScore <br class="my-2" />
      ESG Opportunities
    </h1>
    <button
      type="button"
      @click="toBlock('contact-form', 'start')"
      class="rounded-md bg-primary-A300 font-light text-white mt-12 px-4 py-2"
    >
      Book a demo
    </button>
  </div>
  <!-- SECOND BLOCK -->
  <div class="client-block" id="mission-vision">
    <span class="block text-primary-A300 text-base md:text-xl mb-3 uppercase">Our Mission</span>
    <p class="text-2xl md:text-[40px] leading-[50px]">
      EarthScore is an expert for digitally automated, intelligent ESG-Reporting &
      Change-Management.
    </p>
    <p class="text-2xl md:text-[40px] leading-[50px]">
      We define the new market standard for corporate sustainability solutions where prosperity and
      stewardship coexist.
    </p>
  </div>
  <!-- THIRD BLOCK -->
  <div class="grid grid-cols-1 lg:grid-cols-3">
    <div class="bg-primary-A300 min-h-[500px] client-block">
      <span class="text-white text-xl font-thin font-MuseoSans">360° Approach</span>
      <p class="text-white text-[40px] my-5">EarthScore Solutions:</p>
      <p class="text-base text-white">
        At the core of our strategy lies the ESG Excellence Center, where knowledge meets action to
        seize unprecedented opportunities in sustainability. Backed by a robust science foundation,
        our solutions are grounded in data-driven insights, including our EarthScore Market Feedback
        Loop. Navigate regulatory landscapes effortlessly while harnessing the power of our
        unparalleled business intelligence. With our AI Component, anticipate trends and unlock
        hidden potentials with precision.
      </p>
    </div>
    <div class="client-block bg-white border-l border-r lg:border-y border-gray-950">
      <p class="text-[40px] mb-5">For Business</p>
      <p class="text-base">
        ESG readiness is one of the biggest business opportunities in recent history. We marry
        knowledge with action, ensuring that our endeavors yield tangible results.
      </p>
      <button
        @click="toBlock('slider-consumer', 'start')"
        class="flex items-center space-x-3 mt-5 md:mt-16"
      >
        <DownIcon class="text-primary-A300 text-4xl md:text-6xl"></DownIcon>
        <span class="font-light text-base md:text-xl">Learn More</span>
      </button>
    </div>
    <div class="client-block bg-white border border-gray-950">
      <p class="text-[40px] mb-5">For Consumers</p>
      <p class="text-base">
        Our commitment is fostering sustainable lifestyle. We offer a user-friendly tool for making
        environmentally conscious consumer choices.
      </p>
      <button
        @click="toBlock('slider-possibility', 'start')"
        class="flex items-center space-x-3 mt-5 md:mt-16"
      >
        <DownIcon class="text-primary-A300 text-4xl md:text-6xl"></DownIcon>
        <span class="font-light text-base md:text-xl">Learn More</span>
      </button>
    </div>
  </div>
  <!-- FOUR BLOCK -->
  <div
    :style="{ 'background-image': 'url(' + BgImg2 + ')' }"
    class="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
  ></div>
  <!-- FOUR FIVE -->
  <SliderConsumer></SliderConsumer>
  <!-- SIX BLOCK -->
  <div
    :style="{ 'background-image': 'url(' + BgImg3 + ')' }"
    class="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center mb-10"
  ></div>
  <!-- SEVEN BLOCK -->
  <SliderPossibility></SliderPossibility>
  <!-- EIGHT  BLOCK -->
  <h3 class="text-[32px] md:text-[40px] px-6">Meet the EarthScore Team</h3>
  <SliderTeam></SliderTeam>
  <!-- NINE  BLOCK -->
  <div class="client-block grid md:grid-cols-2">
    <div class="flex flex-col">
      <h2 class="text-[40px]">Book a Demo!</h2>
      <p class="text-xl mt-5">Get in touch with our experts!</p>
      <div class="mt-10 md:mt-20 mb-10">
        <ContactList></ContactList>
      </div>
    </div>
    <div>
      <ContactForm></ContactForm>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toBlock } from '@/utils/toBlock'
import TestImg1 from '@/assets/img/test-1.png'
import BgImg2 from '@/assets/img/full-screen-2.jpg'
import BgImg3 from '@/assets/img/full-screen-3.jpg'
import DownIcon from '@/components/icons/DownIcon.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactList from '@/components/ContactList.vue'
import SliderConsumer from '@/components/SliderConsumer/SliderConsumer.vue'
import SliderTeam from '@/components/SliderTeam/SliderTeam.vue'
import SliderPossibility from '@/components/SliderPossibility.vue'
</script>
