<script setup lang="ts">
// Imports
import { ref } from "vue";
import ClientCard from "../ui/clientCard.vue";
import ProductCard from "../ui/productCard.vue";
import clients_service from "../services/Clients";
import products_service from "../services/Products";
import { initials_gen } from "../helpers/initials";
import { useRoute } from "vue-router";

import type { Client } from "../interfaces/Client";
import type { Product } from "../interfaces/Product";
// Vars
const route = useRoute();
let params = Number(route.params.id);
let client_details = ref<Client | undefined>();
let client_products = ref<Product>();

// Methods
let get_client_profile = async () => {
  await clients_service
    .get_a_client(params)
    .then((res) => {
      client_details.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

let get_products = async () => {
  await products_service
    .get_products()
    .then((res) => {
      console.log(res.data);
      client_products.value = res.data;
    })
    .catch((res) => {
      console.log(res.data);
    });
};

get_client_profile();
get_products();
</script>

<template>
  <div class="flex flex-col items-start justify-center p-10">
    <div class="flex flex-col max-h-60 max-w-96">
      <ClientCard
        :key="client_details.id"
        :id="client_details.id"
        :initials="initials_gen(client_details?.name, client_details?.surname)"
        :fullname="`${client_details.name} ${client_details.surname}`"
        :dni="client_details.dni"
        :email="client_details.email"
        :phone="client_details.phone"
      ></ClientCard>
      <div class="gap-x-5 mt-5">
        <button
          class="px-4 py-2 rounded-lg bg-black text-white cursor-pointer hover:bg-slate-900 w-fit"
        >
          Edit
        </button>
        <button
          class="ml-5 px-4 py-2 rounded-lg bg-red-700 text-white cursor-pointer hover:bg-red-900 w-fit"
        >
          Remove
        </button>
      </div>
    </div>

    <div>
      <div class="text-3xl font-semibold mt-20 mb-10">Services</div>
      <div class="grid grid-cols-3 gap-4">
        <ProductCard
          v-for="product in client_products"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :terminal="product.terminal"
          :createdAt="product.createdAt"
          :mbspeed="product.mbspeed"
          :gbspeed="product.gbspeed"
        ></ProductCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
