
export const state = () => ({
    information: [],
  informationPdf: [],
  });
  export const getters = {
    information: (s) => s.information,
    informationPdf: (s) => s.informationPdf,

  };

  export const actions = {
    // NEWS
    async informationData({ commit }) {
      this.$axios.get(`/informations`).then((res) => {
        commit("infomutate", res.data);
      });
    },
    async informationSingleData({ commit}, slug ) {
      this.$axios.get(`/information/${slug}`).then((res) => {
        commit("infomutate", res.data);
      });
    },

    async informationPdf({ commit}, item) {

      const extension = item.file.split('.').pop();

      this.$axios.get(`/information${item.link}`,{ responseType: "blob" })
        .then((res) => {
          const blob = new Blob([res.data], { type: `application/${extension}` });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `information.${extension}`;
          link.click();
          URL.revokeObjectURL(link.href);
        });

    },

  };

  export const mutations = {
    infomutate(state, obj) {
      state.information = obj;
    },
  };
