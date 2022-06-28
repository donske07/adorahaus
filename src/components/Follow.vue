<script setup>
import nails1 from "../assets/nails1.png";
import nails2 from "../assets/nails2.png";
import nails3 from "../assets/nails3.png";
import nails4 from "../assets/nails4.png";
import nails5 from "../assets/nails5.png";
import nails6 from "../assets/nails6.png";
import reel1 from "../assets/reel1.png";
import reel2 from "../assets/reel2.png";
import reel3 from "../assets/reel3.png";
import reel4 from "../assets/reel4.png";
import reel5 from "../assets/reel5.png";
import reel6 from "../assets/reel6.png";
import insta from "../assets/insta.png";
</script>
<template>
  <div class="font-cormorant bg-adora flex flex-col py-12 2xl:items-center">
    <a href="https://www.instagram.com/adorahaus/?hl=en" target="_blank">
      <div class="flex flex-col items-center justify-center w-full space-y-2">
        <h1 class="py-4 text-3xl text-gray-500 font-catamaran">
          - community -
        </h1>
        <div
          class="flex items-center space-x-4 flex-col md:flex-row"
          lg:flex-row
        >
          <img :src="insta" class="md:w-32 w-1/2" />
          <h1 class="text-7xl hidden md:block sm:block">
            Follow Our Instagram
          </h1>
        </div>
        <h1 class="py-4 text-3xl text-gray-500 font-catamaran">@adorahaus</h1>
      </div>
    </a>
    <div class="flex flex-wrap px-6 2xl:w-3/4">
      <div class="p-1 w-1/2 md:w-1/3 lg:w-1/6">
        <img :src="nails1" />
      </div>
      <div class="p-1 w-1/2 md:w-1/3 lg:w-1/6">
        <img :src="nails2" />
      </div>
      <div class="p-1 w-1/2 md:w-1/3 lg:w-1/6">
        <img :src="nails3" />
      </div>
      <div class="p-1 w-1/2 md:w-1/3 lg:w-1/6">
        <img :src="nails4" />
      </div>
      <div class="p-1 w-1/2 md:w-1/3 lg:w-1/6">
        <img :src="nails5" />
      </div>
      <div class="p-1 w-1/2 md:w-1/3 lg:w-1/6">
        <img :src="nails6" />
      </div>
    </div>
    <a href="https://www.instagram.com/adorahaus/?hl=en" target="_blank">
      <h1 class="text-gray-600 w-full text-3xl pt-6 text-center sm:hidden">
        <font-awesome-icon size="xl" icon="fa-brands fa-instagram" />
        Follow Our Instagram
      </h1>
    </a>
  </div>
</template>
