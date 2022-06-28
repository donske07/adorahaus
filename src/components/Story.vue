<script setup>
import photo from "../assets/adorahaus4.jpg";
</script>
<template>
  <a id="story"></a>
  <div class="flex">
    <div class="w-full font-catamaran bg-adora flex">
      <div class="w-full flex flex-col lg:flex-row items-center">
        <img :src="photo" class="w-full lg:w-1/2" />
        <div class="text-2xl flex items-center px-12">
          <div
            class="flex flex-col justify-center pb-5 xl:pb-5 lg:pb-10 pt-6 space-y-6"
          >
            <h1 class="text-4xl md:text-6xl text-center md:pb-6">Our Story</h1>
            <p>
              Adora Haus is more than just a nail salon. We are a little haven
              specialising in nails, lashes, facials and waxing with a focus on
              providing a service that is ethical and honest in it’s practice.
            </p>
            <p>
              Here at Adora Haus we don’t believe that self care should have a
              detrimental effect on the environment. We strive to reduce our
              footprint through the use of environmentally friendly products and
              equipment. Self care is an act of self love. So take a little time
              for yourself and let us help you look and feel your very best.
            </p>
            <p>
              We are industry specialists and have a burning passion for
              creating gorgeous nails, fluffy lashes and relaxing facials - and
              we want to share this passion with you.
            </p>
            <p>
              Our salon is located in the heart of Port Melbourne. There’s
              plenty of parking spots around and we are also within walking
              distance to public transport so you can reach us without a hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
