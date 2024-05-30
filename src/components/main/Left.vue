<script setup>
import { data, data2 } from "./left";


</script>

<template>
  <div class="flex flex-col px-12 py-7 border-2 bg-blc">
    <!-- Aksiya >> -->

    <p class="flex gap-1 py-2 font-semibold">
      <img src="../../assets/fire.svg" alt="fire" /> Акции
    </p>
    <p v-for="(item, index) in data" :key="index" class="py-1 px-3 font-medium">
      {{ item }}
    </p>
    <!-- Krasota >> -->

    <p class="font-semibold px-3 py-2 bg-white">Красота и здоровье</p>

    <p
      v-for="(item, index) in data2"
      :key="index"
      class="py-1 px-3 font-medium"
    >
      {{ item }}
    </p>

    <!-- Other Menu >>>  -->
    <p class="flex gap-1 py-2 font-semibold">
      <img src="../../assets/diamond.svg" alt="fire" /> Premium
    </p>
    <p class="flex gap-1 py-2 font-semibold">
      <img src="../../assets/discount.svg" alt="fire" /> Уцененные товары
    </p>
  </div>
</template>

<style></style>
