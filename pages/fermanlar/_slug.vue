<
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
          <div class="decrees_content  responsebox">
            <div>


<div class="laws"    v-if="singleDecreesData.data?.file !== null" >

  <span
    class="d-flex align-items-center justify-content-between "
  >
    <div class="laws_item d-flex align-items-center ">
      <div class="laws_img">
        <img src="@/assets/images/laws/pdf.svg" alt="pdf.svg" />
      </div>

      <p style="margin-left: 20px" class="laws_title">
        {{ singleDecreesData.data?.title }}
      </p>
    </div>
    <div class="d-flex align-items-center   ">
      <!-- -->
      <a
   
        :href="singleDecreesData.data?.file"
        target="_blank"
      >
        <img
          style="width: 25px; margin-right: 10px"
          src="@/assets/images/pdf.svg"
          alt="file-invoice-solid.svg"
        />
      </a>
      <img
        style="height: 25px; margin-right: 10px"
        @click="download(singleDecreesData?.data)"
        src="@/assets/images/download-solid.svg"
        alt="file-invoice-solid.svg"
      />
    </div>
  </span>
</div>
<div class="content" v-html="singleDecreesData.data?.description">
            </div>
</div>

           
            <div class="socialDesktop__footerNone">

              <social-footer class="mt-4"></social-footer>
            </div>
          </div>

          <div class="socialMob__footerNone">
            <social-footer class="mt-4"></social-footer>
          </div>
        </b-col>

    


        <b-col cols lg="3">
          <side-bar :side="singleDecreesData.links"></side-bar>
        </b-col>
      </b-row>
    </div>
  </div>
</div>

</template>

<style lang="scss">
.decrees_content {
  .laws {
    border-radius: 12px;
    padding: 37px 24px;
    background-color: #f3f4f6;
    margin-bottom: 32px;
    cursor: pointer;
    width: 100%;

    .laws_item {
      .laws_img {
        width: 30px;
        height: 32px;

        img {
          width: 100%;
          height: 100%;
          object-fit: none;
        }
      }

      .laws_title {
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        color: #1f2937;
      }
    }

    .arrow_ico {
      width: 24px;
      height: 24px;
    }
  }

  .law_bread {
    .bread_crumbs {
      margin: 0;
      padding: 0 0 48px;

      .head_text {
        display: none;
      }
    }
  }
}
</style>

<script>
import {mapGetters} from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {
      loading : true,

      headText: "Fərmanlar",

      singleDecrees: [],
      items: [

        {
          text: "Qanunvericilik",
        },
        {
          text: "Fərmanlar",
        },
      ],
      sidebar: [
        {
          title: "Azərbaycan Respublikasının Konstitusiyası",
          slug: "/konstitusiya"
        },
        {
          title: "Qanunlar",
          slug: "/qanunlar"
        },
        {
          title: "Sərəncamlar",
          slug: "/serencamlar"
        },
        {
          title: "Qərarlar",
          slug: "/qerarlar"
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
    ...mapGetters({singleDecreesData: "decrees/decrees"}),

  },
  methods: {
    async getSingleDecrees() {
      await this.$store.dispatch(
        "decrees/decreesSingleData",
        this.$route.params.slug
      );


      this.singleDecrees = this.singleDecreesData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },


    async download(item) {
      await this.$store.dispatch("decrees/decreesDataPdf", item);

     
  },
},
  created() {
    this.getSingleDecrees();
  },
};
</script>
