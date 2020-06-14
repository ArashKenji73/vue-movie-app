<template>
  <div class="slider">
  <h1 class="main-title">popular</h1>

  <flickity v-if="getNowPlayinMovies" ref="flickity" :options="flickityOptions" >

    <div class="carousel-cell" v-for="(movie, i) in sliderMovies" :key="i">
      <mainBanner :movie="movie" class="narrow"></mainBanner>
    </div>

  </flickity>
  <AppLoading v-else></AppLoading>
  <!-- if you don't want to use the buttons Flickity provides -->
  <button @click="previous()">Custom Previous Button</button>
  <button @click="next()">Custom Next Button</button>
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
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        cellAlign: 'left'
        // any options from Flickity can be used
      }
    }
  },

  computed:{
    ...mapGetters('movies', [
      'getNowPlayinMovies'
    ]),
    sliderMovies() {
      return this.getNowPlayinMovies.slice(3,20)
    },
  },

  methods: {
    ...mapActions('movies', [
      'loadLatestMovie'
    ]),

    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  },
  created(){
    this.loadLatestMovie();
  }
}
</script>

<style lang="scss" scoped>
@import './Slider.scss';
</style>
