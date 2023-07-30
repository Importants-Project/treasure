
export const state = () => ({
    digital_services: [],
  });
  export const getters = {
    digital_services: (s) => s.digital_services,
  };
  
  export const actions = {

    async digitalData({ commit }) {
      this.$axios.get(`/digital-services`).then((res) => {
        commit("digitalmutate", res.data);
      });
    },

  };
  
  export const mutations = {
    digitalmutate(state, obj) {
      state.digital_services = obj;
    },
  };
  