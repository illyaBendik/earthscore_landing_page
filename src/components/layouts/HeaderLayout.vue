<template>
  <header
    id="header"
    class="fixed top-0 z-50 w-full h-[90px] px-4 transition-all ease-out duration-500 flex items-center justify-between"
    :class="{ 'bg-white': isScrolled }"
  >
    <div>
      <RouterLink :to="{ name: 'home' }" class="flex items-center text-lg">
        <img class="w-10 h-10" :src="ImgLogo" alt="Logo" />
        <span class="pl-2 font-medium">EarhtScore</span>
      </RouterLink>
    </div>
    <div v-if="useRoute().name === 'home'" class="flex items-center gap-3">
      <button
        :class="{
          ' text-white bg-primary-A300 hover:bg-white   hover:border-black-N900 hover:text-black-N900':
            isScrolled,
          ' border-black-N900 text-black-N900 hover:text-white hover:bg-primary-A300 hover:border-transparent':
            !isScrolled
        }"
        type="button"
        @click="toBlock('contact-form', 'start')"
        class="text-base border rounded-lg px-3 py-1.5 hidden md:block transition-all"
      >
        {{ t('header.btn') }}
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

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
