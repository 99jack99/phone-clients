<script setup lang="ts">
//Imports
import { ref } from "vue";
import ClientCard from "../ui/clientCard.vue";
import clients from "../services/Clients";

// Vars
let all_clients = ref();

// Methods
let active_clients = async () => {
  await clients
    .get_clients()
    .then((res) => {
      console.log(res.data);
      all_clients.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

let initials_gen = (name: string, surname: string) => {
  return `${name[0]}${surname[0]}`;
};

active_clients();
</script>

<template>
  <div class="max-w-screen flex flex-col p-10">
    <div class="flex flex-col gap-10">
      <div class="text-4xl font-semibold">List of clients</div>
      <div>
        <input
          class="px-4 py-2 rounded-lg bg-slate-200"
          type="text"
          placeholder="Search"
        />
      </div>
      <div class="grid grid-cols-4 gap-4">
        <ClientCard
          v-for="client in all_clients"
          :key="client.id"
          :id="client.id"
          :initials="initials_gen(client.Name, client.Surname)"
          :fullname="`${client.Name} ${client.Surname}`"
          :dni="client.Dni"
          :email="client.Email"
          :phone="client.Phone"
        ></ClientCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
