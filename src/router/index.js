import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';


const SingleMovie = () => import('@/views/single-movie.vue');
const SearchMovie = () => import('@/views/search-page.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/movies/movie/:id',
    component: SingleMovie,
    props: true,
  },

  {
    path: '/movies/search',
    name: 'search',
    component: SearchMovie,
    props: true,
  },


];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
