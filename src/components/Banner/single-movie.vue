<template>
  <router-link :to="'/movie/'+`${movie.id}`">


  <!-- <div class="chips-wrapper">
    <div class="chip radius" v-for="(genre , i) in genres" :key="i">
        {{genre.name}}
    </div>
  </div> -->


    <!-- MOVIE RATE -->
    <div class="movie-rate radius" :class="movieRate">{{movie.vote_average}}</div>

    <!-- MOVIE POSTER -->
    <img class="movie-poster radius" :src="baseImageUrl+movie.poster_path" />

    <!-- MOVIE BACKDROP -->
    <img class="movie-poster-backdrop radius" :src="baseImageUrl+movie.poster_path" />

    <!-- MOVIE INFO -->
    <div class="movie-info">
      <!-- <div @click.stop.prevent="addToPlayList(movie.id)" class="addToPlayList radius">
        <svg viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1 31H68V37H-1V31Z"/>
          <path d="M30.5 68.5L30.5 -0.5L36.5 -0.5V68.5H30.5Z"/>
        </svg>
      </div> -->
      <h1 class="movie-info-title">{{shortenTitle}}</h1>
      <h3 class="movie-info-release">{{realeseDate}}</h3>
    </div>

  </router-link>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  data() {
    return {
      baseImageUrl: "https://image.tmdb.org/t/p/w500"
    };
  },
  props: ["movie"],
  computed: {
    ...mapGetters('movies', [
      'getGenres'
    ]),
    realeseDate() {
      return this.movie.release_date.slice(0, 4);
    },
    // genres(){
    //   return this.getGenres.filter( genres =>  this.movie.genre_ids.includes( genres.id ));
    // },

    shortenTitle(){
      //return this.movie.title.length
      if(this.movie.title.length > 12){
        return this.movie.title.slice(0, 12)+'...';
      }else{
        return this.movie.title
      }
    },
    movieRate(){
      if(this.movie.vote_average >= 7){
        return "good";
      }else if(this.movie.vote_average > 4 && this.movie.vote_average < 7){
        return "average";
      }else{
        return "bad";
      }
    },

    // getCount(){
    //   return this.$store.getters['movies/getCounter']
    // },
  },
  methods:{
    ...mapActions('movies', [
      'loadGenres'
    ]),
    addToPlayList(id){
      console.log('add to playlist triggred : ' + id)
    }
  },

  created() {
    this.loadGenres();
  },
};
</script>

<style lang="scss" scoped>

@import './single-movie.scss';

</style>
