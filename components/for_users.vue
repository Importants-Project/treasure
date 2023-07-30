<template>
  <div class="for_users_body">
    <div class="container">
      <div class="for_users">
        <div class="header_txt"><h2>İstifadəçilər üçün</h2></div>
        <div class="for_users_items">
          <b-row>
            <b-col lg="6" sm="12" v-for="item in forUsers">
              <div class="for_users_item">
                <div class="left_side">
                  <div class="for_users_header">
                    <p>{{ item.title }}</p>
                  </div>
                  <div class="for_users_content">
                    <p>
                      {{ item.description }}
                    </p>
                  </div>
                  <div class="more">
                    <a target="_blank" :href="item.link">
                      <p>ƏTRAFLI</p>
                    </a>
                  </div>
                </div>
                <div class="right_side">
                  <img :src="item.image" alt="" />
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forUsers: Array,
  },
};
</script>
