<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="numberedItems"
      item-key="_id"
      show-select
    >
      <template v-slot:[`item.prodInfo.prodNm`]="{ item }">
        <router-link :to="`/product/${item._id}`">{{
          item.prodInfo.prodNm
        }}</router-link>
      </template>
      <template v-slot:[`item.주문관리`]="{ item }">
        <v-btn @click="purchase(item)">주문하기</v-btn>
        <v-btn @click="cancel(item)">취소</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<style>
/* headers 가운데 정렬 */
/* 헤더 가운데 정렬 */
.v-data-table-header .v-data-table-header-wrapper {
  justify-content: center;
}

/* v-btn 간격 조정 */
.v-btn {
  margin: 0 5px; /* 좌우 간격 조정 */
}

/* v-header에 음영 추가 */
.v-data-table-header {
  background-color: #f2f2f2; /* 배경색 지정 */
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      headers: [
        { text: "번호", value: "no" },
        { text: "상품명", value: "prodInfo.prodNm" },
        { text: "상품가격", value: "prodInfo.price" },
        { text: "수량", value: "qty" },
        { text: "주문관리", value: "주문관리" },
      ],
      baskets: [],
    };
  },
  mounted() {
    this.fetchBaskets();
  },
  computed: {
    numberedItems() {
      return this.baskets.map((item, index) => {
        return {
          ...item,
          no: index + 1,
        };
      });
    },
  },
  methods: {
    fetchBaskets() {
      axios
        .get("http://localhost:3000/basket/list?userNm=김영남")
        .then((response) => {
          console.log(response);
          this.baskets = response.data.basketList;
        })
        .catch((error) => {
          console.error("Error !!!", error);
        });
    },
    purchase(item) {
      // 구매 동작
    },
    cancel(item) {
      // 취소 동작
    },
  },
};
</script>
