export const state = () => ({
    faqs: [],
  });
  export const getters = {
    faqs: (s) => s.faqs,
  };
  
  export const actions = {
    async faqsData({ commit }) {
      this.$axios.get(`/faqs`).then((res) => {
        commit("faqsmutate", res.data);
      });
    },
  };
  
  export const mutations = {
    faqsmutate(state, obj) {
      state.faqs = obj;
    },
  };