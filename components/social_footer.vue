<template>
    <div class="social_footer d-flex justify-content-between align-items-center">
   
      <div class="left_side">
        <p>Sosial şəbəkələrdə paylaş:</p>
      </div>
   
      <div class="right_side d-flex">
        <div class="social_icon">
          <div class="social_icon_img">
            <a :href="`http://www.facebook.com/sharer/sharer.php?u=https://treasure.alv.az/${qunduz}`" target="_blank" class="share-popup">
              <img
                src="@/assets/images/social_footer_icons/fot_ico_facebook.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="social_icon">
          <div class="social_icon_img">
            <img
              src="@/assets/images/social_footer_icons/fot_ico_linkedin.png"
              alt=""
            />
          </div>
        </div>
        <div class="social_icon">
          <div class="social_icon_img">
            <img
              src="@/assets/images/social_footer_icons/fot_ico_twitter.png"
              alt=""
            />
          </div>
        </div>
        <div class="social_icon">
          <div class="social_icon_img">
            <img
              src="@/assets/images/social_footer_icons/fot_ico_telegram.png"
              alt=""
            />
          </div>
        </div>
        <div class="social_icon">
          <div class="social_icon_img">
            <img
              src="@/assets/images/social_footer_icons/fot_ico_whatsapp.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default{
  computed:{
  qunduz(){
    return  this.$route.fullPath
  }
  }
}
</script>