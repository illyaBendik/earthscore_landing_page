<template>
  <div class="grid grid-cols-5 justify-items-center items-center w-full">
    <button class="prev2" @click="$emit('click-prev')" :disabled="isFirst">
      <LeftIcon
        :class="{ 'text-primary-A300': !isFirst, 'text-black-N90 cursor-not-allowed': isFirst }"
        class="text-5xl mr-6"
      ></LeftIcon>
    </button>
    <div class="col-span-3 grid grid-col-3 xl:grid-cols-5 gap-8 items-center justify-items-center">
      <div
        class="h-[275px] w-[275px] sm:h-[342px] sm:w-full col-span-3 xl:col-span-2 bg-center bg-cover rounded-md"
        :style="{ 'background-image': 'url(' + img + ')' }"
      ></div>
      <div class="md:px-4 hidden sm:block col-span-3">
        <h5 class="text-[32px] font-light">{{ name }}</h5>
        <p class="text-base text-primary-A300">{{ position }}</p>
        <p class="text-base font-medium font-museo-sans-rounded">{{ deskPosition }}</p>
        <p class="mt-8">
          {{ text }}
        </p>
      </div>
    </div>
    <button class="next2" @click="$emit('click-next')" :disabled="isLast">
      <RightIcon
        class="text-5xl ml-6"
        :class="{ 'text-primary-A300': !isLast, 'text-black-N90 cursor-not-allowed': isLast }"
      ></RightIcon>
    </button>
  </div>
  <div class="px-4 mt-5 sm:hidden">
    <h5 class="text-[32px] font-light">{{ name }}</h5>
    <p class="text-base text-primary-A300">{{ position }}</p>
    <p class="text-base font-medium">{{ deskPosition }}</p>
    <p class="mt-10">
      {{ text }}
    </p>
  </div>
</template>
<script setup lang="ts">
import LeftIcon from '@/components/icons/LeftIcon.vue'
import RightIcon from '@/components/icons/RightIcon.vue'

defineProps<{
  name: string
  position: string
  deskPosition: string
  text: string
  img: string
  isFirst: boolean
  isLast: boolean
}>()

defineEmits(['click-prev', 'click-next'])
</script>

<style>
.next,
.swiper-rtl .prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.next,
.swiper-rtl .prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.prev,
.next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  /* width: calc(var(--swiper-navigation-size) / 44 * 27); */
  /* height: var(--swiper-navigation-size); */
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
}

.prev,
.swiper-rtl .next {
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}

#slider-team .swiper-wrapper {
  display: flex;
  align-items: center;
}
</style>
