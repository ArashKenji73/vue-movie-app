<template>
  <div>
    <div class="container" v-if="result != ''">
      <h3 class="finds">Finds :{{total}} movies</h3>
      <div class="search-wrapper">
        <div class="search-item" v-for="(movie, i) in result" :key="i">
          <singleMovie class="narrow" :movie="movie" />
        </div>

        <!-- <singleMovie
        v-for="(movie, i) in result" :key="i"
        class="search-item"
        :movie="movie"/>-->
      </div>
    </div>
    <div v-else><AppLoading /></div>
  </div>
</template>

<script>
import axios from "axios";
import singleMovie from "@/components/Banner/single-movie";
import AppLoading from '@/components/Loading';
export default {
  data() {
    return {
      result: [],
      searchTerm: '',
      total: 0,
    };
  },
  components: {
    singleMovie,
    AppLoading
  },
  watch: {
    '$route' (to, from) {
      //alert('called it');
      this.searchTerm = to.query.search;
      this.getSearchRes();
    }
  },
  methods: {
    getSearchRes() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.APP_API_KEY}&language=en-US&query=${this.searchTerm}&page=1`
        )
        .then(response => {
          this.result = response.data.results;
          this.total = response.data.total_results;
        });
    }
  },
  created() {
    this.searchTerm = this.$route.query.search;
    this.getSearchRes();
  }
};
</script>

<style lang="scss">
.finds{
  padding: 2rem 0.5rem;
}
.search-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  //background: #eee;
  .search-item {

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
