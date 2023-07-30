
export const state = () => ({
    regulation: [],
  });
  export const getters = {
    regulation: (s) => s.regulation,
  };
  
  export const actions = {
    async regulationData({ commit }) {
      this.$axios.get(`/regulation`).then((res) => {
        commit("regulationmutate", res.data);
      });
    },
  };
  
  export const mutations = {
    regulationmutate(state, obj) {
      state.regulation = obj;
    },
  };