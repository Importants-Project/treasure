
export const state = () => ({
    constitution: [],
  constitutions: [],
  constitutionsPdf: [],

});
  export const getters = {
    constitution: (s) => s.constitution,
    constitutions: (s) => s.constitutions,
    constitutionsPdf: (s) => s.constitutionsPdf,
  };

  export const actions = {
    async constitutionData({ commit }) {
      this.$axios.get(`/constitution`).then((res) => {
        commit("constitutionmutate", res.data);
      });
    },


    async constitutionsDataPdf({ commit },payload) {
      this.$axios.get(`/constitutions/${payload}`,{ responseType: "blob" })
        .then((res) => {
           const blob = new Blob([res.data], { type: 'application/pdf' });
           const link = document.createElement('a');
           link.href = URL.createObjectURL(blob);
           link.download = `constitution.pdf`;
           link.click();
           URL.revokeObjectURL(link.href);
        });
    },


    async constitutionsData({ commit }) {
      this.$axios.get(`/constitutions`,).then((res) => {
        commit("constitutionsmutate", res.data);

      });
    },

  };

  export const mutations = {
    constitutionmutate(state, obj) {
      state.constitution = obj;
    },

    constitutionsmutate(state, obj) {
      state.constitutions = obj;
    },
  };
