<script lang="ts">
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
  <div class="container">
    <div class="card" v-for="item in movies.entries" :key="item.title">
      <img
        :src="item.images['Poster Art'].url"
        @error="item.images['Poster Art'].url = 'not-found.jpg'"
      />
      <h6>{{ item.title }}</h6>
      <p>{{ item.description }}</p>
      <p>
        Release year:
        <strong>{{ item.releaseYear }}</strong>
      </p>
    </div>
  </div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap");

.container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  padding: 10px;
}

.card {
  border: solid 0.2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  cursor: pointer;
  transition: 0.3s;
}

img {
  width: 100%;
  height: 400px;
}
h6 {
  font-family: "Rubik Distressed";
  font-size: 20px;
  padding: 5px 0;
  margin: 0;
  color: #00c5b4;
}

p {
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  font-weight: 100;
  font-size: 14px;
  color: grey;
}

strong {
  font-size: 15px;
  color: #000;
  font-weight: bold;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

@media (max-width: 1366px) {
  .container {
    grid-template-columns: auto auto auto;
  }
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: auto auto;
  }
}

@media (max-width: 600px) {
  .container {
    grid-template-columns: auto;
  }
}
</style>