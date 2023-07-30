<template>
  <div>
    <bread-crumbs :head_text="singleFeaturesData.data?.title" :items="items"></bread-crumbs>
    <b-container>
      <b-row>
        <b-col cols lg="9" xl="9" md="12" sm="12">
          <div class="news_content responsebox">
            <div>

              <div class="laws" v-for="(item,i) in singleFeaturesData.data">


               <span class="d-flex align-items-center justify-content-between">
                <div class="laws_item d-flex align-items-center">
                  <div class="laws_img">
                    <img src="@/assets/images/laws/pdf.svg" alt="pdf.svg"/>
                  </div>
                    <p style="margin-left: 20px" class="laws_title ">{{ item?.title }}</p>

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

            <div class="content" v-html="singleFeaturesData?.data?.description">
            </div>


            <social-footer class="mt-5"></social-footer>
          </div>
        </b-col>


        <b-col cols lg="3">
          <side-bar
            class="mb-5"
            :customSlug="customSlug"
            :sideTitle="singleFeaturesData?.features"
          ></side-bar>
        </b-col>
      </b-row>
    </b-container>
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

      singleFeatures: [],
      customSlug: ["esasgostericiler"],
      items: [

        {
          text: "Faydalı",
          href: "#",
        },
        {
          text: "Əsas göstəricilər",
          href: "/esasgostericiler",
        },
      ],
    };
  },
  methods: {
    async download(item) {
      await this.$store.dispatch("features/featuresPdf", item);
    },
    async getSingleFeatures() {
      await this.$store.dispatch(
        "features/featuresSingleData",
        this.$route.params.slug
      );
      this.singleFeatures = this.singleFeaturesData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.getSingleFeatures();
  },
  components: {
    SocialFooter,
    BreadCrumbs,
    SideBar,
  },
  computed: {
    ...mapGetters({
      singleFeaturesData: "features/features", featuresPdf: "features/featuresPdf",
    }),
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

@media (max-width: 768px) {
  .news_content {
    padding: unset;
  }
}
</style>
