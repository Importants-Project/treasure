
export const state = () => ({
    purchases: [],
  });
  export const getters = {
    purchases: (s) => s.purchases,
  };
  
  export const actions = {
    async purchasesData({ commit }) {
      this.$axios.get(`/purchases`).then((res) => {
        commit("purchasesmutate", res.data);
      });
    },
    async purchasesSingleData({ commit}, payload ) {
        this.$axios.get(`/purchase/${payload.slug}/details?page=${payload.page}`).then((res) => {
          commit("purchasesmutate", res.data);
        });
      },
      async purchasesUltraSingleData({ commit}, payload ) {
        this.$axios.get(`/purchase/${payload.slug}/details/${payload.minslug}`).then((res) => {
          commit("purchasesmutate", res.data);
        });
      },
  };

  
  
  export const mutations = {
    purchasesmutate(state, obj) {
      state.purchases = obj;
    },
  };