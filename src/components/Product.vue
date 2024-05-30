<script setup>
import { products } from "./product.js";
</script>

<template>
  <div class="flex flex-col gap-10 sticky top-0">
    <div class="grid grid-cols-6 gap-9 px-8">
      <div
        v-for="item in products"
        class="flex flex-col gap-2 p-2 shadow-lg rounded-md items-center"
      >
        <div class="img"><img :src="item.img" alt="hat" /></div>

        <div class="price flex gap-4 px-2">
          <p>{{ item.newPrice }}₽</p>
          <p class="line-through ">{{ item.oldPrice }}₽</p>
        </div>

        <p class="text-xs">
          {{ item.description }}
        </p>
      </div>
    </div>
    <div class="flex justify-end px-8">
      <button class="px-12 py-2 border-2 border-purple-800">Все товары</button>
    </div>
  </div>
</template>

<style></style>
