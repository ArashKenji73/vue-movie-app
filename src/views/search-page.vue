<template>
  <div class="container" v-if="result != null">
    <h3 class="finds">Finds :{{total}} movies</h3>
    <div class="search-wrapper">
      <div class="search-item" v-for="(movie, i) in result" :key="i">
        <singleMovie class="narrow" :movie="movie" />
      </div>
    </div>
    <div style="
      width: 100%;
      text-align: center;
      margin-top: 3rem;"
    >{{selectedPage}}/{{pages}}</div>
    <ul class="pagination">
      <li class="page-item" @click="previous">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item-numb"
        v-for="(page, i) in paginationRange"
        :key="i"
        :class="{ active: page == selectedPage }">
        <a class="page-link" @click="selectedPage = page">{{page}}</a>
      </li>
      <li class="page-item" @click="next">
        <a class="page-link">Next</a>
      </li>
    </ul>

  </div>
  <div v-else>
    <AppLoading />
  </div>
</template>

<script>
import axios from "axios";
import singleMovie from "@/components/Banner/single-movie";
import AppLoading from "@/components/Loading";
export default {
  data() {
    return {
      result: null,
      searchTerm: "",
      total: 0,
      pages: 0,
      selectedPage: 1,
      range: 2,
      test: 1
    };
  },
  components: {
    singleMovie,
    AppLoading
  },
  computed:{
    paginationRange(){
      let array = [];
      let start = this.selectedPage - this.range;
      let end = this.selectedPage + this.range;

      if(start <= 0){
        start = 1
        end = (this.range)*2 + 1;
      }

      if(end >= this.pages){
        start = this.pages - ((this.range)*2);
        end = this.pages;
      }

      if(this.pages == 1){
        start = 1;
        end = 1
      }


      for (let i = start; i <= end; i++) {
        array.push(i)
      }

      return array
    },
  },

  watch: {
    $route(to, from) {
      //alert('called it');
      this.selectedPage = 1,
      this.searchTerm = to.query.search;
      this.getSearchRes();
    },
    selectedPage(){
      this.getSearchRes();
    }
  },
  methods: {
    getSearchRes() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.APP_API_KEY}&language=en-US&query=${this.searchTerm}&page=${this.selectedPage}`
        )
        .then(response => {
          this.result = response.data.results;
          this.total = response.data.total_results;
          this.pages = response.data.total_pages;

        });
    },
    next(){
      if(this.selectedPage<this.pages){
        this.selectedPage++
      }

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    previous(){
      if(this.selectedPage>1){
        this.selectedPage--
      }
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });

    }

  },
  created() {

    this.searchTerm = this.$route.query.search;
    this.getSearchRes();
  }
};
</script>

<style lang="scss" scoped>
.finds {
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
