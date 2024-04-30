<template>
  <div class="relative" :class="{ 'menu-open': showSideBar }">
    <HeaderLayout>
      <button
        @click="toggleSidebar"
        class="text-lg border border-black-N900 text-black-N900 rounded-lg px-3 py-1.5"
      >
        <MenuIcon class="text-[28px]"></MenuIcon>
      </button>
    </HeaderLayout>
    <SidebarLayout :is-open="showSideBar" @close="toggleSidebar"></SidebarLayout>
    <RouterView></RouterView>
    <FooterLayout></FooterLayout>
  </div>
</template>
<script setup lang="ts">
import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
import SidebarLayout from '@/components/layouts/SidebarLayout.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'

import { ref } from 'vue'

const showSideBar = ref(false)

const toggleSidebar = () => (showSideBar.value = !showSideBar.value)
</script>
