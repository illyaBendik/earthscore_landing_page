<template>
  <header
    id="header"
    class="fixed top-0 z-50 w-full h-[90px] px-4 transition-all ease-out duration-500 flex items-center justify-between"
    :class="{ 'bg-white': isScrolled }"
  >
    <div>
      <RouterLink :to="{ name: 'home' }">
        <img class="w-10 h-10" :src="ImgLogo" alt="Logo" />
      </RouterLink>
    </div>
    <div v-if="useRoute().name === 'home'" class="flex items-center gap-3">
      <button
        :class="{
          'border-none text-white bg-primary-A300': isScrolled,
          'border-black-N900 text-black-N900': !isScrolled
        }"
        type="button"
        @click="toBlock('contact-form', 'start')"
        class="text-lg border rounded-lg px-3 py-1.5 hidden md:block font-light"
      >
        Request a free demo
      </button>
      <slot></slot>
    </div>
  </header>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { toBlock } from '@/utils/toBlock'
import ImgLogo from '@/assets/img/logo.svg'

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
