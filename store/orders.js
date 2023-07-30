
export const state = () => ({
    orders: [],
    ordersPdf: [],

  });
  export const getters = {
    orders: (s) => s.orders,
    ordersPdf: (s) => s.ordersPdf,

  };
  
  export const actions = {
    async ordersData({ commit }) {
      this.$axios.get(`/orders`).then((res) => {
        commit("ordersmutate", res.data);
      });
    },

    async ordersDataPdf({ commit }, item) {
      console.log(item,'item')
      const extension = item.file.split('.').pop();

      this.$axios.get(`${item.link}`,{ responseType: "blob" })
        .then((res) => {

          const blob = new Blob([res.data], { type: `application/${extension}` });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `orders.${extension}`;
          link.click();
          URL.revokeObjectURL(link.href);
        });
    },
  };
  
  export const mutations = {
    ordersmutate(state, obj) {
      state.orders = obj;
    },
  };