
export const state = () => ({
  news: [],
});
export const getters = {
  news: (s) => s.news,
};

export const actions = {
  // NEWS
  async newsData({ commit }, payload) {
    this.$axios.get(`/news?page=${payload.page}`).then((res) => {
      commit("newsmutate", res.data);
    });
  },
  async newsSingleData({ commit}, slug ) {
    this.$axios.get(`/news/${slug}`).then((res) => {
      commit("newsmutate", res.data);
    });
  },
};

export const mutations = {
  newsmutate(state, obj) {
    state.news = obj;
  },
};
