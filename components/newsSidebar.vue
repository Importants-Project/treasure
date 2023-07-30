<template>
  <div class="news_side_bar">
    <div class="news_side_bar_item" v-for="side in newsSingle">
      <nuxt-link exact :to="`/xeberler/${side.slug}`">
        <div class="date">{{ side.created_at }}</div>
        <div class="desc" v-html="side.title"></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    side: Array,
    newsSingle: Array,
  },
};
</script>
