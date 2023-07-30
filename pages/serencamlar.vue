<template>
  <div>
    <div>
      <loading :loading="loading"></loading>
    </div>
    <div v-if="!loading">
      <bread-crumbs :head_text="headText" :items="items"></bread-crumbs>
      <div class="container">
        <b-row>
          <b-col cols xl="9" lg="9" md="12" sm="12" xs="12">
            <div class="orders_content  responsebox">
              <div class="laws" v-if="ordersData.data?.file !== null">
                <span
                  class="d-flex align-items-center justify-content-between "
                >
                  <div class="laws_item d-flex align-items-center">
                    <div class="laws_img">
                      <img src="@/assets/images/laws/pdf.svg" alt="pdf.svg" />
                    </div>

                    <p style="margin-left: 20px" class="laws_title">
                        {{ ordersData?.data?.title }}
                      </p>                  </div>
                  <div class="d-flex align-items-center">
                    <!-- -->
                    <a
                      v-if="ordersData?.data?.file.endsWith('.pdf')"
                      :href="ordersData.data?.file"
                      target="_blank"
                    >
                      <img
                        style="width: 25px; margin-right: 10px"
                        src="@/assets/images/pdf.svg"
                        alt="file-invoice-solid.svg"
                      />
                    </a>
                    <img
                      style="height: 25px; margin-right: 10px"
                      @click="download(ordersData.data)"
                      src="@/assets/images/download-solid.svg"
                      alt="file-invoice-solid.svg"
                    />
                  </div>
                </span>
              </div>
              <div class="content" v-html="ordersData.data?.description"></div>
              <social-footer class="mt-4"></social-footer>
            </div>
          </b-col>
          <b-col cols lg="3">
            <side-bar :items="ordersData.links"></side-bar>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.orders_content {
  .laws {
    border-radius: 12px;
    padding: 37px 24px;
    background-color: #f3f4f6;
    margin-bottom: 32px;
    cursor: pointer;
    width: 100%;

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
</style>

<script>
import { mapGetters } from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {
      loading: true,

      headText: "Sərəncamlar",

      orders: [],
      items: [
        {
          text: "Qanunvericilik",
        },
        {
          text: "Sərəncamlar",
        },
      ],
      sidebar: [
        {
          title: "Azərbaycan Respublikasının Konstitusiyası",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "/konstitusiya",
        },
        {
          title: "Qanunlar",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "/qanunlar",
        },
        {
          title: "Fərmanlar",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "/fermanlar",
        },
        {
          title: "Qərarlar",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "/qerarlar",
        },
      ],
    };
  },
  components: {
    SocialFooter,
    BreadCrumbs,
    SideBar,
  },
  computed: {
    ...mapGetters({ ordersData: "orders/orders" }),
  },
  methods: {
    async getOrders() {
      await this.$store.dispatch("orders/ordersData");
      this.orders = this.ordersData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    async download(item) {
      await this.$store.dispatch("orders/ordersDataPdf",item);
      
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
