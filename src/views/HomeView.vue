<template>
  <!-- FIRST BLOCK -->
  <div
    :style="{ 'background-image': 'url(' + BgImg1 + ')' }"
    class="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
  >
    <span class="inline-block text-center"
      ><img class="md:h-[272px] h-[165px] w-[215px] md:w-[373px]" :src="ImgLogo" alt="Logo"
    /></span>
    <span
      class="uppercase text-[11.1px] md:text-[19.3px] text-center font-bold w-[215px] md:w-[373px] whitespace-nowrap"
      >{{ t('homePage.screen1.subtitle') }}</span
    >
    <button
      type="button"
      @click="toBlock('contact-form', 'start')"
      class="rounded-md transition-all bg-primary-A300 focus:bg-primary-A600 text-white mt-12 px-4 py-2"
    >
      {{ t('homePage.screen1.btn') }}
    </button>
  </div>
  <!-- SECOND BLOCK -->
  <div class="px-6 pt-12 pb-[72px] md:pt-32 md:pb-[226px] md:px-16" id="mission">
    <span class="block text-primary-A300 text-base font-medium md:text-xl mb-3 uppercase">{{
      t('homePage.screen2.title')
    }}</span>
    <p class="text-[22px] md:text-[32px] md:leading-[40px]">
      {{ t('homePage.screen2.text') }}
    </p>
  </div>
  <!-- THIRD BLOCK -->
  <div class="grid grid-cols-1 lg:grid-cols-3 md:border border-gray-950">
    <div class="bg-primary-A300 px-6 pt-12 pb-[72px] md:px-16 md:pt-16 md:pb-[142px]">
      <span class="text-white text-base md:text-xl uppercase">{{
        t('homePage.screen3.block1.title')
      }}</span>
      <p class="text-white text-[32px] md:text-[40px] my-5 leading-[44px]">
        {{ t('homePage.screen3.block1.subtitle') }}:
      </p>
      <p class="text-base text-white">
        {{ t('homePage.screen3.block1.text') }}
      </p>
    </div>
    <div
      class="px-6 pt-12 md:pt-28 pb-[72px] md:px-16 bg-white flex items-start relative border-y border-x-0 md:border-y-0 md:border-x border-gray-950"
    >
      <div>
        <p class="text-[32px] md:text-[40px] mb-5">{{ t('homePage.screen3.block2.title') }}</p>
        <p class="text-base">
          {{ t('homePage.screen3.block2.text') }}
        </p>
        <button
          @click="toBlock('slider-consumer', 'start')"
          class="flex items-center space-x-3 mt-9 group lg:absolute group lg:top-[54%] lg:-translate-y-[-54%]"
        >
          <DownIcon
            class="text-primary-A300 text-[32px] md:text-[56px] transition-all group-hover:rotate-0 rotate-[-90deg]"
          ></DownIcon>
          <span
            class="text-base md:text-xl transition-all group-hover:text-primary-A300 group-hover:font-medium"
          >
            {{ t('homePage.screen3.btn') }}</span
          >
        </button>
      </div>
    </div>
    <div class="px-6 pt-12 md:pt-28 pb-[72px] md:px-16 bg-white flex items-start relative">
      <div>
        <p class="text-[32px] md:text-[40px] mb-5">{{ t('homePage.screen3.block3.title') }}</p>
        <p class="text-base">
          {{ t('homePage.screen3.block3.text') }}
        </p>
        <button
          @click="toBlock('slider-possibility', 'start')"
          class="flex items-center space-x-3 mt-9 group lg:absolute group lg:top-[54%] lg:-translate-y-[-54%]"
        >
          <DownIcon
            class="text-primary-A300 text-[32px] md:text-[56px] transition-all group-hover:rotate-0 rotate-[-90deg]"
          ></DownIcon>
          <span
            class="text-base md:text-xl transition-all group-hover:text-primary-A300 group-hover:font-medium"
          >
            {{ t('homePage.screen3.btn') }}</span
          >
        </button>
      </div>
    </div>
  </div>
  <!-- FOUR BLOCK -->
  <div
    :style="{ 'background-image': 'url(' + BgImg2 + ')' }"
    class="w-full h-screen flex flex-col justify-end bg-cover bg-bottom md:bg-center p-6 md:p-16"
  >
    <div class="max-w-[930px]">
      <p class="text-white text-[32px] md:text-[40px] leading-[48px]">
        {{ t('homePage.screen4.title') }}
      </p>
      <p class="text-white text-[32px] md:text-[40px] leading-[48px]">
        {{ t('homePage.screen4.subtitle') }}
      </p>
    </div>
    <div class="max-w-[838px]">
      <p class="text-base text-white font-medium uppercase pt-4">
        {{ t('homePage.screen4.text') }}
      </p>
    </div>
  </div>
  <!-- FOUR FIVE -->
  <SliderConsumer></SliderConsumer>
  <!-- SIX BLOCK -->
  <div
    :style="{ 'background-image': 'url(' + BgImg3 + ')' }"
    class="w-full h-screen flex flex-col justify-end bg-cover bg-bottom md:bg-center p-6 md:p-16"
  >
    <div class="text-white max-w-[838px]">
      <p class="text-[32px] md:text-[40px] leading-[48px]">
        {{ t('homePage.screen6.title') }} <br />
      </p>
      <p class="text-[32px] md:text-[40px] leading-[48px]">
        {{ t('homePage.screen6.subtitle') }}
      </p>
      <p class="text-base font-medium uppercase pt-4">
        {{ t('homePage.screen6.text') }}
      </p>
    </div>
  </div>
  <!-- SEVEN BLOCK -->
  <SliderPossibility></SliderPossibility>
  <!-- EIGHT  BLOCK -->
  <h3 class="text-[32px] md:text-[32px] px-6 py-12">{{ t('homePage.screen8.title') }}</h3>
  <SliderTeam></SliderTeam>
  <!-- NINE  BLOCK -->
  <div class="client-block grid md:grid-cols-2" id="viewport-contact-form">
    <div class="flex flex-col">
      <h2 class="text-[32px]">{{ t('homePage.screen9.title') }}</h2>
      <p class="text-xl mt-5">{{ t('homePage.screen9.subtitle') }}</p>
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
import BgImg1 from '@/assets/img/full-screen-1.png'
import BgImg2 from '@/assets/img/full-screen-2.png'
import BgImg3 from '@/assets/img/full-screen-3.png'
import ImgLogo from '@/assets/img/main-logo.svg'
import DownIcon from '@/components/icons/DownIcon.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactList from '@/components/ContactList.vue'
import SliderConsumer from '@/components/SliderConsumer/SliderConsumer.vue'
import SliderTeam from '@/components/SliderTeam/SliderTeam.vue'
import SliderPossibility from '@/components/SliderPossibility.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>
