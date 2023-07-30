<template>
  <div class="contact_us_bg">
    <div class="container">
      <div class="contact_us">
        <b-row>
          <b-col cols lg="6" md="6">
            <div class="left_side">
              <div class="head_text"><p>Bizimlə əlaqə</p></div>
              <div class="content">
                <p>
                  Hər hansı şikayət, təklif və ya sualınız olarsa bizə yaza,
                  zəng edə və ünvanımıza yaxınlaşa bilərsiniz.
                </p>
              </div>
              <div class="telephone d-flex">
                <p>Telefon:</p>

                <span v-for="(phone,i) in contactData.data.phones" :key="i"><a style="color: #145CF0;" :href="`tel:${phone}`">{{ phone }}</a></span>

              </div>
              <div class="email d-flex">
                <p>E-poçt:</p>
                <span v-for="(email,i) in contactData.data.emails" :key="i"><a style="color: #145CF0;" :href="`mailto:${email}`">{{ email }}</a></span>
              </div>
              <div class="addres d-flex">
                <p>Ünvan:</p>
                <span>{{ contactData.data.address }}</span>
              </div>
            </div>
          </b-col>
          <b-col cols lg="6" md="6">
            <div class="right_side">
              <div class="contact_form">
                <div class="head_text">
                  <p>Sualınız var? Bizə yazın</p>
                </div>
                <b-form>
                  <b-form-input placeholder="Ad, soyad, ata adı">
                  </b-form-input>
                  <b-form-input type="email" placeholder="E-mail">
                  </b-form-input>
                  <b-form-input type="tel" placeholder="Əlaqə nömrəsi">
                  </b-form-input>
                  <b-textarea placeholder="Müraciətin mətni"></b-textarea>
                  <button>Göndər</button>
                </b-form>
              </div>
            </div>
          </b-col>
        </b-row>


      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "IndexPage",
  data(){
    return {
      mailTo: "info@dxa.gov.az",
      tel: "+994 12 412 52 63"
    }
  },

  computed: {
    ...mapGetters({ contactData: "contact/contact" }),
  },
  methods: {
    async getContact() {
      await this.$store.dispatch("contact/contactData");
      this.contact = this.contactData;
    },


  },

  created() {
    this.getContact();
  },

};
</script>
