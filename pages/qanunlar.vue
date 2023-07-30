<template>

  <div>
    <div>
      <loading :loading="loading"></loading>
    </div>
    <div v-if="!loading">
      <div class="back ">
        <bread-crumbs
          class="law_bread "
          :head_text="law_bread"
          :items="items"
        ></bread-crumbs>
        <div class="container">

          <div class="d-laws-flex">

            <div>

              <div class="laws " v-for="item in lawsData.data">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="laws_item d-flex align-items-center">
                    <div class="laws_img">
                      <img src="@/assets/images/laws/pdf.svg" alt="pdf.svg"/>
                    </div>
                    <p style="margin-left:20px; overflow: hidden;
    width: 40vw;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;" class="laws_title ">{{ item.title }}</p>

                  </div>

                  <div class="d-flex align-items-center ">

                    <a v-if="item?.file.endsWith('.pdf')" target="_blank" :href="item.file">
                      <img src="../assets/images/pdf.svg" alt="right_arrow" style="width: 24px; "/>
                    </a>
                    <img @click="download(item.id)" style="width: 24px ; margin-left: 10px;  "
                         src="../assets/images/download-solid.svg" alt="file-invoice-solid.svg">

                  </div>

                </div>


              </div>
            </div>

            <b-col cols xl="4" lg="4" md="12" sm="12">
              <side-bar :items="sidebar"></side-bar>


            </b-col>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
.back {
  background-color: #fff;
  padding-top: 56px;
  padding-bottom: 32px;

  .laws {
    border-radius: 12px;
    padding: 37px 24px;
    background-color: #f3f4f6;
    margin-bottom: 32px;
    cursor: pointer;

    .laws_item {
      width: 80%;
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
.d-laws-flex{
  display: flex;
}


  @media screen and (max-width: 1100px) {
    .d-laws-flex{
      display: block;
    }

  }
  .law_bread {
    .bread_crumbs {
      margin: 0;
      padding: 0 10 48px;

      .head_text {
        display: none;
      }
    }
  }
}


@media screen and (max-width: 900px) {
  .laws_title {
    font-size: 18px;
  }

  .arrow_ico {
    display: none;
  }
  .back {
    background-color: #f3f4f6;
    padding-top: unset;

    .law_bread {
      .bread_crumbs {
        margin: 0;
        padding: 48px 56px;

        .head_text {
          display: block;
        }
      }

    }

    .laws {
      border: 1px solid #D1D5DB;

      &:first-child {
        margin-top: 24px;
      }

      .laws_item {
        .laws_title {
          font-size: 18px;
          font-weight: normal;
          line-height: 28px;
        }
      }
    }
  }
}
</style>

<script>
import {mapGetters} from "vuex";
import SideBar from "../components/SideBar.vue";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";

export default {
  data() {
    return {
      laws: [],
      loading: true,
      law_bread: 'Qanunlar',

      items: [
        {
          text: "Qanunvericilik",
        },

        {
          text: "Qanunlar",
        },
      ],

      sidebar: [


        {
          title: " Konstitusiya",
          link: "https://treasure.alv.az/konstitusiya"
        },

        {
          title: "Qanunlar",
          link: "https://treasure.alv.az/qanunlar"
        },


        {
          title: "Fərmanlar",
          link: "https://treasure.alv.az/fermanlar"
        },

        {
          title: "Sərəncamlar",
          link: "https://treasure.alv.az/serencamlar"
        },
        {
          title: "Qərarlar",
          link: "https://treasure.alv.az/qerarlar"
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
    ...mapGetters({lawsData: "laws/laws"}),
  },
  methods: {

    async download(id) {
      await this.$store.dispatch("laws/lawsDataPdf", id);
    },
    async getLaws() {
      await this.$store.dispatch("laws/lawsData");
      this.laws = this.lawsData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.getLaws();
  },
};
</script>
