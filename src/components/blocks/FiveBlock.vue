<template>
  <div class="w-full h-screen flex flex-col justify-center items-center bg-white px-12">
    <div class="grid grid-cols-3">
      <div class="col-span-2 max-h-[671px] overflow-auto pr-14 scrollbar text-base">
        <div v-for="i in 4" :key="i" :id="`five-block-el-${i}`">
          <div
            :style="{ 'background-image': 'url(' + Img1 + ')' }"
            class="h-[571px] bg-cover bg-center"
          ></div>
          <p>
            Stay ahead of regulatory requirements and stakeholder expectations with our streamlined
            ESG Audit tool. With our ESG Audit solution, you gain a competitive edge by aligning
            with global sustainability standards and best practices. Showcase your commitment to
            stakeholders, investors, and customers alike, demonstrating transparency, integrity, and
            responsibility.
          </p>
          <p>
            Stay ahead of regulatory requirements and stakeholder expectations with our streamlined
            ESG Audit tool. With our ESG Audit solution, you gain a competitive edge by aligning
            with global sustainability standards and best practices. Showcase your commitment to
            stakeholders, investors, and customers alike, demonstrating transparency, integrity, and
            responsibility.
          </p>
          <p>
            Stay ahead of regulatory requirements and stakeholder expectations with our streamlined
            ESG Audit tool. With our ESG Audit solution, you gain a competitive edge by aligning
            with global sustainability standards and best practices. Showcase your commitment to
            stakeholders, investors, and customers alike, demonstrating transparency, integrity, and
            responsibility.
          </p>
          <p>
            Stay ahead of regulatory requirements and stakeholder expectations with our streamlined
            ESG Audit tool. With our ESG Audit solution, you gain a competitive edge by aligning
            with global sustainability standards and best practices. Showcase your commitment to
            stakeholders, investors, and customers alike, demonstrating transparency, integrity, and
            responsibility.
          </p>
        </div>
      </div>
      <div class="pl-12">
        <h3 class="text-[40px] mb-20">EarthScore for Your Business</h3>

        <ul class="space-y-10">
          <li
            v-for="(contentItem, i) in contentList"
            :key="i"
            class="uppercase text-xl text-black-N100 transition-all hover:text-black-N900 cursor-pointer"
            @click="onClick(i + 1)"
          >
            {{ contentItem }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Img1 from '@/assets/img/img-1.png'

const contentList = [
  'ESG REPORT Auto Pilot',
  'EARTHSCORE DASHBOARD',
  'CONSULTANT EXPERIENCE MEETS EARTHSCORE Expert',
  'EarthScore A.I.'
]

const onClick = (i: number) => {
  document.getElementById(`five-block-el-${i}`)?.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth'
  })
}
</script>
