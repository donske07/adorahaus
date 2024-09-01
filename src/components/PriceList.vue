<script setup>
import priceList from "../files/pricelist.json";
import photo from "../assets/adorahaus3.jpg";
import Row from "./Row.vue";
</script>
<template>
  <a id="service"></a>
  <div class="flex">
    <div class="w-full bg-adora items-center flex flex-col lg:flex-row">
      <div class="xl:w-7/12 p-6"><img :src="photo" /></div>
      <div class="xl:w-5/12">
        <div
          class="font-catamaran md:py-10 flex flex-col items-center justify-center w-full"
        >
          <div
            class="w-full text-2xl flex justify-between items-center flex-col"
          >
            <h1 class="text-4xl md:text-6xl pb-4 md:pb-10">
              Treatments & Prices
            </h1>
            <Row
              v-for="service in priceList"
              :key="service.name"
              :service="service"
            ></Row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
