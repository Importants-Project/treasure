<template>
  <b-container>
    <div class="header_side d-flex justify-content-between align-items-center">
      <div class="header_logo">
        <a href="/">
          <img src="@/assets/images/gerblogo.svg" alt=""/>
        </a>
      </div>
      <div class="header_menu">
        <ul>

          <li>
            <nuxt-link exact to="/"> Əsas</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/xeberler"> Xəbərlər</nuxt-link>
          </li>

          <li class="dropdown">
            <span class="dropdown-title">Qanunvericilik</span>

            <ul class="dropdown_list">
              <nuxt-link to="/konstitusiya">
                <li>Konstitusiya</li>
              </nuxt-link>
              <nuxt-link to="/qanunlar">
                <li>Qanunlar</li>
              </nuxt-link>
              <nuxt-link to="/fermanlar">
                <li>Fərmanlar</li>
              </nuxt-link>
              <nuxt-link to="/serencamlar">
                <li>Sərəncamlar</li>
              </nuxt-link>
              <nuxt-link to="/qerarlar">
                <li>Qərarlar</li>
              </nuxt-link>
            </ul>
          </li>
          <li class="dropdown">
            Haqqımızda
            <ul class="dropdown_list">
              <nuxt-link to="/tarix">
                <li>Tarix</li>
              </nuxt-link>
              <nuxt-link to="/fealiyyet">
                <li>Fəaliyyət</li>
              </nuxt-link>
              <nuxt-link to="/esasname">
                <li>Əsasnamə</li>
              </nuxt-link>
              <nuxt-link to="/rehberlik">
                <li>Rəhbərlik</li>
              </nuxt-link>
              <nuxt-link to="struktur">
                <li>Struktur</li>
              </nuxt-link>
              <nuxt-link to="/xezinedarliq-idareleri">
                <li>Xəzinədarlıq idarələri</li>
              </nuxt-link>
            </ul>
          </li>
          <li class="dropdown">
            Faydalı
            <ul class="dropdown_list">

              <nuxt-link to="/electron-xidmetler"
              >
                <li>Elektron xidmətlər</li>
              </nuxt-link

              >
              <nuxt-link to="/esasgostericiler">
                <li>Əsas göstəricilər</li>
              </nuxt-link>
              <nuxt-link to="/hesabmelumatlari">
                <li>Hesab məlumatları</li>
              </nuxt-link>
              <nuxt-link to="/satinalmalar">
                <li>Satınalmalar</li>
              </nuxt-link>
              <nuxt-link to="/tez-tez-verilen-suallar">
                <li>Tez-tez verilən suallar</li>
              </nuxt-link>
              <nuxt-link to="/layiheler">
                <li>Layihələr</li>
              </nuxt-link>
            </ul>
          </li>

          <li>
            <nuxt-link to="/elaqe"> Əlaqə</nuxt-link>
          </li>

        </ul>
      </div>
      <div class="mobile_menu">
        <div
          class="custom_hamburger"
          @click="toggleMenu"
        >

          <div v-if="!navOpen">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 1L1 17" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1L17 17" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div class="custom_hamburger" v-else>
            <span></span>
            <span></span>
            <span></span>

          </div>


        </div>

        <div class="mobile_list" :class="{ active: !navOpen }">
          <div class="top_header__menu">
            <div class="top_header_item">

              <div class="search_lang ">
                <div class="search ">
                  <form @submit.prevent="search" v-on:keyup.enter="searchTag">
                    <b-form-input
                      @change="searchNews()"
                      v-model="searchText"
                      placeholder="Axtar..."
                    ></b-form-input>

                    <div @click.prevent="clickIcon" style="position: absolute;
    right: 15px;
    top: 15px;
