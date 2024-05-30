<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Product from "./components/Product.vue";
import Main from "./components/main/Main.vue";
</script>

<template>
  <div class="w-full fixed shadow-md z-50 bg-white">
    <Navbar />
    <Header />
  </div>

  <Main />

  <Product />
</template>

<style scoped></style>
