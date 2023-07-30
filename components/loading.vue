<template>
  <div class="load__box" v-if="loading">
    <img src="../assets/images/load.svg" alt="load.svg">
  </div>
</template>




<script>



export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
