
export const state = () => ({
    decrees: [],
    decreesPdf: [],

  });
  export const getters = {
    decrees: (s) => s.decrees, 
    decreesPdf: (s) => s.decreesPdf, 

  };
  
  export const actions = {
    async decreesData({ commit }) {
      this.$axios.get(`/decrees`).then((res) => {
        commit("decreesmutate", res.data);
      });
    },
    async decreesSingleData({ commit}, slug ) {
      this.$axios.get(`/decree/${slug}`).then((res) => {
        commit("decreesmutate", res.data);
      });
    },

    async decreesDataPdf({ commit}, item) {

      const extension = item.file.split('.').pop();

      this.$axios.get(`${item.link}`,{ responseType: "blob" })
        .then((res) => {

          const blob = new Blob([res.data], { type: `application/${extension}` });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `decrees.${extension}`;
          link.click();
          URL.revokeObjectURL(link.href);
        });

    },
  };
  
  export const mutations = {
    decreesmutate(state, obj) {
      state.decrees = obj;
    },
  };