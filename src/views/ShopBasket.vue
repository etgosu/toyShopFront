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
        <v-btn @click="deleteBasketItem(item)"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
      </template>
    </v-data-table>
    <div class="mt-4 text-right">총 구매금액 : {{ totalPriceAmt }}원</div>
    <v-btn @click="purchaseSelAll()">주문하기</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      headers: [
        { text: "상품명", value: "prodInfo.prodNm" },
        { text: "상품가격", value: "prodInfo.price" },
        { text: "수량", value: "qty" },
        { text: "구매금액", value: "priceSumAmt" },
        { text: "", value: "주문관리" },
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
          selected: false, // 초기 선택 상태 설정
          priceSumAmt: item.prodInfo.price * item.qty,
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
      // 장바구니에서 선택한 상품들의 총 구매금액 계산
      this.totalPriceAmt = this.numberedItems.reduce((total, item) => {
        return item.selected ? total + item.prodInfo.price * item.qty : total;
      }, 0);
    },
    purchase(item) {
      // 개별상품 구매하기
    },
    deleteBasketItem(item) {
      // 개별상품 장바구니에서 삭제하기
      const data = {
        // 삭제 요청에 포함할 추가 데이터
        userNm: "김영남",
      };

      axios
        .delete(`http://localhost:3000/basket/delete/${item._id}`, {
          data: data,
        })
        .then((response) => {
          // 삭제 성공 시 처리 로직
          console.log("Basket item deleted:", response.data);
          this.fetchBaskets();
        })
        .catch((error) => {
          // 삭제 실패 시 처리 로직
          console.error("Error deleting basket item:", error);
        });
    },
    purchaseSelAll() {
      // 선택된 모든 상품 구매하기
    },
  },
};
</script>

<style scoped>
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
