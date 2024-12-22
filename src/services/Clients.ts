import Api from "./api";

export default {
  get_clients() {
    return Api().get(`/clients`);
  },
};
