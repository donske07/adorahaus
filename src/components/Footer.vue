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
    <div class="md:w-1/2 text-gray-500 flex justify-center md:justify-between">
      <div class="flex flex-col justify-start px-10 space-y-2">
        <a href="#"><img class="w-96" :src="logoUrl" /></a>
        <h1 class="font-cormorant py-2 text-3xl md:text-4xl">Working Hours</h1>
        <div>
          <p class="text-2xl">Mon - Weds: 9:30am - 5:30pm</p>
          <p class="text-2xl">Thurs - Fri: 9:30am - 7:00pm</p>
          <p class="text-2xl">Sat: 9am - 5:30pm</p>
          <p class="text-2xl">Sun: Closed</p>
        </div>

        <div class="pt-2 flex flex-col text-xl">
          <a href="tel:03-90775896" class="space-x-4">
            <font-awesome-icon icon="fa-solid fa-phone"></font-awesome-icon>

            <span>03 90775896</span>
          </a>
          <a href="mailto:info@adorahaus.com.au" class="space-x-4">
            <font-awesome-icon icon="fa-solid fa-envelope"> </font-awesome-icon>

            <span> info@adorahaus.com.au </span>
          </a>
          <a class="space-x-4" href="https://goo.gl/maps/CLA5Mtc2NwjcQR2K6">
            <font-awesome-icon icon="fa-solid fa-shop"></font-awesome-icon>
            <span
              >313 Bay Street<br />
              Port Melbourne<br />VIC 3207
            </span>
          </a>
        </div>
      </div>
      <div class="hidden md:flex flex pt-12 md:pt-2 space-x-4 pr-10 md:pr-2">
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
  <div
    class="flex justify-center md:justify-end font-catamaran text-lg py-1 text-gray-500"
  >
    <p>All rights reserved 2022. Adora Haus Pty Ltd</p>
  </div>
</template>
