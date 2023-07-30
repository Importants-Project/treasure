
export const state = () => ({
    init: [],
  });
  export const getters = {
    init: (s) => s.init,
  };

  export const actions = {
    async initData({ commit }) {
      this.$axios.get(`/init`).then((res) => {
        commit("initmutate", res.data);
      });
    },
  };

  export const mutations = {
    initmutate(state, obj) {
      state.init = obj;
    },
  };
