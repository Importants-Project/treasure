<template>
  <div class="key_indicators">
    <bread-crumbs class="key_bread" :head_text="key_indicators" :items="items"></bread-crumbs>

    <div class="container">
      <b-row>
        <b-col cols lg="6" xl="6" md="12" sm="12" v-for="item in featuresData.data">
          <nuxt-link exact :to="`/esasgostericiler/${item.slug}`">
            <div class="key_indicators_item">
              <div class="head_text">
                <p>{{ item.title }}</p>
              </div>
<!--              <div class="content">-->
<!--                <p>-->
<!--                  {{ item.description }}-->
<!--                </p>-->
<!--              </div>-->
            </div>
          </nuxt-link>
        </b-col>



      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {
      loading : true,

      features: [],
      key_indicators: "Əsas göstəricilər",

      items: [
        {
          text: "Faydalı",
        },
        {
          text: "Əsas göstəricilər",
        },
      ],
    };
  },
  components:{
    BreadCrumbs,
    SideBar,
  },
  computed: {
    ...mapGetters({ featuresData: "features/features" }),

    ...mapGetters({ singleFeaturesData: "features/features" }),

  },
  methods: {
    async getFeatures() {
      await this.$store.dispatch("features/featuresData");
      this.features = this.featuresData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },


  },
  created() {
    this.getFeatures();
  },
};
</script>
