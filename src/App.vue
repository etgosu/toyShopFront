<template>
  <div>
    <h1>{{ title }}</h1>
    <a href="http://localhost:3000">로그인</a>
    <v-btn @click="test">테스트</v-btn>
  </div> 
</template>

<script>
import axios from 'axios';

export default {

  data: () => ({
    //
    title : "안녕하세요"
  }),
  methods: {
    test() {
         axios.get('http://localhost:3000')
          // axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
              // handle success
              console.log(res);
            })
            .catch(err=> {
              // handle error
              console.log(err);
            })
            .finally(function () {
              // always executed
            });
     }
  }
};
</script>
