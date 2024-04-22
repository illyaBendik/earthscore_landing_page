<template>
  <div class="space-y-6">
    <a
      class="hover:text-primary-A300 transition-all flex items-center space-x-2"
      href="tel:+49(0)2238 4784075"
    >
      <CallIcon class="text-2xl"></CallIcon>
      <span class="text-xl"> +49 (0)2238 4784075</span></a
    >
    <a
      class="hover:text-primary-A300 transition-all flex items-center space-x-2"
      href="mailto:info@earthscore.com"
    >
      <PostIcon class="text-2xl"></PostIcon>
      <span class="text-xl"> info@earthscore.com</span></a
    >
    <a
      class="hover:text-primary-A300 hover:border-primary-A300 inline-block transition-al border-b border-0.5 border-black-N80"
      href="https://www.linkedin.com/"
    >
      LinkedIn
    </a>
  </div>
</template>
<script setup>
import CallIcon from '@/components/icons/CallIcon.vue'
import PostIcon from '@/components/icons/PostIcon.vue'
</script>
