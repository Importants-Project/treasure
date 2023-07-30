<template>
  <div>

    <div>
      <loading :loading="loading"></loading>
    </div>
    <div v-if="!loading">
      <bread-crumbs :head_text="singleInformationData.data.title" :items="items"></bread-crumbs>
      <b-container>
        <b-row>

          <b-col cols lg="9" xl="9" md="12" sm="12">
            <div class="news_content responsebox">
              <div>

                <div class="laws" v-for="(item,i) in singleInformationData?.data">


               <span class="d-flex align-items-center justify-content-between">
                <div class="laws_item d-flex align-items-center">
                  <div class="laws_img">
                    <img src="@/assets/images/laws/pdf.svg" alt="pdf.svg"/>
                  </div>
                    <p style="margin-left: 20px" class="laws_title ">{{ item.title }}</p>

                </div>
<div class="d-flex align-items-center">

              <a v-if="item?.file.endsWith('.pdf')" :href="item?.file" target="_blank">
                <img style="width: 25px; margin-right: 10px; "
                     src="../../assets/images/pdf.svg" alt="file-invoice-solid.svg">
                  </a>

    <img style="height: 25px; margin-right: 10px; "

         @click="download(item)"

         src="../../assets/images/download-solid.svg" alt="file-invoice-solid.svg">
</div>


            </span>
                </div>

              </div>

              <div class="content" v-html="singleInformationData?.data?.description">
              </div>


              <social-footer class="mt-5"></social-footer>
            </div>
          </b-col>


          <b-col cols lg="3">
            <side-bar
              :customSlug="customSlug"
              :sideTitle="singleInformationData?.informations"

            ></side-bar>
          </b-col>
        </b-row>
      </b-container>
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

      customSlug: ["hesabmelumatlari"],
      headText: "Maliyyə Nazirliyinin dövlət istiqrazlarının yerləşdirilməsi barədə məlumat",
      singleInformation: [],
      items: [

        {
          text: "Faydalı",
          href: "#",
        },
        {
          text: "Hesab məlumatları",
          href: "/hesabmelumatlari",
        },
      ],
    };
  },
  methods: {

    async download(item) {
      await this.$store.dispatch("information/informationPdf", item);
    },
    async getSingleInformation() {
      await this.$store.dispatch(
        "information/informationSingleData",
        this.$route.params.slug
      );
      this.singleInformation = this.singleInformationData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.getSingleInformation();
  },

  components: {
    SocialFooter,
    BreadCrumbs,
    SideBar,
  },
  computed: {
    ...mapGetters({
      singleInformationData: "information/information",
      informationPdf: "information/informationPdf",
    }),
  },
};
</script>

<style lang="scss">
.thumb-example {
  height: 480px;
}

.content figure > a {
  text-decoration: underline;
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


  .laws {
    border-radius: 12px;
    padding: 37px 24px;
    background-color: #f3f4f6;
    margin-bottom: 32px;
    cursor: pointer;

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
