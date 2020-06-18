<template>
  <div class="home container">
    <section>
      <appBanner></appBanner>
    </section>
    <section>
      <appSlider></appSlider>
    </section>

    <section class="two-row">
      <div class="main-banner">
        <h1 class="main-title">upcoming</h1>
        <div class="grid">
          <singleMovie
          v-for="(movie, i) in getUpComingMoviesLimit" :key="i"
          :movie="movie"
          class="grid-item radius narrow" />
        </div>
      </div>
      <div v-if="getTopRateMovies" class="side-banner radius" >
        <h1 class="main-title">top rate</h1>
        <div class="colum">
          <!-- COL-ITEM -->
          <appMovieList v-for="(movie, i) in getTopRateMovies" :key="i" :movie='movie'></appMovieList>
        </div>
      </div>
      <AppLoading v-else/>

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions} from 'vuex';
import appBanner from '@/components/Banner/Banner';
import appSlider from '@/components/Slider/Slider';
import singleMovie from '@/components/Banner/single-movie';
import appMovieList from '@/components/single-movie-list.vue';
import AppLoading from '@/components/Loading';
export default {
  name: 'Home',
  components: {
    appBanner,
    appSlider,
    appMovieList,
    singleMovie,
    AppLoading
  },
  computed:{
    ...mapGetters('movies', [
      'getTopRateMovies',
      'getUpComingMovies'
    ]),

    getUpComingMoviesLimit(){
      return this.getUpComingMovies.slice(0, 8);
    }
  },
  methods:{
    ...mapActions('movies', [
      'LoadTopRateMovies',
      'LoadUpcomingMovies'
    ])
  },
  created(){
    this.LoadTopRateMovies();
    this.LoadUpcomingMovies();
  }


};
</script>

