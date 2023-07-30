<template>
  <div>
    <div>
      <loading :loading="loading"></loading>
    </div>

    <div v-if="!loading">

    <home-slider :slider="initData.sliders"></home-slider>
    <useful-links :useful="initData.links"></useful-links>
    <news-section :news="initData.news"></news-section>
    <for-users :forUsers="initData.instructions"></for-users>
    <useful-sliders :transitions="initData.transitions"></useful-sliders>
    <contact-us></contact-us>
    </div>


  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeSlider from "@/components/home_slider";
import UsefulLinks from "@/components/useful_links";
import NewsSection from "@/components/news_section";
import ForUsers from "@/components/for_users";
import UsefulSliders from "@/components/useful_sliders";
import ContactUs from "@/components/contact_us";
import Loading from "@/components/loading.vue";

export default {
  name: "IndexPage",
  data(){
    return {
      loading: true,

      init: []
    }
  },
  components: {
    HomeSlider,
    UsefulLinks,
    ForUsers,
    UsefulSliders,
    ContactUs,
    NewsSection,
    Loading
  },
  computed: {
    ...mapGetters({ initData: "mainpage/init" }),
  },
  methods: {
    async getInit() {

      await this.$store.dispatch("mainpage/initData");
      this.init = this.initData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);

    },
  },
  created() {
    this.getInit();
  },


};
</script>
