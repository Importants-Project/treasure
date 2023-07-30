<template>

<div>

  <div>
    <loading :loading="loading"></loading>
  </div>
  <div class="electronic_services" v-if="!loading">
  <div class="electronic_services">
    <bread-crumbs
      class="elec_bread"
      :head_text="elec_services"
      :items="items"
    ></bread-crumbs>

    <div class="container">

      <b-row>
        <b-col col lg="6" v-for="item in digitalData.data">
          <div class="electronic_services_item">
            <div class="head_text">
              <p>{{ item.title }}</p>
            </div>
            <div class="content">
              <p>
                {{ item.description }}
              </p>
            </div>
            <a  :href="item.link">
              <button class="transition d-flex">
                <div class="transition_text">
                  <p>{{ item.name }}</p>
                </div>
                <div class="icon">
                  <img src="@/assets/images/arrow_right.png" alt="" />
                </div>
              </button>
            </a>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      digital_services: [],
      loading : true,
      elec_services: "Elektron xidmətlər",


      items: [
        {
          text: "Faydalı",
        },
        {
          text: "Elektron xidmətlər",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ digitalData: "digital_services/digital_services" }),
  },
  methods: {
    async getDigital() {
      await this.$store.dispatch("digital_services/digitalData");
      this.digital_services = this.digitalData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.getDigital();
  },

  // fetch(){

  //  console.log(this.$store.dispatch('news/newsData'));
  // }
};
</script>
