
export const state = () => ({
    laws: [],
  lawsPdf:[]
});
  export const getters = {
    laws: (s) => s.laws,
    lawsPdf: (s) => s.lawsPdf,

  };

  export const actions = {
    async lawsData({ commit }) {
      this.$axios.get(`/laws`).then((res) => {
        commit("lawsmutate", res.data);
      });
    },

    async lawsDataPdf({ commit },payload) {
      this.$axios.get(`/laws/${payload}`,{ responseType: "blob" })
        .then((res) => {
          const blob = new Blob([res.data], { type: 'application/pdf' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `laws.pdf`;
          link.click();
          URL.revokeObjectURL(link.href);
        });
    },
  };

  export const mutations = {
    lawsmutate(state, obj) {
      state.laws = obj;
    },
  };
