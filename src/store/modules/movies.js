
import axios from 'axios';
const APP_API_URL = 'https://api.themoviedb.org/3/';
const APP_API_KEY = 'c761829ac0b8104630fcc3299a416d3c';
const movies = {
  namespaced: true,
  state: {
    count: 0,
    NowPlayingMovies: ''
  },
  getters: {
    getNowPlayinMovies(state){
      return state.NowPlayingMovies;
    }
  },
  mutations: {
    NowPlayinMoviesMutation(state, payload){
      state.NowPlayingMovies = payload.results;
    }
  },
  actions: {
    loadLatestMovie({ commit }){
      axios.get(APP_API_URL+'movie/now_playing?api_key='+APP_API_KEY+'&language=en-US&page=1').then((response) => {
        commit('NowPlayinMoviesMutation' , response.data)
      }
      )
    }
  },

}

export default movies
