<template>
  <div>

    <div>
      <loading :loading="loading"></loading>
    </div>
    <div v-if="!loading">
      <bread-crumbs2 :contactHead="contactHead" :items="items"></bread-crumbs2>
      <b-container>
        <div class="faqs">
          <b-row>
            <b-col cols="12" v-for="item in faqsData.data" :key="item.id">
              <div class="faq" @click="open(item.id)" :class="{active: isActive == item.id}">
                <div class="faqs_item   d-flex justify-content-between">
                  <p class="title">{{ item.title }}</p>
                  <div class="faq_ico">
                    <img src="@/assets/images/dropdown_icon.svg" alt="dropdown_icon"/>
                  </div>
                </div>
                <div class="faqs_info">
                  <p class="subtitle" v-html="item.description">

                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import BreadCrumbs2 from "@/components/bread_crumbs2";

export default {
  data() {
    return {
      contact: [],
      loading: true,

      contactHead: "Tez-tez verilən sualar",
      faqs: [],
      isActive: 0,
      items: [
        {
          text: "Əsas səhifə",
          href: "/",
        },
        {
          text: "Tez-tez verilən suallar",
          href: "#",
        },
      ],
    };
  },
  components: {
    BreadCrumbs2,
  },
  computed: {
    ...mapGetters({faqsData: "faqs/faqs"}),
  },
  methods: {
    async getFaqs() {
      await this.$store.dispatch("faqs/faqsData");
      this.faqs = this.faqsData;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    open(e) {
      if (this.isActive === e) {
        this.isActive = null;
      } else {
        this.isActive = e;
      }


      console.log(this.isActive);
    }
  },

  created() {
    this.getFaqs();
  },
};
</script>
