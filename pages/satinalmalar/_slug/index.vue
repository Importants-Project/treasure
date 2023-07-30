<template>
  <div class="purchases_details">
    <bread-crumbs2
      :items="items"
      :headText="singlePurchasesData.title"
    ></bread-crumbs2>
    <div class="container">
      <div class="purchases_detail">
        <b-row>
          <b-col
            cols
            lg="4"
            md="6"
            sm="12"
            v-for="item in singlePurchasesData.data"
            id="purchase"
          >
            <nuxt-link
              exact
              :to="`/satinalmalar/${singlePurchasesData.slug}/${item.slug}`"
            >
              <div class="purchase_item">
                <div class="purchase_date">
                  <span>{{ item.purchase_date }}</span>
                </div>
                <div class="purchase_text">
                  <p>
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </nuxt-link>
          </b-col>
        </b-row>
        <b-pagination
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="rows"
          aria-controls="purchase"
          @change="getSinglePurchases"
          ref="aaa"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.purchases_details {
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
  .purchases_detail {
    .purchase_item {
      padding: 32px;
      cursor: pointer;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      margin-bottom: 24px;
      .purchase_date {
        span {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #6b7280;
        }
      }
      .purchase_text {
        margin-top: 16px;
        p {
          font-weight: 500;
          font-size: 18px;
          font-style: normal;
          line-height: 28px;
          word-break: break-all;
          color: #374151;
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
      margin-bottom: 200px;
      margin-top: 32px;
      li {
        margin-left: 8px;
        button {
          padding: 12px 17px !important;
          border: 1px solid #eaecf0 !important;
          border-radius: 6px;
        }
        span {
          background: #ffffff;
          border: 1px solid #eaecf0 !important;
          padding: 12px 17px !important;
          border-radius: 6px;
          color: black !important;
        }
        &:nth-child(2) {
          margin-left: 0;
        }
        &:first-child,
        &:last-child {
          display: none;
        }
        &.page-item.active .page-link {
          background: #eaecf0 !important;
          border: 1px solid #eaecf0;
          border-radius: 6px !important;
          color: black !important;
          outline: none !important;
        }
      }
    }
  }
  .page-link {
    color: black !important;
  }
}
</style>

<script>
import { mapGetters } from "vuex";
import BreadCrumbs2 from "@/components/bread_crumbs2";
export default {
  data() {
    return {
      singlePurchases: [],
      perPage: 10,
      currentPage: 1,
      items: [

        {
          text: "Faydalı",
          href: "#",
        },
        {
          text: "Satınalmalar",
          href: "/satinalmalar",
        },
      ],
    };
  },
  components: {
    BreadCrumbs2,
  },
  computed: {
    ...mapGetters({ singlePurchasesData: "purchases/purchases" }),
    rows() {
      return this.singlePurchasesData.meta?.total;
    },
  },
  methods: {
    async getSinglePurchases() {
      this.currentPage = this.$refs.aaa.currentPage;
      this.pending = true;

      await this.$store.dispatch("purchases/purchasesSingleData", {
        slug: this.$route.params.slug,
        page: this.currentPage,
      });
      window.scrollTo({top: 0});
      this.singlePurchases = this.singlePurchasesData;
    },
  },
  mounted() {
    this.getSinglePurchases();
  },
};
</script>
