<template>
  <div class="bg-[#E6F2FF80] w-full px-10 md:px-40 md:py-10 mt-20 flex justify-center items-center">
    <div class="max-w-7xl gap-5 flex overflow-x-auto md:overflow-y-hidden items-center">
      <div
        class="flex flex-col items-center justify-start min-w-[200px]"
        v-for="(user, i) in users"
        :key="i"
      >
        <div
          @click="$emit('on-click-item', i)"
          :class="{ 'border-2 border-black-N700': activeIndex === i }"
          class="h-[84px] w-[84px] bg-center bg-cover rounded-full cursor-pointer hover:border-2 hover:border-black-N700"
          :style="{ 'background-image': 'url(' + user.img + ')' }"
        ></div>
        <p class="text-base text-center mt-1.5 mb-0.5">{{ user.name }}</p>
        <p class="text-xs text-center">{{ user.position }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineEmits<{
  (e: 'on-click-item', index: number): void
}>()

defineProps<{
  users: { name: string; position: string; img: string }[]
  activeIndex: number
}>()
</script>
