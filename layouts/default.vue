<template>
  <div>
    <top-header></top-header>
    <header-section></header-section>
      <nuxt />
    <footer-main></footer-main>
   
  </div>
</template>

<script>
import TopHeader from "@/components/topHeader";
import headerSection from "@/components/header";
import FooterMain from "@/components/footer";
export default {
  name: "layout",
  components: {
    TopHeader,
    headerSection,
    FooterMain,
  },
};
</script>


