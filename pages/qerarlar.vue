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
            <div class="decisions_content  responsebox">

              <div class="laws" v-if="decisionsData.data?.file !== null">
                <span
                  class="d-flex align-items-center justify-content-between "
                >
                  <div class="laws_item d-flex align-items-center">
                    <div class="laws_img">
                      <img src="@/assets/images/laws/pdf.svg" alt="pdf.svg" />
                    </div>
                    <p style="margin-left: 20px" class="laws_title">
                        {{ decisionsData?.data?.title }}
                      </p> 
                  </div>
                  <div class="d-flex align-items-center">
                    <!-- -->
                    <a                       v-if="decisionsData?.data?.file.endsWith('.pdf')" 
 :href="decisionsData.data?.file" target="_blank">
                      <img
                        style="width: 25px; margin-right: 10px"
                        src="@/assets/images/pdf.svg"
                        alt="file-invoice-solid.svg"
                      />
                    </a>
                    <img
                      style="height: 25px; margin-right: 10px"
                      @click="download(decisionsData.data)"
                      src="@/assets/images/download-solid.svg"
                      alt="file-invoice-solid.svg"
                    />
                  </div>
                </span>
              </div>
              <div class="content" v-html="decisionsData.data?.description">
              </div>
              <social-footer class="mt-4"></social-footer>
            </div>


          </b-col>
          <b-col cols xl="3" lg="3" md="12" sm="12">
            <side-bar :items="decisionsData.links"></side-bar>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {
      loading: true,
      headText:"Qərarlar",

      decisions: [],
      items: [

        {
          text: 'Qanunvericilik',
        },
        {
          text: 'Qərarlar',
          hide: false
        }
      ],
      sidebar: [
        {
          title: "Azərbaycan Respublikasının Konstitusiyası",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "konstitusiya"
        },
        {
          title: "Qanunlar",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "qanunlar"
        },
        {
          title: "Fərmanlar",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "fermanlar"
        },
        {
          title: "Sərəncamlar",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "serencamlar"
        },
      ],
    }
  },
  components: {
    SocialFooter,
    BreadCrumbs,
    SideBar
  },
  computed: {
    ...mapGetters({decisionsData: "decisions/decisions"}),

  },
  methods: {
    async getDecisions() {
      await this.$store.dispatch("decisions/decisionsData");
      this.decisions = this.decisionsData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    async download(item) {
      await this.$store.dispatch(
        "decisions/decisionsDataPdf",item
      );
    },
  },
  created() {
    this.getDecisions();
  },
};
</script>


<style lang="scss">
.decisions_content {
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