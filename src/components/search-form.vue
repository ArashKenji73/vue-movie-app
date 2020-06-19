<template>
  <form id="search-form" @click.stop>
    <input type="search" name="search" placeholder="type movie name or id" v-model="searchTerm" />
    <button type="submit" @click.stop.prevent="goToSarchPage">
      <img src="@/assets/magnifying-glass.svg" />
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      result: []
    };
  },
  methods: {
    goToSarchPage() {
      //redirect to search page
      //send search term to page
      this.$router.push({
        name: "search",
        query: { search: this.searchTerm }
      });
      //console.log('go to search')
      //fadeOut on search button clicked
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      this.$emit("childToParent", false);
    }
  }
};
</script>
<style lang="scss">
#search-btn {
  position: relative;
}

#search-form {
  border-radius: 16px;
  display: flex;
  padding: 0.5rem;
  position: absolute;
  justify-content: space-between;
  background: $secondaryColor;
  left: -202px;
  bottom: -72px;
  width: 270px;

  @media (min-width: 576px) {
    left: 0px;
    bottom: -72px;
    width: 268px;
  }
  input,
  button {
    outline: none;
    border-radius: 16px;
    font-family: Exo-Regular;
    padding: 0.5rem 1rem;
  }
  button {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #808080;
    img {
      width: 24px;
    }
  }
}
</style>
