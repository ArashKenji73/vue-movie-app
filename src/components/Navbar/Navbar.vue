<template>
<header class="shadow sticky">
  <div class="container">
    <div class="logo"><img alt="Vue logo" src="@/assets/logo.svg"></div>
    <nav>
      <router-link to="/" tag="li" exact><a>home</a></router-link>
      <router-link to="/movies" tag="li"><a>movies</a></router-link>
      <router-link to="/series" tag="li"><a>series</a></router-link>
      <router-link to="/actors" tag="li"><a>actors</a></router-link>
      <li id="search-btn" @click="showSearch = !showSearch">
        <a>search</a>
        <AppSearch v-show="showSearch" />
      </li>
    </nav>

    <div class="login-register">
      <span> Login</span>
      <span> Register</span>
    </div>
  </div>
</header>
</template>
<script>
import AppSearch from '@/components/search-form';
export default {
  data(){
    return{
      showSearch: false,
    }
  },
  components:{
    AppSearch
  }
}
</script>
<style lang="scss" scoped>
@import './Navbar.scss';
</style>
