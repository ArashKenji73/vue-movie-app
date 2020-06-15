<template>
<div class="col-item radius">
  <!-- IMAGE -->
  <div class="item-image">
    <img :src="baseImageUrl+movie.poster_path" />
  </div>
  <!-- TEXT-INFO -->
  <div class="item-info">
    <h3 class="title">{{shortenTitle}}</h3>
    <h5 class="date">({{realeseDate}})</h5>
  </div>
  <!--RATE -->
  <span class="item-rate" :class="movieRate">{{movie.vote_average}}</span>
</div>
</template>


<script>
export default {
  props:['movie'],
  data() {
    return {
      baseImageUrl: "https://image.tmdb.org/t/p/w500"
    };
  },
  computed:{
    shortenTitle(){
      if(this.movie.title.length > 16){
        return this.movie.title.substring(0, 16)+'...'
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
    realeseDate() {
      return this.movie.release_date.slice(0, 4);
    },
  }
}
</script>
<style lang="scss" scoped>
.col-item{
    position: relative;
    display: flex;
    height: 64px;
    margin-bottom: 1rem;
    background: #e4e4e4;
    .item-image{
        position: relative;
        height: 100%;
        width: 64px;
        background: rgb(141, 141, 141);
        border-radius: 16px 0px 0px 16px;
        img{
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0px;
          right: 0px;
          bottom: 0px;
          top: 0px;
          border-radius: 8px 0px 0px 8px;
          object-fit: cover;
        }
    }
    .item-info{
        font-family: Exo-Regular;
        color: $white;
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #585a5a;
        .title{
          font-size: 14px;
        }
        .date{
          font-size: 12px;
        }
    }
    .item-rate{
        font-family: Exo-SemiBold;
        position: absolute;
        right: 15px;
        top: 50%;
        height: fit-content;
        bottom: 0px;
        transform: translateY(-50%);
        color: $white;
        padding: 0.5rem;
        background: red;
        font-size: 16px;
        border-radius: 8px;

        &.good{
            background: green;
        }
        &.average{
            color: black;
            background: yellow;
        }
        &.bad{
            background: red;
        }
    }
}
</style>
