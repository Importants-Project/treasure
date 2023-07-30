<template>
  <div>

  <div>
    <loading :loading="loading"></loading>
  </div>
  <div v-if="!loading">
    <bread-crumbs :head_text="headText" :items="items"></bread-crumbs>
    <div class="container">
      <b-row>
        <b-col cols lg="9" xl="9" md="12" sm="12">
          <div class="managment responsebox">
            <div>
              <div class="managment_item " v-for="item in managementData.data">
                <div class="managment_img">
                  <img
                    :src="item.image"
                    alt=""
                  />
                </div>
                <div class="managment_info">
                  <div class="name">
                    <p>{{ item.full_name }}</p>
                  </div>
                  <div class="job">
                    <p>{{ item.position }}</p>
                  </div>
                </div>
              </div>
            </div>
            <social-footer class="mt-4"></social-footer>
          </div>
        </b-col>
        <b-col cols lg="3">
          <side-bar :items="managementData.links" ></side-bar>
        </b-col>
      </b-row>
    </div>
  </div>
  </div>

</template>

<style lang="scss">
.managment {
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 200px;
  .managment_item {
    border-bottom: 1px solid #d1d5db;
    padding: 32px 0;
    display: flex;
    &:last-child {
      border: none;
      margin-bottom: 200px;
    }
    .managment_img {
      width: 80px;
      height: 80px;
    }
    .managment_info {
      margin-left: 24px;
      .name {
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;
        color: #1f2937;
      }
      .job {
        font-weight: 400;
        margin-top: 4px;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: #4b5563;
      }
    }
  }
}

//.side_bar{
//  width: 100%;
//  margin-left: 20px;
//}
.side_bar_item {
  &:hover{
    background: #145CF0;
    transition: background .5s ease-in;
    .head_text,
    .content{
      transition: background .5s ease-in;

      color: #fff;

    }
  }
}

@media screen  and (max-width: 900px){
  .side_bar_item {
    margin-bottom: 20px;
  }
  .crumb2{
    display: none;
  }
  .managment{
    padding: unset;
    &_item{
      border: 1px solid grey;
      margin-bottom: 24px;
      border-radius: 12px;
      padding: 24px !important;
      display: block !important;

      &:last-child {
        border: 1px solid grey !important;
        margin-bottom: 32px !important;
      }

      .managment_img{
        margin-bottom: 24px;
      }
      .managment_info{
        margin-left: 0 !important;
        .job{
          line-height: 28px;
        }
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

      headText:"Rəhbərlik",

      managment: [],
      items: [
        {
          text: "Haqqımızda",
          href: "#",
        },
        {
          text: "Rəhbərlik",
        },
      ],
      sidebar: [
        {
          title: "Tarix",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/tarix",
        },
        {
          title: "Fəaliyyət",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/fealiyyet",
        },
        {
          title: "Əsasnamə",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/esasname",
        },
        {
          title: "Struktur",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/struktur",
        },
        {
          title: "Xəzinədarlıq idarələri",
          description: "Lorem ipsum dolor sit amet consectetur. Sit lorem",
          slug: "/xezinedarliq-idareleri",
        },
      ],
    };
  },

  components:{
    SocialFooter,
    BreadCrumbs,
    SideBar,
  },
  computed: {

    ...mapGetters({ managementData: "management/management" }),

  },
  methods: {
    async getManagement() {
      await this.$store.dispatch("management/managementData");
      this.management = this.managementData;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.getManagement();
  },
};
</script>
