<template>
  <div>

  <div class="container">
    <div class="header_txt"><h2>Faydalı keçidlər</h2></div>


    <div class=" useful_slider_items slide__mob" >
      <div   v-for="item in transitions" >
        <a  :href="item.link">
          <div class="useful_slider_item">
            <div class="useful_slider_img">
              <img :src="item.image" alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>


    <div
      v-swiper="swiperOption"
      class="w-5/6 ml-auto relative useful_sliders"
      :pagination="true"
      :loadtheme="false"
    >
      <div class="swiper-wrapper hideMob">
        <div class="swiper-slide" v-for="item in transitions">
          <div class="useful_slider_items d-flex">
            <div style="padding: 0 !important" >
              <a target="_blank" :href="item.link">
                <div class="useful_slider_item">
                  <div class="useful_slider_img">
                    <img :src="item.image" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
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
        slidesPerView: 4,
        // spaceBetween: -10,
        slidesPerGroup: 1,
        // loop: true,
        autoplay: {
          delay: 4000,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        breakpoints: {
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
  props: {
    transitions: Array,
  },
};
</script>

<style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48;
}
</style>
