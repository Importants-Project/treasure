
export const state = () => ({
    project: [],
  });
  export const getters = {
    project: (s) => s.project,
  };
  
  export const actions = {
    async projectData({ commit }) {
      this.$axios.get(`/projects`).then((res) => {
        commit("projectmutate", res.data);
      });
    },
    async projectSingleData({ commit}, slug ) {
      this.$axios.get(`/project/${slug}`).then((res) => {
        commit("projectmutate", res.data);
      });
    },
  };
  
  export const mutations = {
    projectmutate(state, obj) {
      state.project = obj;
    },
  };