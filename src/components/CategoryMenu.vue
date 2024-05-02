<template>
  <div class="d-flex align-center">
    <v-btn v-for="category in categories" :key="category.id" :to="category.link" text class="text-h6">
      {{ category.title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, title: '커피', link: '/category/1' },
        { id: 2, title: '스낵', link: '/category/2' },
        { id: 3, title: '아이스크림', link: '/category/3' },
        { id: 4, title: '샌드위치', link: '/category/4' },
        { id: 5, title: '음료수', link: '/category/4' }
      ]
    }
  }
}
</script>
