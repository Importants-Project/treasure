<template>
  <div>
    <div>
      <loading :loading="loading"></loading>
    </div>
    <div class="container">
      <div class="news">
        <b-row>
          <b-col lg="4" md="6" v-for="news in searchData.data" id="news">
            <nuxt-link exact :to="`/xeberler/${news.slug}`">
              <div class="news_items">
                <div class="news_date">
                  <span>{{ news.created_at }}</span>
                </div>
                <div class="news_text">
                  <p>
                    {{ news.title }}
                  </p>
                </div>
              </div>
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
      <div v-if="!searchData.data?.length ">
        <div class="search_info p-5 mb-4 bg-light text-center">
          <p>Axtardığınıza uyğun nəticə tapılmadı!</p>
          <nuxt-link exact to="/">Əsas səhifəyə qayıt</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.search_info {
  border-radius: 8px;

  p {
    font-size: 28px;
  }

  a {
    margin-top: 10px;
    font-size: 20px;
    color: #374151;
  }
}
</style>
<script>
import {mapGetters} from "vuex";

export default {

  data(){
    return{
      loading: true,

    }
  },

  methods: {
    async getSearch() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.getSearch();
  },
  computed: {
    ...mapGetters({searchData: "search/news"}),
  },
};
</script>
