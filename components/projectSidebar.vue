<template>
    <div class="project_side_bar">
      <div class="project_side_bar_item" v-for="side in projectSingle">
        <nuxt-link exact :to="`/layiheler/${side.slug}`">
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
      projectSingle: Array,
    },
  };
  </script>
  