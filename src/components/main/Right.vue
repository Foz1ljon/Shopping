<script setup>
import { data, data1, data2, data3 } from "./right";

import { onMounted } from "vue";
import emblaCarouselVue from "embla-carousel-vue";

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true });

onMounted(() => {
  if (emblaApi.value) {
    console.log(emblaApi.value.slideNodes()); // Access API
  }
});
</script>

<template>
  <div class="flex flex-col w-[79%]">
    <div class="flex justify-center flex-wrap px-6 py-8">
      <!-- 1 row  -->
      <div class="flex flex-col gap-4">
        <div class="flex flex-col px-5">
          <h1 class="font-semibold text-base">Укладка волос</h1>
          <p class="font-light" v-for="(item, index) in data" :key="index">
            {{ item }}
          </p>
        </div>
        <div class="flex flex-col px-5">
          <h1 class="font-semibold text-base">Товары для здоровья</h1>
          <p class="font-light" v-for="(item, index) in data1" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
      <!-- 1 row  -->

      <!-- 2 row  -->
      <div class="flex flex-col gap-16">
        <div class="flex flex-col px-5">
          <h1 class="font-semibold text-base">Бритьё и стрижка</h1>
          <p class="font-light" v-for="(item, index) in data2" :key="index">
            {{ item }}
          </p>
        </div>
        <div class="flex flex-col px-5">
          <h1 class="font-semibold text-base">Товары для детей</h1>
          <p class="font-light" v-for="(item, index) in data3" :key="index">
            {{ item }}
          </p>
        </div>
      </div>

      <!-- 2 row  -->

      <!-- 3 row  -->
      <div class="flex flex-col gap-16">
        <div class="flex flex-col px-5">
          <h1 class="font-semibold text-base">Бритьё и стрижка</h1>
          <p class="font-light" v-for="(item, index) in data2" :key="index">
            {{ item }}
          </p>
        </div>
        <div class="flex flex-col px-5">
          <h1 class="font-semibold text-base">Товары для детей</h1>
          <p class="font-light" v-for="(item, index) in data3" :key="index">
            {{ item }}
          </p>
        </div>
      </div>

      <!-- 3 row  -->

      <!-- 4 row  -->
      <div class="flex flex-col gap-16">
        <div class="flex flex-col px-5">
          <h1 class="font-semibold text-base">Бритьё и стрижка</h1>
          <p class="font-light" v-for="(item, index) in data2" :key="index">
            {{ item }}
          </p>
        </div>
        <div class="flex flex-col px-5">
          <h1 class="font-semibold text-base">Товары для детей</h1>
          <p class="font-light" v-for="(item, index) in data3" :key="index">
            {{ item }}
          </p>
        </div>
      </div>

      <!-- 4 row  -->
    </div>

    <div class="overflow-hidden ml-9 " ref="emblaRef">
      <div class="flex">
        <div class="embla__slide">
          <img src="/image.png" width="970" alt="" />
        </div>
        <div class="embla__slide">
          <img src="/image.png" width="970" alt="" />
        </div>
        <div class="embla__slide ">
          <img src="/image.png" width="970" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
</style>
