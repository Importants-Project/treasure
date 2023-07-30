
export const state = () => ({
    structure: [],
  });
  export const getters = {
    structure: (s) => s.structure,
  };
  
  export const actions = {
    async structureData({ commit }) {
      this.$axios.get(`/structure`).then((res) => {
        commit("structuremutate", res.data);
      });
    },
  };
  
  export const mutations = {
    structuremutate(state, obj) {
      state.structure = obj;
    },
  };