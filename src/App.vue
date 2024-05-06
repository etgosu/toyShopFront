<template>
  <v-app>
    <v-main>
      <Header />
      <router-view />
      <!-- Other content goes here -->
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";

export default {
  components: {
    Header,
  },
  data: () => ({}),
  methods: {
    test() {
      axios
        .get("http://localhost:3000")
        // axios.get('https://reqres.in/api/users?page=2')
        .then((res) => {
          // handle success
          console.log(res);
        })
        .catch((err) => {
          // handle error
          console.log(err);
        })
        .finally(function () {
          // always executed
        });
    },
  },
};
</script>
