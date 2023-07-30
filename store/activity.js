
export const state = () => ({
    activity: [],
  });
  export const getters = {
    activity: (s) => s.activity,
  };
  
  export const actions = {
    async activityData({ commit }) {
      this.$axios.get(`/activities`).then((res) => {
        commit("activitymutate", res.data);
      });
    },
  };
  
  export const mutations = {
    activitymutate(state, obj) {
      state.activity = obj;
    },
  };