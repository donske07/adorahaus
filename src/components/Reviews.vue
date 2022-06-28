<script setup>
import photo from "../assets/lash.jpg";
import photo2 from "../assets/lash2.jpg";
import reviews from "../files/reviews.json";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

const shuffedReviews = shuffleArray(reviews).slice(0, 5);
</script>
<template>
  <div class="flex">
    <div class="w-full font-catamaran bg-adora flex">
      <div class="w-full flex flex-col lg:flex-row items-center">
        <img :src="photo" class="hidden md:flex md:w-2/5" />
        <img :src="photo2" class="md:hidden w-5/6" />
        <div class="text-2xl flex items-center md:px-12">
          <div
            class="flex flex-col justify-center pb-5 xl:pb-5 lg:pb-10 pt-6 space-y-6"
          >
            <h1 class="text-4xl md:text-6xl text-center hidden md:flex md:py-6">
              Testemonials & Thoughts
            </h1>
            <h1 class="md:hidden text-4xl md:text-6xl text-center px-2 md:pb-6">
              Testemonials <br />& Thoughts
            </h1>
            <div v-for="review in shuffedReviews">
              <h1 class="text-center text-3xl">{{ review.name }}</h1>
              <div class="flex justify-center">
                <p class="text-xl text-center w-4/5">{{ review.comment }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
