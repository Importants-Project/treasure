<template>
<div>

  <div>
    <loading :loading="loading"></loading>
  </div>
  <div v-if="!loading">
    <bread-crumbs2 :contactHead="contactHead" :items="items"></bread-crumbs2>
    <b-container>
      <div class="contact ">
        <b-col cols xl="5" lg="5" sm="12" md="12">
          <div class="contact_info">
            <div class="addres d-flex">
              <div class="logo">
                <img src="@/assets/images/contact/addres.svg" alt="" />
              </div>
              <div class="items">
                <div class="title"><p>Ünvan</p></div>
                <div class="subtitle">
                  <p>
                    {{ contactData.data?.address }}
                  </p>
                </div>
              </div>
            </div>
            <div class="telephone d-flex">
              <div class="logo">
                <img src="@/assets/images/contact/telephone.svg" alt="" />
              </div>
              <div class="items">
                <div class="title"><p>Zəng et</p></div>
                <div class="subtitle" v-for="item in contactData.data?.phones">
                  <p><a style="color: #145CF0;" :href="`tel:${item}`"> {{ item }}</a></p>
                </div>
              </div>
            </div>
            <div class="email d-flex">
              <div class="logo">
                <img src="@/assets/images/contact/email.svg" alt="" />
              </div>
              <div class="items">
                <div class="title"><p>Email yaz</p></div>
                <div class="subtitle" v-for="item in contactData.data?.emails">
                  <p><a style="color: #145CF0;" :href="`mailto:${item}`"> {{ item }}</a></p>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col  cols xl="7" lg="7" sm="12" md="12">
          <div class="contact_map">
            <GmapMap
              :center="{
                lat: markers[0].position.lat,
                lng: markers[0].position.lng,
              }"
              :zoom="17"
              style="width: 100%; height: 580px"
            >
              <GmapMarker
                :key="index"
                ref="Gmarker"
                v-for="(m, index) in markers"
                :position="m.position"
                :icon="markerOptions"
              />
            </GmapMap>
          </div>
        </b-col>
      </div>
    </b-container>
  </div>

</div>

</template>

<script>
import { mapGetters } from "vuex";
import BreadCrumbs2 from "@/components/bread_crumbs2";
export default {
  data() {
    return {
      contact: [],
      loading: true,

      contactHead: "Bizimlə əlaqə",
      items: [
        {
          text: "Əsas səhifə",
          href: "/",
        },
        {
          text: "Əlaqə",
          href: "#",
        },
      ],
      markers: [
        {
          position: {
            lat: 0,
            lng: 0
          },
        },
      ],
      markerOptions: '',
    };
  },
  components:{
    BreadCrumbs2,
  },
  computed: {

    ...mapGetters({ contactData: "contact/contact" }),
  },
  methods: {
    async getContact() {
      await this.$store.dispatch("contact/contactData");
      this.contact = this.contactData;
      // this.markers[0].position.lat = this.contactData.data?.longitude;
      // this.markers[0].position.lng = this.contactData.data?.latitude;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  watch: {
    contactData(){
      this.markers[0].position.lat = Number(this.contactData.data?.longitude);
      this.markers[0].position.lng = Number(this.contactData.data?.latitude);    }
  },
  created() {
    this.getContact();
  },
};
</script>
