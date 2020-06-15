<template>
  <div class="slider">
  <h1 class="main-title">popular</h1>
  <flickity v-if="getPopularMovie" ref="flickity" :options="flickityOptions" >

    <div class="carousel-cell" v-for="(movie, i) in sliderMovies" :key="i">
      <mainBanner :movie="movie" class="narrow"></mainBanner>
    </div>

  </flickity>
  <AppLoading v-else></AppLoading>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import Flickity from 'vue-flickity';
import AppLoading from '@/components/Loading';
import mainBanner from '@/components/Banner/single-movie';

export default {
  components: {
    Flickity,
    AppLoading,
    mainBanner
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        cellAlign: 'left'
        // any options from Flickity can be used
      }
    }
  },

  computed:{
    ...mapGetters('movies', [
      'getPopularMovie',
    ]),
    sliderMovies() {
      return this.getPopularMovie.slice(3,23)
    },
  },

  methods: {
    ...mapActions('movies', [
      'LoadPopularMovies',
    ]),

    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  },
  created(){
    this.LoadPopularMovies();
  }
}
</script>

<style lang="scss" scoped>
@import './Slider.scss';
</style>
