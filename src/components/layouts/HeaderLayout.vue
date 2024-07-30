<template>
  <header
    id="header"
    class="fixed top-0 z-50 w-full h-[90px] px-6 md:px-16 flex items-center justify-between"
    :class="{
      'bg-white shadow-lg transition-all ease-out duration-500':
        isScrolled && useRoute().name === 'home',
      'bg-white shadow-lg': useRoute().name !== 'home'
    }"
  >
    <div>
      <RouterLink
        v-if="useRoute().name === 'home' ? isScrolled : true"
        :to="{ name: 'home' }"
        class="flex items-center text-lg"
      >
        <img class="h-[38px] w-[138px]" :src="ImgLogo" alt="Logo" />
      </RouterLink>
    </div>
    <div v-if="useRoute().name === 'home'" class="flex items-center gap-3">
      <button
        :class="{
          '  text-black-N900 hover:font-medium ': !isScrolled,
          '  bg-primary-A300 border-transparent text-white': isScrolled,
          'bg-primary-A600 text-white border-transparent font-medium': isClicked
        }"
        type="button"
        @click="onClick"
        class="text-base border-black-N900 border rounded-lg px-3 py-1.5 hidden md:block transition-all w-[195px] hover:font-medium"
      >
        {{ t('header.btn') }}
      </button>
      <slot></slot>
    </div>
    <RouterLink
      :to="{ name: 'home' }"
      v-if="useRoute().name !== 'home'"
      class="bg-primary-A300 text-base border flex items-center rounded-lg px-3 py-1.5 text-white mt-1.5"
      type="button"
    >
      <BackArrow></BackArrow>
      <span class="pl-1"> {{ t('header.btnBack') }}</span>
    </RouterLink>
  </header>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { toBlockWithPromise } from '@/utils/toBlock'
import ImgLogo from '@/assets/img/header-logo.svg'
import BackArrow from '@/components/icons/BackArrow.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const isScrolled = ref(false)
const isClicked = ref(false)

const handleScroll = () => {
  if (window.scrollY > 250) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}
const handleScroll2 = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          isClicked.value = false
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(document.getElementById('viewport-contact-form') as HTMLElement)
}

const onClick = async () => {
  await toBlockWithPromise('contact-form', 'start')
  isClicked.value = true
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('scroll', handleScroll2)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll2)
  window.removeEventListener('scroll', handleScroll)
})
</script>
