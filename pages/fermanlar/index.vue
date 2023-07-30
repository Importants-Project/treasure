<template>
  <div>
    <div>
      <loading :loading="loading"></loading>
    </div>
    <div v-if="!loading" style="background: #f3f4f6">
      <div class="ab">
        <bread-crumbs
          class="dec_bread"
          :head_text="dec_bread"
          :items="items"
        ></bread-crumbs>
        <div class="container">
          <div class="dec_items">
            <b-row>
              <b-col cols xl="8" lg="8" md="8" sm="8">


                <div class="laws" v-for="item in decreesData.data">
                  <!-- <nuxt-link exact :to="`/fermanlar/${item.slug}`"> -->
                  <span
                    class=" decrees_item mb-3 d-flex align-items-center justify-content-between  w-100"
                  >
                      <div class="laws_item d-flex align-items-center">
                        <div class="dec_img">
                          <img
                            src="@/assets/images/laws/pdf.svg"
                            alt="pdf.svg"
                          />
                        </div>
                        <div class="dec_text">
                          <p
                            class="laws_title"
                            style="
                              margin-left: 20px;
                              overflow: hidden;
                              width: 30vw;
                              display: -webkit-box;
                              -webkit-line-clamp: 1;
                              -webkit-box-orient: vertical;
                            "
                          >
                            {{ item.title }}
                          </p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <!-- -->
                        <a :href="item.file" target="_blank">
                          <img
                            style="width: 25px; margin-right: 10px"
                            src="@/assets/images/pdf.svg"
                            alt="file-invoice-solid.svg"
                          />
                        </a>
                        <img
                          style="height: 25px; margin-right: 10px; cursor: pointer;"
                          @click="download(item)"
                          src="@/assets/images/download-solid.svg"
                          alt="file-invoice-solid.svg"
                        />
                      </div>
                    
                  </span>
                  <!-- </nuxt-link> -->
                </div>
              </b-col>

              <b-col cols xl="4" lg="4" md="12" sm="12">
                <side-bar :items="sidebar"> </side-bar>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SideBar from "@/components/SideBar.vue";
import BreadCrumbs from "@/components/bread_crumbs";

export default {
  data() {
    return {
      loading: true,

      headText: "Fərmanlar",

      dec_bread: "Fərmanlar",
      decrees: [],
      items: [
        {
          text: "Qanunvericilik",
        },
        {
          text: "Fərmanlar",
        },
      ],
      sidebar: [
        {
          title: "Konstitusiya",
          link: "/konstitusiya",
        },
        {
          title: "Qanunlar",
          link: "/qanunlar",
        },
        {
          title: "Fərmanlar",
          link: "/fermanlar",
        },

        {
          title: "Sərəncamlar",
          link: "/serencamlar",
        },
        {
          title: "Qərarlar",
          link: "/qerarlar",
        },
      ],
    };
  },
  components: {
    SideBar,
    BreadCrumbs,
  },
  computed: {
    ...mapGetters({ decreesData: "decrees/decrees" }),
  },
  methods: {
    async getDecrees() {
      await this.$store.dispatch("decrees/decreesData");
      this.decrees = this.decreesData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    async download(item) {
      await this.$store.dispatch("decrees/decreesDataPdf", item);
    },
  },
  created() {
    this.getDecrees();
  },
};
</script>

<style lang="scss">
.ab {
  background: #fff;

  .dec_bread {
    display: block;

    .bread_crumbs {
      padding: 40px 10 0;
    }

    .head_text {
      display: none;
    }
  }

  .dec_items {
    margin-top: 30px;
    // padding: 56px 0 280px 0;

    .decrees_item {
      display: flex;
      align-items: center;
      padding: 24px;
      border-radius: 12px;
      background-color: #f3f4f6;

      .dec_img {
        width: 32px;
        height: 32px;
      }

      .dec_text {
        p {
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
        }
      }

      .more {
        width: 24px;
        height: 24px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .ab {
    background: white;

    .dec_bread {
      display: block;

      .bread_crumbs {
        padding: 48px 56px;
      }

      .head_text {
        display: block;
      }
    }

    .dec_items {
      padding: 0px 0 120px 0;

      .decrees_item {
        border: 1px solid #d1d5db;

        .more {
          display: none;
        }

        .dec_text {
          p {
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>
