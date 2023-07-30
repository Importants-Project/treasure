<template>
  <div>

  <div>
    <loading :loading="loading"></loading>
  </div>

  <div>
    <bread-crumbs :head_text="headText" :items="items"></bread-crumbs>
    <div class="container">
      <b-row>
        <b-col cols md="12" sm="12" xl="9" lg="9">
          <div class="activite_content responsebox">
            <div class="content" v-html="activityData.data?.description"></div>
            <social-footer class="mt-4"></social-footer>
          </div>
        </b-col>
        <b-col cols lg="3">
          <side-bar :items="activityData.links"></side-bar>
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

      headText:"Fəaliyyət",

      items: [

        {
          text: "Haqqımızda",
          href: "#",
        },
        {
          text: "Fəaliyyət",
        },
      ],
      activity: [],
      sidebar: [
        {
          title: "Tarix",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/tarix",
        },
        {
          title: "Əsasnamə",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/esasname",
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
    ...mapGetters({ activityData: "activity/activity" }),
  },
  methods: {
    async getActivity() {
      await this.$store.dispatch("activity/activityData");
      this.activity = this.activityData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.getActivity();
  },
};
</script>
