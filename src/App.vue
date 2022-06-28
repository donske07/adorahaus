<script setup>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import PriceList from "./components/PriceList.vue";
import Story from "./components/Story.vue";
import Follow from "./components/Follow.vue";
import Footer from "./components/Footer.vue";
import Reviews from "./components/Reviews.vue";
</script>

<template>
  <Header></Header>
  <Banner></Banner>
  <Story></Story>
  <div class="h-12 md:h-24"></div>
  <Reviews></Reviews>
  <div class="h-12 md:h-24"></div>
  <PriceList></PriceList>
  <div class="h-12 md:h-24"></div>
  <Follow></Follow>
  <div class="h-12 md:h-24"></div>
  <Footer></Footer>
</template>
