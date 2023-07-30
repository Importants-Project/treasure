<template>
    <div class="purchases">
      <bread-crumbs
      class="purchases_bread"
      :head_text="purchases_services"
      :items="items"
    ></bread-crumbs>
      <div class="container">
        <b-row>
          <b-col cols xl="6" lg="6" md="12" sm="12" v-for="item in purchasesData.data">
            <nuxt-link exact :to="`/satinalmalar/${item.slug}`">
              <div class="purchases_item">
                <div class="head_text">
                  <p>{{ item.title }}</p>
                </div>
<!--                <div class="content" >-->
<!--                  <p>-->
<!--                    {{ item.description }}-->
<!--                  </p>-->
<!--                </div>-->
              </div>
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
    </div>
  </template>

<style lang="scss">
.purchases {
    background: #f3f4f6;
    margin-top: 30px;
    padding: 56px 0 280px 0;
    .purchases_bread{
      display: block;
      .head_text{
        display: none;
      }
.bread_crumbs{
  margin: 0;
  padding: 0 0 48px;
}
    }
    .purchases_item {
      padding: 48px;
      margin-bottom: 24px;
      background-color: white;
      border-radius: 12px;
      border: 1px solid transparent;
      transition: 0.3s ease-in-out;

      cursor: pointer;
      .head_text {
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: #1f2937;
      }
      .content {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color: #4b5563;
        margin-top: 24px;
      }
      &:hover {
        border: 1px solid #145cf0;
      }
    }
  }
  @media(max-width: 900px){
    .purchases{

      padding: 24px 0 120px 0;
      background: white;
      .purchases_bread{
        display: block;
        margin-bottom: 24px;
        .bread_crumbs{
          padding: 48px 58px;
        }

        .head_text{
          display: block;
        }
      }
      .purchases_item{
        padding: 24px;
        border: 1px solid #D1D5DB;

        .head_text{
          font-size: 22px;
          line-height: 28px;
          display: block;
        }
      }
    }
  }
</style>

    <script>
    import { mapGetters } from "vuex";
    import BreadCrumbs from "@/components/bread_crumbs";

  export default {
    data() {
      return {
        purchases: [],
        items: [
          {
            text: "Faydalı",
          },
          {
            text: " Satınalmalar",
          },
        ],
        purchases_services:  "Satınalmalar",
      };
    },

    components:{
      BreadCrumbs

    },
      computed: {
      ...mapGetters({ purchasesData: "purchases/purchases" }),
    },
     methods: {
      async getPurchases() {
        await this.$store.dispatch("purchases/purchasesData");
        this.purchases = this.purchasesData;
      },
    },
      created() {
      this.getPurchases();
    },
  };
  </script>
