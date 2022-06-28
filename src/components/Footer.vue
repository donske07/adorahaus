<script setup>
import logoUrl from "../assets/logo.png";
import video from "../assets/video.mp4";
</script>
<template>
  <div class="font-catamaran font-bold flex flex-col md:flex-row pb-2">
    <div class="md:w-1/2 px-2">
      <video-background
        :src="video"
        style="max-height: 600px; height: 100vh"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
      >
      </video-background>
    </div>
    <a id="contact"></a>
    <div class="md:w-1/2 opacity-60 flex justify-center md:justify-between">
      <div class="flex flex-col justify-start px-10">
        <a href="#"><img class="w-96" :src="logoUrl" /></a>
        <h1 class="font-Cormorant py-2 text-5xl">Working Hours</h1>
        <p class="text-2xl">Mon - Weds: 9am - 5:30pm</p>
        <p class="text-2xl">Thurs - Fri: 9am - 7:00pm</p>
        <p class="text-2xl">Sat: 9am - 5:30pm</p>
        <p class="text-2xl">Sun: Closed</p>

        <a href="tel:03-90775896" class="text-2xl space-x-4">
          <font-awesome-icon icon="fa-solid fa-phone"></font-awesome-icon>

          <span>03 90775896</span>
        </a>
        <a href="mailto:info@adorahaus.com.au" class="text-2xl space-x-4">
          <font-awesome-icon icon="fa-solid fa-envelope"> </font-awesome-icon>

          <span> info@adorahaus.com.au </span>
        </a>
        <a
          class="text-2xl space-x-4"
          href="https://goo.gl/maps/CLA5Mtc2NwjcQR2K6"
        >
          <font-awesome-icon icon="fa-solid fa-shop"></font-awesome-icon>
          <span>313 Bay Street, Port Melbourne, 3207 </span>
        </a>
      </div>
      <div class="flex pt-12 md:pt-2 space-x-4 pr-10 md:pr-2">
        <a target="_blank" href="https://www.instagram.com/adorahaus/">
          <font-awesome-icon size="2xl" icon="fa-brands fa-instagram" /> </a
        ><a
          target="_blank"
          href="https://www.facebook.com/Adora-Haus-101252962025409"
        >
          <font-awesome-icon size="2xl" icon="fa-brands fa-facebook" />
        </a>
      </div>
    </div>
  </div>
  <div class="flex justify-end font-catamaran text-lg pb-1 opacity-60">
    <p>All rights reserved 2022. Adora Haus Pty Ltd</p>
  </div>
</template>
