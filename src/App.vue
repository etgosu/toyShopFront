<template>
  <v-app>
    <v-main>
      <Header />
      <MainInfo/>
    <!-- Other content goes here -->
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import MainInfo from '@/components/MainInfo' 
import axios from 'axios';


export default {
  components: {
    Header,
    MainInfo
   // UserInfo
  },
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
