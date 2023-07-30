<template>
  <div class="footer_bg">
    <b-container>
      <div class="footer">
        <b-row>
          <b-col lg="5" md="6">
            <div class="left_side">
              <div class="logo">
                <img src="@/assets/images/logogerbfoot.svg" alt="" />
              </div>
              <div class="mobile_side">
                <div class="mobile_side_items d-flex align-items-center">
                  <div class="mobile_side_ico">
                    <img src="@/assets/images/footer/phone_ico.svg" alt="" />
                  </div>
                  <div class="mobile_side_detail">
                    <p class="mb-1">Telefon</p>
                    <span>(+994) 555-01-14</span>
                  </div>
                </div>
                <div class="mobile_side_items d-flex align-items-center">
                  <div class="mobile_side_ico">
                    <img src="@/assets/images/footer/message_ico.svg" alt="" />
                  </div>
                  <div class="mobile_side_detail">
                    <p class="mb-1">Email</p>
                    <span>info@dxa.gov.az</span>
                  </div>
                </div>
                <div class="mobile_side_items d-flex align-items-center">
                  <div class="mobile_side_ico">
                    <img src="@/assets/images/footer/location_ico.svg" alt="" />
                  </div>
                  <div class="mobile_side_detail">
                    <p class="mb-1">Ünvan</p>
                    <span>Bakı şəhəri, İ.Xəlilov 120. AZ1102</span>
                  </div>
                </div>
              </div>
              <div class="social_icons d-flex">
                <div class="facebook social_size">
                  <a :href="contactData?.data?.facebook" target="_blank">
                    <img src="@/assets/images/social_icons/facebook.png" alt="" />
                  </a>
                </div>
                <div class="linkedin social_size">
                  <a :href="contactData?.data?.linkedin" target="_blank">

                  <img src="@/assets/images/social_icons/linkedin.png" alt="" />
                  </a>
                </div>
                <div class="twitter social_size">
                  <a :href="contactData?.data?.twitter" target="_blank">
                  <img src="@/assets/images/social_icons/twitter.png" alt="" />
                  </a>
                </div>
                <div class="youtube social_size">
                  <a :href="contactData?.data?.youtube" target="_blank">

                  <img src="@/assets/images/social_icons/youtube.png" alt="" />

                  </a>
                </div>
              </div>
              <div class="copyright">
                © 2023 dxa.gov.az. All rights reserved Design & development
                <span>by ALventures</span>
              </div>
              <!-- <div class="mobile_side">
                <div class="copyright_mobile">
                  Copyright DXA 2022 All Right Reserved
                </div>

              </div> -->
            </div>
          </b-col>
          <b-col lg="2" md="2" class="mr-5"
            ><div class="footer_menu">
              <ul>
                <li>HAQQIMIZDA</li>
                <li>
                  <nuxt-link exact to="/tarix"> Agentliyin tarixi </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/fealiyyet">
                    Fəaliyyəti haqqında
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/esasname"> Əsasnamə </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/rehberlik"> Rəhbərlik </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="struktur"> Struktur </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/xezinedarliq-idareleri">
                    Xəzinədarlıq idarələri
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col lg="2 " md="2" class="mr-3"
            ><div class="footer_menu">
              <ul>
                <li>QANUNVERİCİLİK</li>
                <li>
                  <nuxt-link exact to="/konstitusiya">
                    A.R Konstitusiyası
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/qanunlar"> Qanunlar </nuxt-link>
                </li>

                <li>
                  <nuxt-link exact to="/fermanlar"> Fərmanlar </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/serencamlar"> Sərəncamlar </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/qerarlar"> Qərarlar </nuxt-link>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col lg="2"
            ><div class="footer_menu">
              <ul>
                <li>FAYDALI LİNKLƏR</li>
                <li>
                  <nuxt-link exact to="/electron-xidmetler"
                    >Elektron xidmətlər</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link exact to="/esasgostericiler">
                    Əsas göstəricilər
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/hesabmelumatlari">
                    Hesab məlumatları
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/satinalmalar"> Satınalmalar </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/tez-tez-verilen-suallar">
                    Sual-cavab
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/elaqe"> Əlaqə </nuxt-link>
                </li>
                <li>
                  <nuxt-link exact to="/layiheler"> Layihələr </nuxt-link>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
        <div v-show="scY > 300" class="go_top" @click="toTop">
          <img src="@/assets/images/arrow_up.svg" alt="" />
        </div>
      </div>
    </b-container>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import BreadCrumbs from "@/components/bread_crumbs.vue";

export default {
  data() {
      return {
        scTimer: 0,
        scY: 0,
      }
    },

  computed: {
    ...mapGetters({ contactData: "contact/contact" }),
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },


    methods: {
      async getContact() {
        await this.$store.dispatch("contact/contactData");
        this.contact = this.contactData;
        // this.markers[0].position.lat = this.contactData.data?.longitude;
        // this.markers[0].position.lng = this.contactData.data?.latitude;
      },

      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },

  created() {
    this.getContact();
  },
}


</script>
