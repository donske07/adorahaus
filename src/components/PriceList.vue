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
          <div class="w-5/6 py-2 text-md space-y-2">
            <h1>
              We also offer range of facial services, Please contact our salon
              for more information.
            </h1>
            <h1>
              * Manicure: 30 mins <br />
              Cuticle care, polish application, hydrating hand mask, hand
              massage &amp; hot towel.
            </h1>
            <h1>
              * Pedicure: 45 mins <br />
              Detox soak, shape, cuticle care, callus treatment, exfoliating
              scrub, hand massage, mask treatment, hot stone massage, paint
              &amp; oil.
            </h1>
            <h1>
              * Press on gel extensions is 100% soak-off odorless soft gel nail
              system that instantly adds length to your natural nails without
              the use of acrylic or hard gel that can last up to 3-4 weeks
              (depending on your nail growth).
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
