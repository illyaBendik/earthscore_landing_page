<template>
  <div class="min-h-[80.7vh] flex items-center mt-20">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-2">
        <div class="order-last md:order-first px-4 pt-4 pb-20 md:pb-0 md:pt-0">
          <h1 class="text-[32px] font-light mb-8">Impressum</h1>
          <div class="font-light text-base mb-6">
            <p>WhatsGreen Research & Science GmbH</p>
            <p>Rommerskirchener Str. 21</p>
            <p>Walzwerk Atelier 65</p>
            <p>50259 Pulheim</p>
            <p>Deutschland</p>
            <p>Telefon: +49 (0)223 4786954 (Zentrale)</p>
            <p>Email: info@earthscore.com</p>
          </div>

          <div class="font-light text-base">
            <p>Registergericht: AG Köln</p>
            <p>Registernummer: HRB 112686</p>
            <p>Geschäftsführer: Manuel Mattern</p>
            <p>Prokurist: Martin Börner</p>
            <p>USt-ID: DE358475907</p>
          </div>
        </div>
        <div
          :style="{ 'background-image': 'url(' + Img + ')' }"
          class="h-[445px] bg-cover bg-center"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Img from '@/assets/img/impressum.png'
</script>
