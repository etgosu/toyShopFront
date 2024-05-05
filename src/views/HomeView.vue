<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <h2>상품 리스트</h2>
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
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                >
                  장바구니 담기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
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

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: '상품 1', price: 10000, image: 'product1.jpg' },
        { id: 2, name: '상품 2', price: 15000, image: 'product2.jpg' },
        { id: 3, name: '상품 3', price: 20000, image: 'product3.jpg' },
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