z-index: 210">

                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                          stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 21L16.65 16.65" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>

                    </div>

                  </form>
                  <div>

                  </div>
                </div>
              </div>

            </div>

          </div>

          <ul>
            <li class="head_li" @click="closeNav">
              <nuxt-link to="/"> Əsas</nuxt-link>
            </li>
            <li class="head_li" @click="closeNav">
              <nuxt-link to="/xeberler"> Xəbərlər</nuxt-link>
            </li>
            <li class="head_li" v-for="(items) in items" :key="items.id" @click="toggleListMenu(items.id)">
              <span class="head_li-flex">
                <span>{{ items.title }}</span>
                <span class="head_li-flex_icon">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7L7 1L13 7" stroke="#1F2937" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                </span>
              </span>

              <ul class="subList" :class=" isActive == items.id ? 'subactive':''">
                <li @click="closeNav" v-for="(items,i) in items.list" :key="i">
                  <nuxt-link :to="items.path"> {{ items.title }}</nuxt-link>
                </li>
              </ul>
            </li>

            <li class="head_li" @click="closeNav">
              <nuxt-link to="/elaqe"> Əlaqə</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </b-container>
</template>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
<script>

export default {
  data() {
    return {
      searchText: null,
      navOpen: true,
      isActive: 0,

      items: [
        {
          id: '1',
          title: "Qanunvericilik",

          list: [
            {title: "A.R Konstitusiyası", path: '/konstitusiya'},
            {title: " Qanunlar", path: '/qanunlar'},
            {title: " Fərmanlar", path: '/fermanlar'},
            {title: " Sərəncamlar", path: '/serencamlar'},
            {title: " Qərarlar", path: '/qerarlar'},
          ]
        },
        {
          id: '2',

          title: "Haqqımızda",

          list: [
            {title: " Tarix", path: '/tarix'},
            {title: " Fəaliyyət", path: '/fealiyyet'},
            {title: " Əsasnamə", path: '/esasname'},
            {title: " Rəhbərlik", path: '/rehberlik'},
            {title: " Struktur", path: '/struktur'},
            {title: " Xəzinədarlıq idarələri", path: '/xezinedarliq-idareleri'},
          ]
        },

        {
          id: '3',

          title: "Faydalı",
          list: [
            {title: " Elektron xidmətlər", path: '/electron-xidmetler'},
            {title: " Əsas göstəricilər", path: '/esasgostericiler'},
            {title: " Hesab məlumatları", path: '/hesabmelumatlari'},
            {title: " Satınalmalar", path: '/satinalmalar'},
            {title: " Tez-tez verilən suallar", path: '/tez-tez-verilen-suallar'},
            {title: "Layihələr", path: '/layiheler'},
          ],
        }
      ],
    };
  },

  methods: {

    search() {

      if (this.searchText) {
        this.$router.push({path: "/search", query: {name: this.searchText}});
      } else {
        this.$router.push({path: "/"});
      }

    },
    searchTag() {
      this.searchText = null;


      this.navOpen = true;
      if (!this.navOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },


    clickIcon() {
      if (this.searchText !== null) {
        this.$store.dispatch("search/searchData", {name: this.searchText});
        this.news = this.searchData;
        if (this.searchText) {
          this.$router.push({path: "/search", query: {name: this.searchText}});
          this.searchText = null;
          this.navOpen = true;
        } else {
          this.$router.push({path: "/"});
          this.searchText = null;
          this.navOpen = true;
        }
      }
    },

    searchNews() {
      if (this.searchText !== null) {
        this.$store.dispatch("search/searchData", {name: this.searchText});
        this.news = this.searchData;
        if (this.searchText) {
          this.$router.push({path: "/search", query: {name: this.searchText}});

        } else {
          this.$router.push({path: "/"});

        }
      }

    },
    toggleMenu() {
      this.navOpen = !this.navOpen;
      if (this.navOpen) {
        document.body.classList.remove("no-scroll");
      } else {
        document.body.classList.add("no-scroll");
      }
    },

    closeNav() {
      this.navOpen = true;

      if (!this.navOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },

    toggleListMenu(e) {
      if (this.isActive === e) {
        this.isActive = null;
      } else {
        this.isActive = e;
      }
    }
  }
};
</script>


<style>
.subactive {
  display: block !important;
}

.top_header__menu {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}

.top_header__menu .top_header_item .search_lang {
  position: relative;
}

.top_header__menu .top_header_item .search_lang .search input[type=text] {
  cursor: auto;
  box-sizing: border-box;
  width: 90vw;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  height: 56px;
  border-radius: 4px;
  background-color: #F3F4F6;
  padding: 16px 16px 20px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;


}
</style>
