<template>
  <div id="slider-consumer">
    <div class="hidden lg:block">
      <SliderDesktop :contentList="contentList"></SliderDesktop>
    </div>
    <div class="lg:hidden">
      <SliderMobile :contentList="contentList"></SliderMobile>
    </div>
  </div>
</template>
<script setup lang="ts">
import SliderDesktop from './components/SliderDesktop.vue'
import SliderMobile from './components/SliderMobile.vue'
import Img1 from '@/assets/img/B2B_1.png'
import Img2 from '@/assets/img/B2B_2.png'
import Img3 from '@/assets/img/B2B_3.png'
import Img4 from '@/assets/img/B2B_3.png'
import Img5 from '@/assets/img/B2B_5.png'

const contentList = [
  {
    name: 'ESG REPORT Auto Pilot',
    img: Img1,
    className: 'min-w-[250px]',
    text: 'Stay on top of your sustainability game effortlessly with our cutting-edge Audit Tool, putting you miles ahead of regulatory demands and stakeholder anticipations. Harness the power of our streamlined ES Smart Audits to not only meet but exceed global sustainability benchmarks and industry standards. Elevate your brand by showcasing unwavering commitment to transparency, integrity, and responsibility, captivating stakeholders, investors, and customers alike. '
  },
  {
    name: 'EARTHSCORE DASHBOARD',
    img: Img2,
    className: 'min-w-[250px]',
    text: 'Welcome to our cutting-edge Business Intelligence Dashboard. Customize your dashboard effortlessly with our range of widgets, ensuring your analytics reflect your unique business needs. Stay compliant effortlessly with pre-selected key performance indicators (KPIs) tailored for regulatory requirements, putting you ahead of the curve from day one. Align your KPIs with company targets, driving strategic objectives forward. Dive deep into data with intuitive drill-down options. Elevate your strategy with personalised ESG excellence and A.I. solutions for long-term success. '
  },
  {
    name: 'CONSULTANT EXPERIENCE MEETS EARTHSCORE Expert',
    img: Img3,
    className: 'min-w-[550px]',
    text: "Sustainability isn't just a hurdle— sustainability is imperative for growth and resilience. It's time to shift from reacting to acting. That's where we come in. Our tailored ESG consulting services guide you through every step of the process. From data collection to AI reporting, we'll ensure you're not just compliant, but thriving in the new era of sustainability. Our approach isn't just about meeting requirements—it's about enhancing your business relationships and exploring new opportunities. With expertise, experience, and a reputation for excellence, we're here to transform your business into a sustainability powerhouse. Don't wait for challenges to overwhelm you—embrace the future today."
  },
  {
    name: 'ESG passport',
    img: Img4,
    className: 'min-w-[150px]',

    text: 'Instantly share your ESG Audit Score with anyone using a generated QR code.'
  },
  {
    name: 'EarthScore A.I.',
    img: Img5,
    className: 'min-w-[180px]',
    text: "Sustainability isn't just a hurdle— sustainability is imperative for growth and resilience. It's time to shift from reacting to acting. That's where we come in. Our tailored ESG consulting services guide you through every step of the process. From data collection to AI reporting, we'll ensure you're not just compliant, but thriving in the new era of sustainability. Our approach isn't just about meeting requirements—it's about enhancing your business relationships and exploring new opportunities. With expertise, experience, and a reputation for excellence, we're here to transform your business into a sustainability powerhouse. Don't wait for challenges to overwhelm you—embrace the future today."
  }
]
</script>
