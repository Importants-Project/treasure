
export const state = () => ({
    td: [],
  });
  export const getters = {
    td: (s) => s.td,
  };
  
  export const actions = {
    async tdData({ commit }) {
      this.$axios.get(`/contacts`).then((res) => {
        commit("tdmutate", res.data);
      });
    },
  };
  
  export const mutations = {
    tdmutate(state, obj) {
      state.td = obj;
    },
  };