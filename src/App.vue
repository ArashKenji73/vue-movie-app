<template>
  <div id="app">
    <AppNav></AppNav>
    <router-view/>
  </div>
</template>

<script>
import AppNav from '@/components/Navbar/Navbar'
export default {
  components:{
    AppNav
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
