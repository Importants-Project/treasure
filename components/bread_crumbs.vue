<template>
  <div class="container">
    <div class="bread_crumbs">
      <div class="bread_crumb d-flex">

        <span v-for="item in items" class="crumb"
        >
          <a :href="item.href" class="d-flex">{{ item.text }}<p class="ml-2">></p></a>
        </span>

      </div>

      <div v-if="head_text">
        <h2   class="crumb2"
        >{{ head_text }}</h2
        >
      </div>


      <div class="head_text" v-for="head in head_text">
        <h1>{{ head.title }}</h1>


      </div>
      <span style="
font-family: 'TT Interfaces',sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #6B7280;
    margin-top: 8px;
" class="bread_crumb ">{{ createTime }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    head_text: {
      type: String,
      default: ''
    },
    createTime: {
      type: String,
      default: ''
    }
  },
};
</script>
