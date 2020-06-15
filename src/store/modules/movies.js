
import axios from 'axios';
const APP_API_URL = 'https://api.themoviedb.org/3/';
const APP_API_KEY = 'c761829ac0b8104630fcc3299a416d3c';
const movies = {
  namespaced: true,
  state: {
    count: 0,
    genres:'',
    NowPlayingMovies: '',
    PopularMovies:'',
    TopRateMovies:'',
    UpComingMovies: '',
  },
  getters: {
    getNowPlayinMovies(state){
      return state.NowPlayingMovies;
    },
    getGenres(state){
      return state.genres;
    },
    getPopularMovie(state){
      return state.PopularMovies;
    },
    getTopRateMovies(state){
      return state.TopRateMovies;
    },
    getUpComingMovies(state){
      return state.UpComingMovies;
    }
  },
  mutations: {
    NowPlayinMoviesMutation(state, payload){
      state.NowPlayingMovies = payload.results;
    },
    GenresMutation(state, payload){
      state.genres = payload;
    },

    PopularMoviesMutation(state, payload){
      state.PopularMovies = payload.results;
    },
    TopRateMoviesMutation(state, payload){
      state.TopRateMovies = payload.results;
    },
    UpcomingMoviesMutation(state, payload){
      state.UpComingMovies = payload.results;
    }


  },
  actions: {
    loadLatestMovie({ commit }){
      axios.get(APP_API_URL+'movie/now_playing?api_key='+APP_API_KEY+'&language=en-US&page=1').then((response) => {
        commit('NowPlayinMoviesMutation' , response.data)
      }
      )
    },
    loadGenres({ commit }){
      axios.get(APP_API_URL+'genre/movie/list?api_key='+APP_API_KEY+'&language=en-US&page=1').then((response) => {
        commit('GenresMutation' , response.data.genres)
      }
      )
    },
    LoadPopularMovies({ commit }){
      axios.get(APP_API_URL+'movie/popular?api_key='+APP_API_KEY+'&language=en-US&page=1').then((response) => {
        commit('PopularMoviesMutation' , response.data)
      }
      )
    },
    LoadTopRateMovies({ commit }){
      axios.get(APP_API_URL+'movie/top_rated?api_key='+APP_API_KEY+'&language=en-US&page=1').then((response) => {
        commit('TopRateMoviesMutation' , response.data)
      }
      )
    },
    LoadUpcomingMovies({ commit }){
      axios.get(APP_API_URL+'movie/upcoming?api_key='+APP_API_KEY+'&language=en-US&page=1').then((response) => {
        commit('UpcomingMoviesMutation' , response.data)
      }
      )
    },
  },

}

export default movies
