<template>
<div>


  <div>
    <loading :loading="loading"></loading>
  </div>
    <div>
      <bread-crumbs :head_text="projectData.data?.title" :items="items"></bread-crumbs>
      <b-container>
        <b-row>
          <b-col cols lg="9">
            <div class="news_content responsebox">
              <div >
                <div class="content" v-html=" projectData.data?.description"></div>
              </div>
              <div class="sliderNone" v-if="projectData && projectData.data && projectData.data.images && projectData.data.images.length">
              <div class="slider">
                <div class="thumb-example">
                  <!-- swiper1 -->
                  <swiper
                    class="swiper gallery-top"
                    :options="swiperOptionTop"
                    ref="swiperTop"
                  >
                    <swiper-slide class="slide-1" v-for="item in projectData.data?.images"
                      ><img :src="item.image" alt=""
                    /></swiper-slide>
                    <div
                      class="swiper-button-next swiper-button-white"
                      slot="button-next"
                    ></div>
                    <div
                      class="swiper-button-prev swiper-button-white"
                      slot="button-prev"
                    ></div>
                  </swiper>
                  <!-- swiper2 Thumbs -->
                  <swiper
                    class="swiper gallery-thumbs"
                    :options="swiperOptionThumbs"
                    ref="swiperThumbs"
                  >
                    <swiper-slide class="slide-1" v-for="item in projectData.data?.images"
                      ><img :src="item.image" alt=""
                    /></swiper-slide>
                  </swiper>
                </div>
              </div>
              </div>
              <div class="slide__mob"
              >
                <div v-for="item in projectData.data?.images">
                  <img :src="item.image" :alt="item.image"/>
                </div>
              </div>
              <social-footer class="mt-5"></social-footer>
            </div>
          </b-col>
          <b-col cols lg="3">
            <project-sidebar
              :projectSingle="projectData.links"
              :side="sidebar"
            ></project-sidebar>
          </b-col>
        </b-row>
      </b-container>
    </div>
</div>

  </template>

  <script>
  import { mapGetters } from "vuex";
  import BreadCrumbs from "@/components/bread_crumbs";
  import SocialFooter from "@/components/social_footer";
  import ProjectSidebar from "@/components/projectSidebar.vue";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import "swiper/css/swiper.css";
  export default {
    data() {
      return {
        loading : true,

        project:[],
        headText:"Maliyyə Nazirliyinin dövlət istiqrazlarının yerləşdirilməsi barədə məlumat",
        items: [
          {
            text: "Faydalı",
          },
          {
            text: "Layihələr",
            href: "/layiheler",
          },
        ],

        swiperOptionTop: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
        swiperOptionThumbs: {
          // loop: true,
          // looped slides should be the same
          spaceBetween: 10,
          slidesPerView: "auto",
          centeredSlides: false,
          touchRatio: 0.2,
          slideToClickedSlide: true,
        },
      };
    },
    methods: {
      async getSingleProject() {
        await this.$store.dispatch(
          "project/projectSingleData",
          this.$route.params.slug
        );
        this.project = this.projectData;

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
    },
    created() {
      this.getSingleProject();
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop?.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs?.$swiper;
        if (swiperTop && swiperThumbs) {
          swiperTop.controller.control = swiperThumbs;
          swiperThumbs.controller.control = swiperTop;

        }

    });
    },
    components:{
      SocialFooter,
      BreadCrumbs,
      ProjectSidebar,
    },
    computed: {
      ...mapGetters({ projectData: "project/project" }),
    },
  };
  </script>

  <style lang="scss" scoped>
  .thumb-example {
    height: 480px;
  }

  .swiper {
    // .swiper-slide {
    //  opacity: 1;
    // }
    .swiper-button-prev {
      color: black !important;
      font-size: 10px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 56px;
      width: 48px;
      height: 48px;
      &::after {
        content: "prev";
        font-size: 18px !important;
        font-weight: 600;
      }
    }
    .swiper-button-next {
      color: black !important;
      font-size: 10px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 56px;
      width: 48px;
      height: 48px;
      &::after {
        content: "next";
        font-size: 18px !important;
        font-weight: 600;
      }
    }
    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      margin-top: 12px;
      height: 20%;
      box-sizing: border-box;
    }
    &.gallery-thumbs .swiper-slide {
      width: 15% !important;
      height: 100%;
      cursor: pointer;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
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
