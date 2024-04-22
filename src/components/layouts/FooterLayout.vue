<template>
  <div class="bg-black-N700 text-white p-5 md:flex items-center justify-between">
    <div class="md:flex items-center flex-wrap">
      <img class="w-10 h-10" :src="ImgLogo" alt="Logo" />
      <div class="my-4 md:ml-5 md:mr-10">
        <span class="text-base">Copyright © 2024 WhatsGreen GmbH</span>
      </div>
      <div>
        <a class="text-base transition-all hover:text-primary-A300" href="/">Career</a>
        <a class="text-base mx-12 transition-all hover:text-primary-A300" href="/">Imprint</a>
        <a class="text-base transition-all hover:text-primary-A300" href="/">Privacy Policy</a>
      </div>
    </div>
    <div class="flex items-center space-x-5 mt-12 md:mt-0">
      <div class="flex justify-center items-center h-[54px] w-[140px] bg-white rounded-md">
        <div
          :style="{ 'background-image': 'url(' + FooterImg1 + ')' }"
          class="w-[106px] h-[32px] bg-cover bg-center"
        ></div>
      </div>
      <div class="flex justify-center items-center h-[54px] w-[140px] bg-white rounded-md">
        <div
          :style="{ 'background-image': 'url(' + FooterImg2 + ')' }"
          class="w-[77px] h-[54px] bg-cover bg-center"
        ></div>
      </div>
    </div>
  </div>
  <!-- <div class="w-full bg-black-N700 flex flex-wrap justify-between items-center text-white px-6">
    <div class="flex items-center flex-wrap">
      <img class="w-10 h-10" :src="ImgLogo" alt="Logo" />
      <span class="text-base pl-5 pr-8">Copyright © 2024 WhatsGreen GmbH</span>

      <div>
        <a class="text-base transition-all hover:text-primary-A300" href="/">Career</a>
        <a class="text-base mx-12 transition-all hover:text-primary-A300" href="/">Imprint</a>
        <a class="text-base transition-all hover:text-primary-A300" href="/">Privacy Policy</a>
      </div>
    </div>
    <div class="flex items-center space-x-5">
      <div class="flex justify-center items-center h-[54px] w-[140px] bg-white rounded-md">
        <div
          :style="{ 'background-image': 'url(' + FooterImg1 + ')' }"
          class="w-[106px] h-[32px] bg-cover bg-center"
        ></div>
      </div>
      <div class="flex justify-center items-center h-[54px] w-[140px] bg-white rounded-md">
        <div
          :style="{ 'background-image': 'url(' + FooterImg2 + ')' }"
          class="w-[77px] h-[54px] bg-cover bg-center"
        ></div>
      </div>
    </div>
  </div> -->
</template>
<script setup lang="ts">
import FooterImg1 from '@/assets/img/footer-1.png'
import FooterImg2 from '@/assets/img/footer-2.png'
import ImgLogo from '@/assets/img/logo.svg'
</script>
