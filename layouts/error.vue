<template>
  <div class="error_info">
    <div class="info">
      <h1 v-if="error.statusCode === 404">Belə bir keçid mövcud deyil</h1>
      <h1 v-else>Xəta baş verdi - {{ error.statusCode }}</h1>
      <NuxtLink to="/">Əsas səhifəyə qayıdın</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", 
};
</script>

<style lang="scss">
.error_info {
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  .info {
    a {
        color: #6B7280 !important;
    }
  }
}
</style>
