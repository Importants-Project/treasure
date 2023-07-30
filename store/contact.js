
export const state = () => ({
    contact: [],
  });
  export const getters = {
    contact: (s) => s.contact,
  };
  
  export const actions = {
    async contactData({ commit }) {
      this.$axios.get(`/settings`).then((res) => {
        commit("contactmutate", res.data);
      });
    },
  };
  
  export const mutations = {
    contactmutate(state, obj) {
      state.contact = obj;
    },
  };