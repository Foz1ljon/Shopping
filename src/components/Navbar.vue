<script setup></script>

<template>
  <nav>
    <div class="flex justify-end py-2 px-14">
      <div class="w-full flex justify-end gap-[33%] items-center">
        <!-- Select1 menu start >>>> -->
        <div class="flex gap-5">
          <select id="fruits" class="bg-white outline-none">
            <option v-for="(item, index) in 3" :key="index" :value="item">
              Покупателям
            </option>
          </select>
          <select id="fruits" class="bg-white outline-none">
            <option v-for="(item, index) in 3" :key="index" :value="item">
              Покупателям
            </option>
          </select>
          <p>Частые вопросы</p>
        </div>
        <!-- Select1  menu end>>>> -->

        <!-- Select1 menu start >>>> -->

        <div class="flex px-1 divide-x gap-2">
          <img src="../assets/ru-flag.svg" alt="ru" />
          <p class="px-1">Русский</p>
          <select id="fruits" class="bg-white outline-none">
            <option value="rubl">₽</option>
            <option value="dollar">$</option>
            <option value="euro">€</option>
          </select>
        </div>
        <!-- Select1 menu start >>>> -->
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
