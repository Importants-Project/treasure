<template>
  <div class="top_header">
    <b-container>
      <div
        class="top_header_item d-flex justify-content-between align-items-center"
      >
        <div class="top_header_icons d-flex">
          <div class="top_header_icon" >
            <div class="icon_img">
              <a target="_blank" :href="contactData?.data?.facebook">

              <img
                src="@/assets/images/social_footer_icons/fot_ico_facebook.svg"
                alt=""
              />
              </a>
            </div>
          </div>
          <div class="top_header_icon" >
            <div class="icon_img">
              <a target="_blank" :href="contactData?.data?.linkedin">

              <img
                src="@/assets/images/social_footer_icons/fot_ico_linkedin.svg"
                alt=""
              />
              </a>
            </div>
          </div>
          <div class="top_header_icon" >
            <div class="icon_img">
              <a target="_blank" :href="contactData?.data?.twitter">

              <img
                src="@/assets/images/social_footer_icons/fot_ico_twitter.svg"
                alt=""
              />
              </a>
            </div>
          </div>
          <div class="top_header_icon">
            <div class="icon_img">
              <a target="_blank" :href="contactData?.data?.youtube">
              <img
                src="@/assets/images/social_footer_icons/youtube_ico.svg"
                alt=""
              />
              </a>
            </div>
          </div>
        </div>
        <div class="search_lang d-flex align-content-center">
          <div class="search">
            <form @submit.prevent="search" v-on:keyup.enter="searchTag">
              <b-form-input
                @change="searchNews()"
                v-model="searchText"
                placeholder="Axtarış"
              ></b-form-input>
            </form>
            <div>

            </div>
          </div>

<!--          <div class="phone d-flex align-items-center">-->
<!--            <div class="phone_ico mr-2">-->
<!--              <img src="@/assets/images/top_header/phone.png" alt="" />-->
<!--            </div>-->
<!--            <span>(012) 1927</span>-->
<!--          </div>-->
          <!-- <div class="language">
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
          </div> -->
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selected: "a",
      searchText: null,
      news: [],
      options: [
        { value: "a", text: "AZ" },
        { value: "b", text: "EN" },
        { value: "d", text: "RU" },
      ],
    };
  },
  computed: {
    ...mapGetters({ searchData: "search/news",contactData: "contact/contact"  }),
  },

  methods: {
    search() {

      if (this.searchText) {

        this.$router.push({ path: "/search", query: { name: this.searchText } });

      }
      else{
        this.$router.push({ path: "/"});
      }

    },
    searchTag(){
      console.log("wqdqwdwwqdqdwq");
      this.searchText = null;
    },

    searchNews() {
      if (this.searchText !== null) {
        this.$store.dispatch("search/searchData", { name: this.searchText });
        this.news = this.searchData;
        console.log("Sdqwdwq",this.searchText);

      }

    },

    async getContact() {
      await this.$store.dispatch("contact/contactData");
      this.contact = this.contactData;
      // this.markers[0].position.lat = this.contactData.data?.longitude;
      // this.markers[0].position.lng = this.contactData.data?.latitude;
    },
  },


  created() {
    this.getContact();
  },
};
</script>
