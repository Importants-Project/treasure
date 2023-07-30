<template>
  <div class="container">
    <div class="useful_links">
      <div class="header_txt"><h2>Faydalı linklər</h2></div>

      <div class="useful_links_items slide__mob">
          <div class="useful_links_items_margin" v-for="item in useful">
            <a :href="item.link">
              <div class="useful_item mb-4">
                <div class="item_header">
                  <p>{{item.title}}</p>
                </div>
                <div class="item_content">
                  <p style="  display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden !important;
    text-overflow: ellipsis;">
                    {{item.description}}
                  </p>
                </div>
                <div class="more d-flex ">
                  <a class="more_text"  :href="item.link">
                    ƏTRAFLI
                  </a>
                  <div class="item_img">
                    <img :src="item.image" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    useful: Array,
  },
};
</script>
