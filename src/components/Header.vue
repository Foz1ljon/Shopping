<script setup></script>

<template>
  <div class="flex items-center gap-7 justify-center pb-5">
    <!-- Hamburger Logo>>> -->
    <div class="menu-icon flex gap-7 items-center">
      <button class="p-6 bg-hbg">
        <img src="../assets/hamburger.svg" alt="" />
      </button>

      <div><img src="../assets/logo.png" width="188" alt="logo" /></div>
    </div>

    <!-- Input Selected >>> -->
    <div class="flex relative border-2 border-purple-800">
      <input type="text" class="py-3 px-56" />
      <select
        id="fruits"
        class="bg-[#F5EBF1] outline-none px-5 py-3 top-0.5 absolute"
      >
        <option v-for="(item, index) in 3" :key="index" :value="item">
          Везде
        </option>
      </select>
      <img
        class="absolute right-5 top-3"
        src="../assets/search.svg"
        alt="search"
      />
    </div>

    <div class="flex gap-6 px-3">
      <img src="../assets/user.svg" alt="user" />
      <img src="../assets/like.svg" alt="like" />
      <img src="../assets/cart.svg" alt="cart" />
    </div>
  </div>
</template>

<style></style>
