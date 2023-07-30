
export const state = () => ({
    history: [],
  historyPdf: [],

});
  export const getters = {
    history: (s) => s.history,
    historyPdf: (s) => s.historyPdf,

  };

  export const actions = {
    async historyData({ commit }) {
      this.$axios.get(`/histories`).then((res) => {
        commit("historymutate", res.data);
      });
    },

    async historyDataPdf({ commit },payload) {
      this.$axios.get(`/histories/${payload}`,{ responseType: "blob" })
        .then((res) => {
          const blob = new Blob([res.data], { type: 'application/pdf' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `history.pdf`;
          link.click();
          URL.revokeObjectURL(link.href);


        });


    },

  };

  export const mutations = {
    historymutate(state, obj) {
      state.history = obj;
    },
  };
