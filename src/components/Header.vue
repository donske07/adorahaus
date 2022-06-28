<script setup>
import logoUrl from "../assets/logo.png";
import photo from "../assets/adorahaus2.jpg";
import { ref } from "vue";
const showMobileMenu = ref(false);
const toggleMobileMenu = () => (showMobileMenu.value = !showMobileMenu.value);
</script>

<template>
  <div class="font-catamaran font-bold">
    <!-- Mobile Menu -->
    <div class="bg-adora lg:hidden xl:hidden 2xl:hidden pb-10">
      <div class="bg-adora fixed flex flex-col w-full">
        <div
          class="px-4 flex items-center justify-between w-full"
          @click="toggleMobileMenu"
        >
          <a href="#"><img class="w-60 md:w-72" :src="logoUrl" /></a>
          <font-awesome-icon
            size="2xl"
            class="pr-4 md:pr-12"
            icon="fa-solid fa-bars"
          />
        </div>

        <div
          class="lg:hidden bg-adora xl:hidden flex flex-col px-4 py-4 text-black pb-12 hover:text-black"
          v-show="showMobileMenu"
        >
          <div class="flex flex-col justify-between space-y-2">
            <div class="flex flex-col text-lg tracking-widest space-y-2">
              <a
                @click="toggleMobileMenu()"
                href="#story"
                class="hover:opacity-60 hover:underline underline-offset-8"
                >OUR STORY</a
              >
              <a
                href="#service"
                @click="toggleMobileMenu()"
                class="hover:opacity-60 hover:underline underline-offset-8"
                >SERVICE MENU</a
              >
              <a
                href="#contact"
                @click="toggleMobileMenu()"
                class="hover:opacity-60 hover:underline underline-offset-8"
                >BOOK NOW</a
              >
            </div>
            <div class="flex pt-2 space-x-4 opacity-70">
              <a target="_blank" href="https://www.instagram.com/adorahaus/">
                <font-awesome-icon
                  size="2xl"
                  icon="fa-brands fa-instagram"
                /> </a
              ><a
                target="_blank"
                href="https://www.facebook.com/Adora-Haus-101252962025409"
              >
                <font-awesome-icon size="2xl" icon="fa-brands fa-facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-24 md:pt-40 flex flex-col justify-center items-center">
        <p
          class="text-4xl md:text-6xl px-10 py-4 md:py-10 font-cormorant text-center"
        >
          Always Make Room For a Little Beauty in Your Life
        </p>
        <div class="p-2 md:p-0 md:w-5/6">
          <img :src="photo" />
        </div>
      </div>
    </div>

    <!-- Desktop menu -->
    <div
      class="font-catamaran z-10 font-bold flex flex-col justify-between w-full px-10 text-black items-center h-fit pb-10 2xl:h-192 h-160 hover:text-black bg-adora hidden lg:block xl:block 2xl:block"
    >
      <div
        class="text-black text-base leading-none font-black flex items-center justify-between w-full"
      >
        <div class="flex w-1/3 space-x-6">
          <a
            href="#story"
            class="hover:opacity-60 hover:underline underline-offset-8"
            >OUR STORY</a
          >
          <a
            href="#service"
            class="hover:opacity-60 hover:underline underline-offset-8"
            >SERVICE MENU</a
          >
          <a
            href="#contact"
            class="hover:opacity-60 hover:underline underline-offset-8"
            >BOOK NOW</a
          >
        </div>
        <div class="flex w-1/3 justify-center">
          <img class="w-96" :src="logoUrl" />
        </div>
        <div class="flex w-1/3 justify-end space-x-4 opacity-70">
          <a target="_blank" href="https://www.instagram.com/adorahaus/">
            <font-awesome-icon size="xl" icon="fa-brands fa-instagram" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/Adora-Haus-101252962025409"
          >
            <font-awesome-icon size="xl" icon="fa-brands fa-facebook" />
          </a>
        </div>
      </div>
      <div class="pt-20 z-40">
        <div class="flex justify-center items-center">
          <p
            class="xl:text-6xl md:text-5xl px-2 font-cormorant text-center w-1/4 2xl:w-1/5"
          >
            Always Make Room For a Little Beauty in Your Life
          </p>
          <div class="w-3/4 xl:w-4/6">
            <img :src="photo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
