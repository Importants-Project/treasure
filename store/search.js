
export const state = () => ({
    news: [],
  });
  export const getters = {
    news: (s) => s.news,
  };
  
  export const actions = {
    // NEWS
    async searchData({ commit }, payload) {
      this.$axios.get(`/search?name=${payload.name}`).then((res) => {
        commit("searchmutate", res.data);
      });
    },
  };
  
  export const mutations = {
    searchmutate(state, obj) {
      state.news = obj;
    },
  };
  