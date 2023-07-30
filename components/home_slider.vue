<template>
  <div class="container">
    <div
      v-swiper="swiperOption"
      class="w-5/6 ml-auto relative home_slider"
      :pagination="true"
      :loadtheme="false"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in slider">
          <div class="home_slider_item d-flex">
            <div class="left_side">
              <div class="head_text">
                <h1>
                  {{ item.title }}
                </h1>
              </div>
              <div class="content">
                <p>
                  {{ item.description }}
                </p>
              </div>
              <div class="details_btn">
                <a  :href="item.link">
                  <button>Ətraflı məlumat</button>
                </a>
              </div>
            </div>

            <div class="right_side">
              <div class="slide_img">
                <img :src="item.image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slider",
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: -10,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
          delay: 4000,
        },
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        // breakpoints: {
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 10,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 10,
        //   },
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        // },
      },
    };
  },
  props: {
    slider: Array,
  },

  watch: {
    slider() {},
  },
};
</script>

<!-- <style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48;
}
</style> -->
