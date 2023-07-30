<template>
  <div>

    <div>
      <loading :loading="loading"></loading>
    </div>
    <div v-if="!loading">
      <bread-crumbs :head_text="headText" :items="items"></bread-crumbs>
      <div class="container">
        <b-row>
          <b-col cols xl="9" lg="9" md="12" sm="12">

            <div class="constitution_content responsebox" style="text-align: unset">
              <div class="d-flex" style="align-items: center; justify-content: space-between">

                <h4 v-if="historyData?.data?.file !== null" style="text-align: left">{{ historyData?.data?.title }}</h4>
                <div class="d-flex">
                  <a :href="historyData?.data?.file !== null" target="_blank" >
                    <img v-if="historyData?.data?.file !== null" style="width: 15px; margin-right: 10px; "
                         src="../assets/images/file-invoice-solid.svg" alt="file-invoice-solid.svg"></a>

                  <img v-if="historyData?.data?.file?.endsWith('.pdf')"
                       style="width: 15px"
                       src="../assets/images/download-solid.svg"
                       alt="download-solid.svg"
                       @click="download">


                </div>
              </div>
              <div style="text-align: center"><img style="width: 300px;" :src="historyData.data.logo" alt="historyData.data.logo"></div>
              <div class="content" v-html="historyData.data?.description">
              </div>
              <social-footer class="mt-4"></social-footer>
            </div>
          </b-col>

          <b-col cols lg="3">
            <side-bar :items="historyData.links"></side-bar>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";
import SideBar from "@/components/SideBar.vue";
export default {
  data() {
    return {
      loading: true,

      headText: "Tarix",

      history: [],
      items: [

        {
          text: "Haqqımızda",
          href: "#",
        },
        {
          text: "Tarix",
        },
      ],
      sidebar: [
        {
          title: "Əsasnamə",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/esasname",
        },
        {
          title: "Fəaliyyət",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/fealiyyet",
        },
        {
          title: "Rəhbərlik",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/rehberlik",
        },
        {
          title: "Struktur",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/struktur",
        },
        {
          title: "Xəzinədarlıq idarələri",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/xezinedarliq-idareleri",
        },
      ],
    };
  },
  components: {
    SocialFooter,
    BreadCrumbs,
    SideBar,
  },
  computed: {
    ...mapGetters({ historyData: "history/history" }),

  },
  methods: {
    async getHistory() {
      await this.$store.dispatch("history/historyData");
      this.history = this.historyData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    async download() {
      await this.$store.dispatch("history/historyDataPdf",this.historyData.data.id);
    },
  },
  created() {
    this.getHistory();
  },
};
</script>


