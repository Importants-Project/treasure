<template>
  <div>
    <div>
      <loading :loading="loading"></loading>
    </div>
    <div class="container">

      <div class="news_bread_crumb">
        <div class="head_text">Xəbərlər</div>
        <div class="bread_crumb_text">
          <nuxt-link to="/">Əsas səhifə</nuxt-link>
          >
          <nuxt-link to="xeberler">Xəbərlər</nuxt-link>
        </div>
      </div>
      <div class="news">
        <!-- {{ newsData.meta }} -->
        <b-row>
          <b-col lg="4" md="6" v-for="news in newsData.data" id="news">
            <nuxt-link exact :to="`/xeberler/${news.slug}`">
              <div class="news_items">
                <div class="news_date">
                  <span>{{ news.created_at }}</span>
                </div>
                <div class="news_text" >
                  <p style="word-break: unset">
                    {{ news.title }}
                  </p>
                </div>
              </div>
            </nuxt-link>
          </b-col>
        </b-row>
        <b-pagination
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="rows"
          aria-controls="news"
          @change="getNews"
          ref="aaa"
        ></b-pagination>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      perPage: 12,
      loading: true,

      currentPage: 1,
      news: [],

    };
  },
  computed: {
    ...mapGetters({newsData: "news/news"}),
    ...mapGetters({searchData: "search/news"}),

    rows() {
      return this.newsData.meta?.total;
    },
  },
  methods: {
    async getNews() {
      // console.log('E23EE32E23',this.$refs.aaa);

      this.currentPage = this.$refs.aaa.currentPage
      await this.$store.dispatch("news/newsData", {page: this.currentPage});
      this.news = this.newsData;
      window.scrollTo({top: 0});

      setTimeout(() => {
        this.loading = false;
      }, 1000);

      // console.log(this.newsData.meta.current_page);

    },
  },
  mounted() {
    this.getNews();
  },

  // fetch(){

  //  console.log(this.$store.dispatch('news/newsData'));
  // }
};
</script>
