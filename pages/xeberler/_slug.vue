<template>
  <div>
    <bread-crumbs :head_text="newsData.data?.title" :items="items" :create-time="newsData.data?.created_at" >

    </bread-crumbs>

    <b-container>
      <b-row>
        <b-col cols xl="9" lg="9" md="12" sm="12">
          <div class="news_content responsebox">
              <div class="content" v-html="newsData.data?.description"></div>

            <div class="sliderNone" v-if="newsData && newsData.data && newsData.data.images && newsData.data.images.length">
              <div class="slider">
                <div class="thumb-example">
                  <!-- swiper1 -->
                  <swiper
                    class="swiper gallery-top"
                    :options="swiperOptionTop"
                    ref="swiperTop"
                  >
                    <swiper-slide
                      class="slide-1"
                      v-for="item in newsData.data?.images"
                      >
                      <img :src="item.image" :alt="item.image"
                    />

                    </swiper-slide>
                    <div
                      class="swiper-button-next swiper-button-white"
                      slot="button-next"
                      @click="next"

                    ></div>
                    <div
                      class="swiper-button-prev swiper-button-white"
                      slot="button-prev"
@click="prev"
                    ></div>
                  </swiper>
                  <!-- swiper2 Thumbs -->
                  <swiper
                    class="swiper gallery-thumbs"
                    :options="swiperOptionThumbs"
                    ref="swiperThumbs"
                  >
                    <swiper-slide
                      :class="['slide-1',activeSlider === i ? 'activeSlideGallery' : '']"
                      v-for="(item,i) in newsData.data?.images"

                      >
                      <img :src="item.image" alt="item.image" @click="aaa(i)"/>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>

            <div class="slide__mob">
              <div v-for="item in newsData.data?.images">
                <img :src="item.image" :alt="item.image" />
              </div>
            </div>

            <social-footer class="mt-5"></social-footer>
          </div>
        </b-col>
        <b-col cols lg="3">
          <news-sidebar
            :newsSingle="newsData.news"

          ></news-sidebar>
<!--          :side="sidebar"-->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";
import NewsSidebar from "@/components/newsSidebar.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      activeSlider:0,

      headText:"Maliyyə Nazirliyinin dövlət istiqrazlarının yerləşdirilməsi barədə məlumat",
      items: [

        {
          text: "Xəbərlər",
          href: "/xeberler",
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
        centeredSlides:false,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  computed: {
    ...mapGetters({ newsData: "news/news" }),
  },
  methods: {

    aaa(item) {

      if (this.activeSlider === item) {
        this.activeSlider = item;
      } else {
        this.activeSlider = item;
      }
      this.$refs.swiperTop?.$swiper.slideTo(this.activeSlider);
      console.log(item)
    },

    prev() {
      if (this.activeSlider > 0) {
        this.activeSlider--;
      } else {
        this.activeSlider = this.newsData.data?.images.length - 1;
      }
      this.$refs.swiperTop.$swiper.slideTo(this.activeSlider);

    },
    next() {
      if (this.activeSlider < this.newsData.data?.images.length - 1) {
        this.activeSlider++;
      } else {
        this.activeSlider = 0;
      }
      this.$refs.swiperTop.$swiper.slideTo(this.activeSlider);
    },

    async getSingleNews() {
      await this.$store.dispatch(
        "news/newsSingleData",
        this.$route.params.slug
      );
      this.news = this.newsData;
    },
  },
  created() {
    this.getSingleNews();
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
  components: {
    SocialFooter,
    BreadCrumbs,
    NewsSidebar,
  },

};
</script>

<style lang="scss"  scoped>
.thumb-example {
  height: 480px;
}



.activeSlideGallery{
  border: 3px solid #145cf0 ;
}
.swiper {
   .swiper-slide {
    opacity: 1;
     img{
       height: 100%;
       //object-fit: cover;
       object-fit: fill;
     }
   }
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

@media (max-width: 768px) {
  .news_content {
    padding: unset;
  }
}
</style>
