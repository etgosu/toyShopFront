
<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <h2>특가 상품</h2>
        <v-row>
          <v-col
            v-for="product in products"
            :key="product.id"
            cols="4"
          >
            <v-card>
              <v-img
                :src="product.image"
                :alt="product.name"
                height="200"
              ></v-img>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-text>{{ product.price }}원</v-card-text>
<v-card-actions class="justify-content-end">
  <v-btn
    color="primary"
    icon
    class="mr-2"
  >
    <v-icon>mdi-cart-plus</v-icon>
    장바구니 담기
  </v-btn>
  <v-btn
    color="primary"
    icon
  >
    <v-icon>mdi-cart-plus</v-icon>
    바로구매 하기
  </v-btn>
</v-card-actions>

 
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2">
        <h2>회원 정보</h2>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>이름</v-list-item-title>
              <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>이메일</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>포인트</v-list-item-title>
              <v-list-item-subtitle>{{ user.point }}점</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
  .custom-card-actions {
  display: inline-block;
  justify-content: center;
  padding: 16px;
}
</style>
<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: '쿼케클라', price: 10000, image: 'images/product1.png' },
        { id: 2, name: '졔만과자', price: 15000, image: 'images/product2.png' },
        { id: 3, name: '셔어깡', price: 20000, image: 'images/product3.png' },
        { id: 4, name: '거라밥', price: 10000, image: 'images/product4.png' },
        { id: 5, name: '사또밥', price: 15000, image: 'images/product5.png' },
        { id: 6, name: '샤스크림', price: 20000, image: 'images/product6.png' },
        { id: 7, name: '삥뚜어', price: 10000, image: 'images/product7.png' },
        { id: 8, name: '뜰레팝', price: 15000, image: 'images/product8.png' },
        { id: 9, name: '아메리카노', price: 20000, image: 'images/product9.png' },
        // 나머지 상품 정보 추가
      ],
      user: {
        name: '홍길동',
        email: 'hong@example.com',
        point: 5000
      }
    }
  }
}
</script>