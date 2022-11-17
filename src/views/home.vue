<script lang="ts">
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import Service from "../api/service";
import { key } from "../stores/auth";
import { Movies } from "../interfaces/service.interface";
import Navbar from "../components/navbar.vue";

export default {
  name: "Home",
  data() {
    return {
      movies: {} as Movies,
    };
  },
  computed: {
    async getMovies() {
      const service = new Service();
      const movies = await service.getMovies();
      console.log(movies);
      this.movies = movies;
    },
  },
  mounted() {
    const store = useStore(key);
    if (!store.getters.isLogged) {
      window.location.href = "/login";
      return;
    }
    this.getMovies;
  },
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <h1>Home Page</h1>
  <li v-for="item in movies.entries" :key="item.title">
    {{ item.title }}
  </li>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap");
</style>