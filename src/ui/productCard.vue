<script setup lang="ts">
defineProps({
  id: Number,
  name: String,
  mbspeed: Number,
  gbspeed: Number,
  terminal_number: Number,
  date: String,
});
</script>

<template>
  <div
    class="p-5 rounded-lg bg-black text-white border-4 border-black shadow-md"
  >
    <div>
      <div class="text-lg font-semibold">{{ name }}</div>
      <div class="text-md">{{ terminal_number }}</div>

      <div class="flex gap-x-4 mt-5 text-black">
        <div
          class="flex items-center justify-center px-2 py-2 rounded-md bg-zinc-50"
        >
          <span class="font-bold">MB</span
          ><span class="ml-2">{{ mbspeed }}</span>
        </div>
        <div
          class="flex items-center justify-center px-2 py-2 rounded-md bg-zinc-50"
        >
          <span class="font-bold">GB</span
          ><span class="ml-2">{{ gbspeed }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
