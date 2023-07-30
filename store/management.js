
export const state = () => ({
    management: [],
  });
  export const getters = {
    management: (s) => s.management,
  };
  
  export const actions = {
    async managementData({ commit }) {
      this.$axios.get(`/management`).then((res) => {
        commit("managementmutate", res.data);
      });
    },
  };
  
  export const mutations = {
    managementmutate(state, obj) {
      state.management = obj;
    },
  };