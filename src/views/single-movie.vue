<template>
  <div v-if="movieData && movieCrew" class="single-movie-wrapper container">
    <img class="movie-poster-backdrop" :src="baseImageUrl+movieData.poster_path" />

    <div class="movie-poster">
      <img :src="baseImageUrl+movieData.poster_path" />
    </div>

    <div class="movie-info">
      <h1 class="title">{{movieData.title}}</h1>

      <div class="each-info runtime">
        <img src="@/assets/clock.svg" />
        <h3>{{movieData.runtime + ' Minutes'}}</h3>
      </div>

      <div class="info-wrapper">
        <div class="each-info">
          <h3 class="sub-title">DIRECTOR : 	&nbsp; {{director[0].name}}</h3>
        </div>

        <div class="each-info">
          <h3 class="sub-title">GENRES :</h3>
          <div class="chips-wrapper">
            <div class="chip radius" v-for="(genre , i) in genres" :key="i">
              <router-link :to="{ name: 'genre', params: { id: genre.id }}">{{genre.name}}</router-link>
              </div>
          </div>
        </div>

        <div class="each-info">
          <h3 class="sub-title">OVERVIEW :</h3>
          <h4 class="text">{{movieData.overview + ' Minutes'}}</h4>
        </div>
      </div>
    </div>
  </div>

  <AppLoading v-else></AppLoading>
</template>


<script>
import axios from "axios";

import AppLoading from "@/components/Loading";
export default {
  data() {
    return {
      APP_API_KEY: "c761829ac0b8104630fcc3299a416d3c",
      APP_API_URL: "https://api.themoviedb.org/3/",
      baseImageUrl: "https://image.tmdb.org/t/p/w500",
      movieData: "",
      movieCrew: ""
    };
  },
  props: ["id"],

  computed: {
    director() {
      return this.movieCrew.filter(crew => crew.job == "Director");
    },
    genres() {
      return this.movieData.genres;
    }
  },

  methods: {
    getMovieData() {
      axios
        .get(
          this.APP_API_URL + "movie/" + this.id + "?api_key=" + this.APP_API_KEY
        )
        .then(response => {
          this.movieData = response.data;
        });
    },
    getMovieDirector() {
      axios
        .get(
          this.APP_API_URL +
            "movie/" +
            this.id +
            "/credits?api_key=" +
            this.APP_API_KEY
        )
        .then(response => {
          this.movieCrew = response.data.crew;
        });
    }
  },
  components: {
    AppLoading
  },

  created() {
    this.getMovieData();
    this.getMovieDirector();
  }
};
</script>

<style lang="scss" scoped>
@import "single-movie.scss";
</style>
