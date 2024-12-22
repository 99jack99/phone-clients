import Api from "./api";

export default {
  get_clients() {
    return Api().get(`/clients`);
  },
  get_filtered_clients(filter: string) {
    return Api().get(`/clients?Name=${filter}`);
  },
};
