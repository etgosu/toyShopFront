<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-md-none"
    ></v-app-bar-nav-icon>
    <router-link :to="{ name: 'home' }">
      <v-toolbar-title>Y마트-잡화점</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <category-menu></category-menu>
    <v-spacer></v-spacer>
    <v-btn text>로그인</v-btn>
    <v-btn text>회원가입</v-btn>
    <v-btn left :to="{ name: 'mypage' }" elevation="0">
      <v-icon>mdi-account</v-icon>마이페이지
    </v-btn>
    <v-btn left :to="{ name: '' }" elevation="0">
      <v-icon>mdi-cart</v-icon>장바구니
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.v-btn:before {
  display: none;
}
.v-application a.router-link-exact-active,
.v-application a.router-link-active {
  color: inherit;
  text-decoration: none;
}
</style>
<script>
import CategoryMenu from "@/components/CategoryMenu";

export default {
  components: {
    CategoryMenu,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
