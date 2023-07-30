<template>
<div>

  <div>
    <loading :loading="loading"></loading>
  </div>
  <div v-if="!loading">
    <bread-crumbs :head_text="headText" :items="items"></bread-crumbs>
    <div class="container">
      <b-row>
        <b-col cols lg="9" xl="9" md="12" sm="12">
          <div class="structure responsebox">
            <div class="structure_img">
              <img :src="structureData.data?.image" alt="" />
            </div>
            <social-footer class="mt-4"></social-footer>
          </div>
        </b-col>
        <b-col cols xl="3" lg="3" md="12" sm="12">
          <side-bar :items="structureData.links"></side-bar>
        </b-col>
      </b-row>
    </div>
  </div>
</div>

</template>

<style lang="scss">
.structure {
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 200px;
  .structure_img {
    margin-bottom: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}



@media (max-width: 768px){
.structure{
  padding:unset;

  &_img{
    border: 1px solid #D1D5DB !important;
    border-radius: 12px;

  }
}
}
</style>

<script>
import { mapGetters } from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";
import SideBar from "@/components/SideBar.vue";
export default {
  data() {
    return {
      loading: true,

      headText:"Struktur",

      structure: [],
      items: [

        {
          text: "Haqqımızda",
          href: "#",
        },
        {
          text: "Struktur",
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
          title: "Xəzinədarlıq idarələri",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/xezinedarliq-idareleri",
        },
      ],
    };
  },
  components:{
    SocialFooter,
    BreadCrumbs,
    SideBar,
  },
  computed: {
    ...mapGetters({ structureData: "structure/structure" }),
  },
  methods: {
    async getStructure() {
      await this.$store.dispatch("structure/structureData");
      this.structure = this.structureData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.getStructure();
  },
};
</script>
