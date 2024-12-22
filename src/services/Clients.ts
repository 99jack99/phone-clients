import Api from "./api";

export default {
  get_clients() {
    return Api().get(`/clients`);
  },
  get_filtered_clients(filter: string | undefined) {
    return Api().get(`/clients?name=${filter}`);
  },
};
