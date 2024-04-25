<template>
  <transition name="fade">
    <div v-show="isOpen" class="border z-50 fixed w-full md:w-96 right-0 h-screen bg-white">
      <div class="pl-8 pr-4 pt-5">
        <div class="flex justify-end space-x-3">
          <button class="p-2 text-2xl flex items-center text-black-N100 space-x-2">
            <LangIcon></LangIcon> <span class="block font-light text-lg">EN</span>
          </button>
          <button
            @click="$emit('close')"
            class="border border-black-N900 rounded-md px-3 py-1.5 text-2xl"
          >
            <CloseIcon></CloseIcon>
          </button>
        </div>
        <ul class="space-y-8 mb-20 mt-5">
          <li
            v-for="(contentItem, index) in list"
            :key="index"
            @click.prevent="onClick(contentItem.id)"
          >
            <a class="text-xl text-light" :href="`#${contentItem.id}`">
              {{ `0${index + 1}` }} {{ contentItem.name }}
            </a>
          </li>
        </ul>
      </div>
      <hr class="bg-black-N900 h-0.5" />
      <div class="px-8">
        <span class="block font-light text-3xl py-16">Contact:</span>
        <ContactList></ContactList>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { toBlock } from '@/utils/toBlock'
import ContactList from '@/components/ContactList.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import LangIcon from '@/components/icons/LangIcon.vue'

const list = [
  { name: 'Mission', id: 'mission' },
  { name: 'Our Solutions', id: 'our-solutions' },
  { name: 'B2B Solution', id: 'slider-possibility' },
  { name: 'B2C Solution', id: 'slider-consumer' },
  { name: 'Team', id: 'slider-team' },
  { name: 'Get in Touch', id: 'contact-form' }
]

defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits(['close'])

const onClick = (id: string) => {
  emit('close')
  toBlock(id, 'start')
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
