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
            <div class="constitution_content responsebox">
              <div>


                <div class="laws" v-for="(constitution, i) in constitutionsData?.data">

                  <span
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="laws_item d-flex align-items-center">
                      <div class="laws_img">
                        <img src="@/assets/images/laws/pdf.svg" alt="pdf.svg" />
                      </div>

                      <p style="margin-left: 20px" class="laws_title">
                        {{ constitution?.title }}
                      </p>
                    </div>
                    <div class="d-flex align-items-center">
                      <!-- -->
                      <a
                      v-if="constitution?.file.endsWith('.pdf')" 
                        :href="constitution?.file"
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
                        @click="download(constitution?.id)"
                        src="@/assets/images/download-solid.svg"
                        alt="file-invoice-solid.svg"
                      />
                    </div>
                  </span>
                </div>
              </div>
              <!-- <div class="content" v-html="constitutionData.data?.description">
              </div> -->

              <social-footer class="mt-4"></social-footer>
            </div>
          </b-col>
          <b-col cols xl="3" lg="3" md="12" sm="12">
            <side-bar :items="constitutionData.links"></side-bar>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.constitution_content {
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
import { mapGetters } from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {
      loading: true,

      headText: "Azərbaycan Respublikasının Konstitusiyası",
      //constitution: [],
      items: [
        {
          text: "Qanunvericilik",
        },
        {
          text: "Azərbaycan Respublikasının Konstitusiyası ",
        },
      ],

      filename: "",
      xhr: "",
    };
  },
  components: {
    SocialFooter,
    BreadCrumbs,
    SideBar,
  },
  computed: {
    ...mapGetters({
      constitutionData: "constitution/constitution",
      constitutionDataPdf: "constitution/constitutionsPdf",
      constitutionsData: "constitution/constitutions",
    }),
  },
  methods: {
    async download(id) {
      await this.$store.dispatch(
        "constitution/constitutionsDataPdf",
        id
      );
    },

    async getConstitution() {
      await this.$store.dispatch("constitution/constitutionData");
      await this.$store.dispatch("constitution/constitutionsData");

      // this.constitution = this.constitutionData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },

  created() {
    this.getConstitution();
  },
};
</script>
