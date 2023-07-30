<template>
  <div class="side_bar">
    <div class="side_bar_item" :class="{ 'activeSide_bar_item': isActive(filterLink(side.link))}"  v-for="side in items">
      <nuxt-link exact  v-if="customSlug" :to="`/${customSlug}/${side.slug}`" >
        <div class="head_text">{{ side.title }}</div>
        <div class="content" v-html="side.description">
        </div>
      </nuxt-link >
     <nuxt-link :to="filterLink(side.link)">
        <div class="head_text">{{ side.title }}</div>
        <!-- <div class="content" v-html="side.description"></div> -->
      </nuxt-link >

    </div>



    <div   v-for="sidebar in side">
     <nuxt-link :to="filterLink(sidebar.slug)">
       <div class="side_bar_item" >

        <div class="head_text">{{ sidebar.title }}</div>
        <!-- <div class="content" v-html="sidebar.description">
        </div> -->
       </div>

      </nuxt-link >
    </div>


    <div   v-for="sidebar in sideTitle">
      <nuxt-link :to="filterLink(sidebar.slug)">
        <div class="side_bar_item" >
          <div class="head_text">{{ sidebar.title }}</div>
        </div>

      </nuxt-link >
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:null
    }
  },
  props: {
    side: Array,
    sideTitle:Array,
    items: Array,
    customSlug: Array,
  },


  methods:{
    filterLink(link){
      return link.split('/').at(-1)
    },

    isActive(link) {
      return this.$route.path === '/' + link
    },
  }
};
</script>
