
export const state = () => ({
    features: [],
  featuresPdf: [],

});
  export const getters = {
    features: (s) => s.features,
    featuresPdf: (s) => s.featuresPdf,

  };

  export const actions = {

    async featuresData({ commit }) {
      this.$axios.get(`/features`).then((res) => {
        commit("featuresmutate", res.data);
      });
    },
    async featuresSingleData({ commit}, slug ) {
        this.$axios.get(`/feature/${slug}`).then((res) => {
          commit("featuresmutate", res.data);
        });
      },

    async featuresPdf({ commit}, item) {

      console.log(this.$router.currentRoute.fullPath)
      const extension = item.file.split('.').pop();

      this.$axios.get(`/feature${item.link}`,{ responseType: "blob" })
        .then((res) => {

          const blob = new Blob([res.data], { type: `application/${extension}` });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `key_indicator.${extension}`;
          link.click();
          URL.revokeObjectURL(link.href);
        });

    },

  };

  export const mutations = {
    featuresmutate(state, obj) {
      state.features = obj;
    },


};
