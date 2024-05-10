<template>
  <v-container>
    <h2 class="mb-4">장바구니</h2>
    <h4 class="mb-4">장바구니에 담긴 상품은 30일 뒤 초기화 됩니다.</h4>
    <v-data-table
      :headers="headers"
      :items="numberedItems"
      item-key="_id"
      show-select
      @input="updateSelected"
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
    <div class="mt-4 text-right">총 {{ totalPriceAmt }}원</div>
  </v-container>
</template>

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
      totalPriceAmt: 0,
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
          selected: false, // 초기 선택 상태 설정
        };
      });
    },
  },
  methods: {
    fetchBaskets() {
      axios
        .get("http://localhost:3000/basket/list?userNm=김영남")
        .then((response) => {
          this.baskets = response.data.basketList;
        })
        .catch((error) => {
          console.error("Error !!!", error);
        });
    },
    updateSelected(selectedItems) {
      // 장바구니 상품 선택 동작
      this.numberedItems.forEach((item) => {
        item.selected = selectedItems.some(
          (selected) => selected._id === item._id
        );
      });

      this.totalPrice();
    },
    totalPrice() {
      // 장바구니에서 선택한 상품들의 총 구매금액 계 
      this.totalPriceAmt = this.numberedItems.reduce((total, item) => {
        return item.selected ? total + item.prodInfo.price * item.qty : total;
      }, 0);
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

<style>
/* headers 가운데 정렬 */
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
