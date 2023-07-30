<template>
  <div class="container">
    <div class="bread_crumb_2">
      <div class="head_text">{{headText}}</div>
      <div class="head_text">{{contactHead}}</div>
      <div class="bread_crumb_text" v-if="!contactHead">
        <span v-for="item in items" ><a :href="item.href">{{item.text}}</a></span>
      </div>
      <div class="bread_crumb_text" v-if="contactHead" >
        <span v-for="item in items"><a :href="item.href">{{item.text}}</a></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bread_crumb_2 {
  text-align: center;
  margin: 56px 0;
  background: #f3f4f6;
  border-radius: 12px;
  padding: 72px 0;
  min-height: 224px;
  .head_text {
    font-weight: 700;
    font-size: 34px;
    line-height: 44px;
  }
  .bread_crumb_text {
    a{

      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #6b7280;
    }
    font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #6b7280;
    span::after{
      content: ">";
      margin-right: 13px;
      margin-left: 13px;
    }
    span:last-child{
      &::after{
        content: "";
        margin-left: 0;
      }
    }
  }
}
@media screen and (max-width: 900px) {
 .bread_crumb_2{
  min-height: 152px;
  .head_text {
  font-size: 24px;
  line-height: 28px;
  }
 }
}
</style>

<script>
export default {
    props: {
        headText: String,
        items: Array,
        contactHead: String
    }
}
</script>
