<template>
<div>


  <div>
    <loading :loading="loading"></loading>
  </div>

    <div v-if="!loading">
      <bread-crumbs :head_text="headText" :items="items"></bread-crumbs>
      <div class="container">
        <b-row>
          <b-col cols md="12" sm="12" xl="9" lg="9">
            <div class="regulation_content responsebox">
              <div class="content" v-html="regulationData.data?.description">
              </div>
              <social-footer class="mt-4"></social-footer>
            </div>
          </b-col>
          <b-col cols lg="3">
            <side-bar :items="regulationData.links"></side-bar>
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

        loading : true,

        headText: "Əsasnamə",

        regulation: [],
        items: [

          {
            text: "Haqqımızda",
            href: "#",
          },
          {
            text: "Əsasnamə",
          },
        ],
        sidebar: [
        {
          title: "Tarix",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/tarix",
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
      ...mapGetters({ regulationData: "regulation/regulation" }),

    },
    methods: {
      async getRegulation() {
        await this.$store.dispatch("regulation/regulationData");
        this.regulation = this.regulationData;

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
    },
    created() {
      this.getRegulation();
    },
  };
  </script>


