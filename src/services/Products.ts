import Api from "./api";

export default {
  get_products() {
    return Api().get(`/AzXe8A/products`);
  },
};
