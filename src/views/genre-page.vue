<template>
  <div class="container" v-if="movieData != null">
    <h3 class="finds">Finds :{{total}} movies</h3>
    <div class="genre-wrapper">
      <div class="item" v-for="(movie, i) in movieData" :key="i">
        <singleMovie class="narrow" :movie="movie" />
      </div>
    </div>
  </div>
  <div v-else>
    <AppLoading />
  </div>
</template>
<script>
import axios from "axios";
import AppLoading from "@/components/Loading";
import singleMovie from "@/components/Banner/single-movie";
export default {
  data(){
    return{
      movieData: null,
      total: 0
    }
  },
  props: ["id"],
  methods: {
    getMovieData() {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${this.APP_API_KEY}&with_genres=${this.id}`
        )
        .then(response => {
          this.movieData = response.data.results;
          this.total = response.data.total_results;

        });
    },
  },
  components: {
    AppLoading,
    singleMovie
  },

  created() {
    this.getMovieData();
  }
};
</script>
<style lang="scss" scoped>
.finds {
  padding: 2rem 0.5rem;
}
.genre-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  //background: #eee;
  .item {
    @media (min-width: 576px) {
      width: 23%;
    }
    position: relative;
    width: 45%;
    height: 312px;
    margin: 0.5rem;
    //background: olive;
  }
}
</style>
