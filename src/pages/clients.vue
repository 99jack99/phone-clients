<script setup lang="ts">
//Imports
import { ref, watch } from "vue";
import type { Ref } from "vue";
import type { Client } from "../interfaces/Client";
import ClientCard from "../ui/clientCard.vue";
import clients_service from "../services/Clients";
import { initials_gen } from "../helpers/initials";
import { sort_by_id } from "../helpers/sorter";

// Vars
let all_clients = ref<undefined | Client[]>();
let search_input = ref<string | undefined>();
let sort_order: Ref<"asc" | "desc"> = ref("asc");

// Methods
let active_clients = async () => {
  await clients_service
    .get_clients()
    .then((res) => {
      all_clients.value = sort_by_id(res.data, sort_order.value);
    })
    .catch((error) => {
      console.log(error);
    });
};

let search_clients = async (search_text: string | undefined) => {
  await clients_service
    .get_filtered_clients(search_text)
    .then((res) => {
      console.log(res.data);

      all_clients.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

let reset_search = () => {
  search_input.value = "";
  active_clients();
};

active_clients();
watch(
  () => sort_order.value,
  () => {
    active_clients();
  }
);
</script>

<template>
  <div class="max-w-screen flex flex-col p-10">
    <div class="flex flex-col gap-10">
      <div class="text-4xl font-semibold">List of clients</div>
      <div class="flex justify-between">
        <div>
          <input
            class="px-4 py-2 rounded-lg bg-slate-200"
            type="text"
            placeholder="Search by name (exact)"
            v-model="search_input"
          />
          <button
            class="px-4 py-2 rounded-lg bg-black text-white ml-5 cursor-pointer hover:bg-slate-900"
            @click="search_clients(search_input)"
          >
            Filter
          </button>
          <button
            class="px-4 py-2 rounded-lg bg-red-700 text-white ml-2 cursor-pointer hover:bg-red-900"
            @click="reset_search()"
          >
            Reset
          </button>
        </div>

        <select
          class="px-4 py-2 rounded-lg bg-slate-200"
          name="select"
          v-model="sort_order"
        >
          <option value="asc">Ascending</option>
          <option value="desc" selected>Descending</option>
        </select>
      </div>

      <div
        v-if="all_clients?.length > 0 || !all_clients"
        class="grid grid-cols-4 gap-4"
      >
        <ClientCard
          v-for="client in all_clients"
          :key="client.id"
          :id="client.id"
          :initials="initials_gen(client.name, client.surname)"
          :fullname="`${client.name} ${client.surname}`"
          :dni="client.dni"
          :email="client.email"
          :phone="client.phone"
        ></ClientCard>
      </div>
      <div v-else class="text-xl font-semibold">
        No clients found, please check again (name must be exact for this
        example)
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
