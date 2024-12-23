<script setup lang="ts">
defineProps({
  id: Number,
  initials: String,
  fullname: String,
  dni: String,
  email: String,
  phone: String,
});
</script>

<template>
  <RouterLink
    :to="`${id}`"
    class="p-5 rounded-lg bg-zinc-50 text-black border-4 border-black shadow-md hover:bg-black hover:text-white duration-300 cursor-pointer"
  >
    <div class="flex items-center justify-between text-right">
      <div
        class="rounded-full bg-slate-200 size-20 flex items-center justify-center"
      >
        <span class="font-bold text-xl text-black">{{ initials }}</span>
      </div>
      <div>
        <div class="text-lg font-semibold">{{ fullname }}</div>
        <div class="text-md">{{ dni }}</div>
      </div>
    </div>
    <div class="mt-10">
      <div>{{ email }}</div>
      <div>{{ phone }}</div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped></style>
