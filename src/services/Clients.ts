import Api from "./api";

export default {
  get_clients() {
    return Api().get(`wstIC2/clients`);
  },
  get_filtered_clients(filter: string | undefined) {
    return Api().get(`wstIC2/clients?name=${filter}`);
  },

  get_a_client(id: number) {
    return Api().get(`wstIC2/clients/${id}`);
  },
};
