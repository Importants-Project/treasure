<template>
    <div>
        <div>
            <loading :loading="loading"></loading>
        </div>
        <div v-if="!loading">
            <bread-crumbs :head_text="headText" :items="items"></bread-crumbs>
            <div class="container">
                <div class="treasury_departments">
                    <div class="treasury_departments_map">
                        <GmapMap
                                :center="{ lat: markers[0].position.lat, lng: markers[0].position.lng }"
                                :zoom="16"
                                style="width: 100%; height: 580px"
                        >
                            <GmapMarker
                                    :key="index"
                                    ref="Gmarker"
                                    v-for="(m, index) in markers"
                                    :position="m.position"
                                    :clickable="true"
                                    :draggable="true"
                                    :icon="markerOptions"
                                    @click="center = m.position"
                            />
                        </GmapMap>

                        <div class="location_tab">
                            <div
                                 :class="['location_tab_item', {'active': isActive === item.id}]"
                                 v-for="item in tdData.data"
                                 :key="item.id"
                                 @click="open(item)"
                            >
<!--                                <pre>{{ item}}</pre>-->
                                <div class="d-flex justify-content-between">
                                    <div class="location_icon">
                                        <img src="@/assets/images/location_icon.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <div class="location_name">
                                            <p>{{ item.title }}</p>
                                        </div>
                                        <div class="location_addres">{{ item.address }}</div>
                                    </div>
                                    <div class="drop_icon">
                                        <img
                                             :style="item.open ? 'transform:rotate(180deg);' : ''"
                                             src="@/assets/images/dropdown_icon.svg"
                                             alt=""
                                        />
                                    </div>
                                </div>
                                <div class="location_tab_info">
                                    <div class="work_time mb-4">
                                        <p>İş vaxtı</p>
                                        <span>{{ item.work_time }}</span>
                                    </div>
                                    <div class="email mb-4">
                                        <p>E-mail</p>
                                        <span><a style="color: #145CF0;" :href="`mailto:${item.email}`">{{
                                              item.email
                                            }}</a></span>
                                    </div>
                                    <div class="phone">
                                        <p>Əlaqə nömrəsi</p>
                                        <span>Tel:<a :href="`tel:${item.phone}`" style="color: #145CF0;"> {{
                                              item.phone
                                            }}</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
const mapMarker = require("@/assets/images/map_ico.png");
import {mapGetters} from "vuex";
import BreadCrumbs from "@/components/bread_crumbs";
import SocialFooter from "@/components/social_footer";

export default {
    data() {
        return {
            loading: true,
            headText: "Xəzinədarlıq idarələri",

            isActive: 1,
            markerOptions: {
                url: mapMarker,
                size: {width: 58, height: 58, f: "px", b: "px"},
                scaledSize: {width: 58, height: 58, f: "px", b: "px"},
            },
            items: [

                {
                    text: "Haqqımızda",
                    href: "#",
                },
                {
                    text: "Xəzinədarlıq idarələri",
                },
            ],
            td: [],
            markers: [
                {
                    position: {
                        lat: 40.3754434,
                        lng: 49.8326748,
                    },
                },
            ],
        };
    },
    components: {
        SocialFooter,
        BreadCrumbs,
    },
    computed: {
        ...mapGetters({tdData: "td/td"}),
    },
    methods: {
        async getTd() {
            await this.$store.dispatch("td/tdData");
            this.td = this.tdData;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        open(e) {
              if (this.isActive === e.id){
        this.isActive = null;
      }else{
        this.isActive = e.id;
      }
            this.markers[0].position.lat = Number(e.latitude);
            this.markers[0].position.lng = Number(e.longitude);
        }
    },
    created() {
        this.getTd();
    },
};
</script>

<style lang="scss" scoped>
.treasury_departments {
  margin-top: 24px;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 200px;

  .treasury_departments_map {
    position: relative;

    .gmnoprint {
      display: none !important;
    }

    .gm-fullscreen-control {
      display: none !important;
    }
  }

  .location_tab {
    position: absolute;
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    width: 477px;
    height: 532px;
    overflow-y: scroll;
    // top: 24px;
    // left: 24px;
    left: 0;
    top: 0;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: #eaecf0;
      border-left: 1px solid white;
      border-right: 1px solid white;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #d0d5dd;
      border-left: 1px solid #d0d5dd;
      border-right: 3px solid #d0d5dd;
      border-radius: 10px;
    }

    .location_tab_item {
      border: 1px solid #d1d5db;
      cursor: pointer;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 16px;
      max-height: 84px;
      overflow: hidden;

      &.active {
        max-height: unset;

        .drop_icon {
          img {
            transform: rotate(180deg);
          }
        }

        .location_tab_info {
          transition: .3s ease-in-out;
          opacity: 1;

        }
      }

      .content {
        .location_addres {
          font-weight: 400;
          font-size: 14px;
          width: 290px;
          line-height: 18px;
          letter-spacing: 0.2px;
          color: #4B5563;
          opacity: 0.8;
        }
      }

      .location_tab_info {
        padding: 18px 60px;
        opacity: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }

      .location_icon {
        width: 40px;
        height: 40px;
      }

      .drop_icon {
        width: 12px;
        height: 6px;

        img {
          transition: 0.3s ease-in-out;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .location_tab {
    height: 300px !important;
    width: 100% !important;
    padding: 0 !important;
    top: 0 !important;
    left: 0 !important;
  }

  .location_tab_item {

    .location_tab_info {
      padding: 16px !important;
    }

    .location_addres,
    .location_icon {
      display: none;
    }
  }

  .vue-map-container {
    height: 387px !important;
    top: 370px;
    margin: 0 0 200px;
  }
}

@media screen and (max-width: 400px) {

  .vue-map-container {
    height: 187px !important;
  }
}

</style>


