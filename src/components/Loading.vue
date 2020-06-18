<template>
  <div class="loading">
    <img src="@/assets/puff.svg">
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    left: 0;
    right: 0px;
    bottom: 0px;

    img {
        width: 10%;
    }
}
</style>
