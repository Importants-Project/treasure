<template>
  <div class="purchases" >
    <bread-crumbs
      class="purchases_bread"
      :head_text="purchases_services"
      :items="items"
    ></bread-crumbs>

    <div class="container">
      <div class="project_items ">
        <b-row>
          <b-col cols md="12" sm="12" xl="6" lg="6" v-for="item in projectData.data">
            <nuxt-link exact :to="`/layiheler/${item.slug}`">
              <div class="project_item purchases_item mb-4">
                <div class="title">
                  <p>{{ item.title }}</p>
                </div>
                <div class="desc">
                  <p>{{ item.description }}</p>
                </div>
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
import SideBar from "@/components/SideBar.vue";
export default {
  data() {
    return {
      headText:"Fərmanlar",

      project: [],
      purchases_services: "Layiheler",
      items: [
        {
          text: "Faydalı",
        },

        {
          text: "Layiheler",
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
          title: "Sərəncamlar",
          description: "Lorem ipsum dolor sit amet consectetur. Amet vivamus.",
          slug: "/serencamlar",
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
    SideBar,
  },
  computed: {
    ...mapGetters({ projectData: "project/project" }),
  },
  methods: {
    async getProject() {
      await this.$store.dispatch("project/projectData");
      this.project = this.projectData;
    },
  },
  created() {
    this.getProject();
  },
};
</script>

<style lang="scss">
.project_items {
  .project_item {
    padding: 48px;
    border-radius: 12px;
    background-color: #fff;
    min-height: 284px;
    .title {
      p {
        font-weight: 700;
        font-size: 26px;
        line-height: 36px;
      }
    }
    .desc {
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        margin-top: 24px;
      }
    }
  }
}
</style>
