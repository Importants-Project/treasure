
export const state = () => ({
    decisions: [],
    decisionsPdf: [],

  });
  export const getters = {
    decisions: (s) => s.decisions,
    decisionsPdf: (s) => s.decisionsPdf,

  };
  
  export const actions = {
    async decisionsData({ commit }) {
      this.$axios.get(`/decisions`).then((res) => {
        commit("decisionsmutate", res.data);
      });
    },

    async decisionsDataPdf({ commit },item) {
      const extension = item.file.split('.').pop();

      this.$axios.get(`${item.link}`,{ responseType: "blob" })
        .then((res) => {

          const blob = new Blob([res.data], { type: `application/${extension}` });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `decisions.${extension}`;
          link.click();
          URL.revokeObjectURL(link.href);
        });
    },
  };
  
  export const mutations = {
    decisionsmutate(state, obj) {
      state.decisions = obj;
    },
  };