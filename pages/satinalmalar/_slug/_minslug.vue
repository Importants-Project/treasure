<template>
  <div>
    <div>
      <loading :loading="loading"></loading>
    </div>
    <div>
      <bread-crumbs2 :headText="singleUltraPurchasesData.data?.title" :items="items"></bread-crumbs2>
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="news_content responsebox">
              <div v-for="item in singleUltraPurchasesData">
                <div class="content" v-html="item.description">
                </div>
              </div>
              <social-footer class="mt-5"></social-footer>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>

</template>


<script>
import {mapGetters} from "vuex";
import BreadCrumbs2 from "@/components/bread_crumbs2";
import SocialFooter from "@/components/social_footer";

export default {
  data() {
    return {
      loading: true,

      singlePurchasesData: [],
      perPage: 1,
      currentPage: 1,
      items: [

        {
          text: "Faydalı",
          href: "#",
        },
        {
          text: "Satınalmalar",
          href: "#",
        },
      ],
    };
  },
  components:{
    BreadCrumbs2,
    SocialFooter,
  },
  computed: {

    ...mapGetters({singleUltraPurchasesData: "purchases/purchases"}),
    rows() {
      return this.singleUltraPurchasesData.data?.length;
    },
  },
  methods: {
    async getSingleUltraPurchases() {
      await this.$store.dispatch(
        "purchases/purchasesUltraSingleData",
        {slug: this.$route.params.slug, minslug: this.$route.params.minslug}
      );
      console.log("dwqdwqdqqwd", this.$route.params.minslug);
      this.singleUltraPurchases = this.singleUltraPurchasesData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    console.log(this.$route.params);
  },

  created() {
    this.getSingleUltraPurchases();
  },
};
</script>

<style lang="scss" scoped>
.thumb-example {
  height: 480px;
}


.news_content {
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 200px;

  .slider {
    margin-top: 32px;
  }

  .content {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #4b5563;
  }
}
</style>
