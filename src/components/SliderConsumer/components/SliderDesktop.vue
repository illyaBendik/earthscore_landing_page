<template>
  <div class="w-full flex flex-col justify-center bg-white client-block">
    <div class="grid grid-cols-3 space-x-8">
      <div
        class="col-span-2 max-h-[671px] overflow-x-hidden max-w-full block pr-14 text-base scrollbar"
      >
        <div
          v-for="(contentItem, i) in contentList"
          :key="i"
          :id="`slider-consumer-slider-el-${i}`"
        >
          <div
            :style="{ 'background-image': 'url(' + contentItem.img + ')' }"
            class="h-[571px] bg-cover bg-center"
          ></div>
          <p class="my-5">
            {{ contentItem.text }}
          </p>
        </div>
      </div>
      <div class="">
        <h3 class="text-[40px] mb-20">EarthScore for Your Business</h3>
        <ul class="space-y-10 overflow-x-hidden block max-w-fit scrollbar">
          <li
            v-for="(contentItem, i) in contentList"
            :key="i"
            :class="contentItem.className"
            class="uppercase text-xl text-black-N100 transition-all hover:text-black-N900 cursor-pointer pb-0"
            @click="toBlock(`slider-consumer-slider-el-${i}`, 'nearest')"
          >
            {{ contentItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toBlock } from '@/utils/toBlock'

defineProps<{ contentList: { name: string; img: string; className: string; text: string }[] }>()
</script>
