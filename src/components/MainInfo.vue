
<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <h2>특가 상품</h2>
        <v-row>
          <v-col
            v-for="product in products"
            :key="product._id"
            cols="4"
          >
            <v-card>
              <v-img
                :src="product.image"
                :alt="product.name"
                height="200"
              ></v-img>
              <v-card-title>{{ product.prodNm}}</v-card-title>
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
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      user: {
        name: '홍길동',
        email: 'hong@example.com',
        point: 5000
      }
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('http://localhost:3000/products/list')
      .then(response => {
        console.log(response);
        this.products = response.data.prodList; 
      })
      .catch(error => {
        console.error('Error !!!', error);
      });
    }
  }
}
</script>