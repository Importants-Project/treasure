<template>
  <div>
    <div>
      <loading :loading="loading"></loading>
    </div>
  <div class="account_information">
    <bread-crumbs
      class="account_bread"
      :head_text="account_bread"
      :items="items"
    ></bread-crumbs>
    <div class="container">
      <b-row>

        <b-col cols xl="6" lg="6" md="12" sm="12" v-for="item in infoData.data">
          <nuxt-link exact :to="`/hesabmelumatlari/${item.slug}`">
            <div class="account_information_item">
              <div class="head_text">
                <p>{{ item.title }}</p>
              </div>
<!--              <div class="content" >-->
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
  </div>

</template>

  <script>
  import { mapGetters } from "vuex";
  import BreadCrumbs from "@/components/bread_crumbs";

export default {
  data() {
    return {
      loading : true,
      items: [
        {
          text: "Faydalı",
        },
        {
          text: "Hesab Məlumatları",
        },
      ],
      information: [],
      account_bread:"Hesab Məlumatları",
      account_information: [
        {
          id: 1,
          head_text: "Büdcə təşkilatlarının xəzinə hesabları",
          content:
            " Lorem ipsum dolor sit amet consectetur. Sit lorem feugiat cursus lectus nunc donec purus quam. Amet parturient ut at",
        },
        {
          id: 2,
          head_text: "Büdcə təşkilatlarının İBAN hesabları",
          content:
            " Lorem ipsum dolor sit amet consectetur. Sit lorem feugiat cursus lectus nunc donec purus quam. Amet parturient ut at",
        },
        {
          id: 3,
          head_text: "DXA-nın hesablaşma hesabı",
          content:
            " Lorem ipsum dolor sit amet consectetur. Sit lorem feugiat cursus lectus nunc donec purus quam. Amet parturient ut at",
        },
        {
          id: 4,
          head_text: "Bakı şəhəri üzrə daxilolmaların xəzinə hesabları",
          content:
            " Lorem ipsum dolor sit amet consectetur. Sit lorem feugiat cursus lectus nunc donec purus quam. Amet parturient ut at",
        },
      ],
    };
  },
  components:{
    BreadCrumbs

  },
    computed: {
    ...mapGetters({ infoData: "information/information" }),
  },
   methods: {
    async getInformation() {
      await this.$store.dispatch("information/informationData");
      this.information = this.infoData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
    created() {
    this.getInformation();
  },
};
</script>
