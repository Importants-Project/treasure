<template>
  <div class="container">
    <div class="news_section ">
      <div class="header_txt"><h2>Xəbərlər</h2></div>
      <div class="news_items  news_itemsDesktop ">
        <b-row>
          <b-col cols lg="4" md="6" v-for="item in news">
            <nuxt-link exact :to="`xeberler/${item.slug}`">
              <div class="news_item">
                <div class="news_date">{{ item.created_at }}</div>
                <div class="news_content">
                  {{ item.title }}
                </div>
              </div>
            </nuxt-link>
          </b-col>
        </b-row>
      </div>


      <div class="news_items slide__mob">
          <div style="width: 300px" v-for="item in news" >
            <nuxt-link exact :to="`xeberler/${item.slug}`">
              <div class="news_item">
                <div class="news_date">{{ item.created_at }}</div>
                <div class="news_content">
                  {{ item.title }}
                </div>
              </div>
            </nuxt-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: Array,
  },
};
</script>
