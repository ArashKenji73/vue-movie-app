<template>

  <div class="wrapper">
    <div id="banner" v-if="getNowPlayinMovies">
      <div class="item main radius">
        <singleMovie :movie="getNowPlayinMovies[0]" />
      </div>
      <div class="item radius">
        <singleMovie class="narrow" :movie="getNowPlayinMovies[1]" />
      </div>
      <div class="item radius">
        <singleMovie class="narrow" :movie="getNowPlayinMovies[2]" />
      </div>
      <div class="item radius">
        <singleMovie class="narrow" :movie="getNowPlayinMovies[3]" />
      </div>
      <div class="item radius">
        <singleMovie class="narrow" :movie="getNowPlayinMovies[4]" />
      </div>
    </div>
    <AppLoading v-else></AppLoading>

  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import singleMovie from '@/components/Banner/single-movie';
import AppLoading from '@/components/Loading';

export default {
  data(){
    return{
      movieOnCinema: [
        {
            "popularity": 102.489,
            "vote_count": 2157,
            "video": false,
            "poster_path": "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
            "id": 508439,
            "adult": false,
            "backdrop_path": "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
            "original_language": "en",
            "original_title": "Onward",
            "genre_ids": [
                12,
                16,
                35,
                14,
                10751
            ],
            "title": "Onward",
            "vote_average": 7.9,
            "overview": "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
            "release_date": "2020-02-29"
        },
        {
            "popularity": 100.993,
            "vote_count": 841,
            "video": false,
            "poster_path": "/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg",
            "id": 514847,
            "adult": false,
            "backdrop_path": "/naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg",
            "original_language": "en",
            "original_title": "The Hunt",
            "genre_ids": [
                28,
                27,
                53
            ],
            "title": "The Hunt",
            "vote_average": 6.7,
            "overview": "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",
            "release_date": "2020-03-11"
        },
        {
            "popularity": 91.839,
            "vote_count": 2574,
            "video": false,
            "poster_path": "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
            "id": 338762,
            "adult": false,
            "backdrop_path": "/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
            "original_language": "en",
            "original_title": "Bloodshot",
            "genre_ids": [
                28,
                878
            ],
            "title": "Bloodshot",
            "vote_average": 7,
            "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
            "release_date": "2020-03-05"
        },
        {
            "popularity": 46.375,
            "vote_count": 10,
            "video": false,
            "poster_path": "/uCDcQbfIKY4oTPd6tbghloFm7Gi.jpg",
            "id": 606679,
            "adult": false,
            "backdrop_path": "/aVX9a54YFmrcEHATubpuFQQKn5L.jpg",
            "original_language": "en",
            "original_title": "The High Note",
            "genre_ids": [
                35,
                18,
                10402,
                10749
            ],
            "title": "The High Note",
            "vote_average": 7.8,
            "overview": "Set in the dazzling world of the LA music scene comes the story of Grace Davis, a superstar whose talent, and ego, have reached unbelievable heights. Maggie is Grace’s overworked personal assistant who’s stuck running errands, but still aspires to her childhood dream of becoming a music producer. When Grace’s manager presents her with a choice that could alter the course of her career, Maggie and Grace come up with a plan that could change their lives forever.",
            "release_date": "2020-06-10"
        },
        {
            "popularity": 54.818,
            "vote_count": 1389,
            "video": false,
            "poster_path": "/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg",
            "id": 522627,
            "adult": false,
            "backdrop_path": "/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg",
            "original_language": "en",
            "original_title": "The Gentlemen",
            "genre_ids": [
                28,
                35,
                80
            ],
            "title": "The Gentlemen",
            "vote_average": 7.7,
            "overview": "American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
            "release_date": "2020-01-01"
        },
        {
            "popularity": 51.255,
            "vote_count": 4,
            "video": false,
            "poster_path": "/cDbOrc2RtIA37nLm0CzVpFLrdaG.jpg",
            "id": 513584,
            "adult": false,
            "backdrop_path": "/13b8KdDyG5YvMpTY0tH1hPR2APn.jpg",
            "original_language": "en",
            "original_title": "Think Like a Dog",
            "genre_ids": [
                35,
                10751
            ],
            "title": "Think Like a Dog",
            "vote_average": 6.5,
            "overview": "A 12-year-old tech prodigy whose science experiment goes awry and he forges a telepathic connection with his best friend, his dog. The duo join forces and use their unique perspectives on life to comically overcome complications of family and school.",
            "release_date": "2020-06-05"
        },
        {
            "popularity": 43.812,
            "vote_count": 421,
            "video": false,
            "poster_path": "/dqA2FCzz4OMmXLitKopzf476RVB.jpg",
            "id": 585244,
            "adult": false,
            "backdrop_path": "/21Q8bzu10YF9i4O5amBkJBombYo.jpg",
            "original_language": "en",
            "original_title": "I Still Believe",
            "genre_ids": [
                18,
                10402
            ],
            "title": "I Still Believe",
            "vote_average": 7.8,
            "overview": "The true-life story of Christian music star Jeremy Camp and his journey of love and loss that looks to prove there is always hope.",
            "release_date": "2020-03-12"
        },
        {
            "popularity": 41.296,
            "vote_count": 124,
            "video": false,
            "poster_path": "/niyXFhGIk4W2WTcX2Eod8vx2Mfe.jpg",
            "id": 686245,
            "adult": false,
            "backdrop_path": "/cVnCwyaKP7exbgaCMR9DJS4xleZ.jpg",
            "original_language": "en",
            "original_title": "Survive the Night",
            "genre_ids": [
                28,
                53
            ],
            "title": "Survive the Night",
            "vote_average": 5.8,
            "overview": "A disgraced doctor and his family are held hostage at their home by criminals on the run, when a robbery-gone-awry requires them to seek immediate medical attention.",
            "release_date": "2020-05-22"
        },
        {
            "popularity": 57.412,
            "vote_count": 1361,
            "video": false,
            "poster_path": "/33VdppGbeNxICrFUtW2WpGHvfYc.jpg",
            "id": 481848,
            "adult": false,
            "backdrop_path": "/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg",
            "original_language": "en",
            "original_title": "The Call of the Wild",
            "genre_ids": [
                12,
                18,
                10751
            ],
            "title": "The Call of the Wild",
            "vote_average": 7.4,
            "overview": "Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.",
            "release_date": "2020-02-19"
        },
        {
            "popularity": 30.614,
            "vote_count": 1579,
            "video": false,
            "poster_path": "/3nk9UoepYmv1G9oP18q6JJCeYwN.jpg",
            "id": 503919,
            "adult": false,
            "backdrop_path": "/5BmcysaAASA00FM0gRjD0ClMUY9.jpg",
            "original_language": "en",
            "original_title": "The Lighthouse",
            "genre_ids": [
                18,
                14,
                27,
                9648
            ],
            "title": "The Lighthouse",
            "vote_average": 7.6,
            "overview": "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
            "release_date": "2019-10-18"
        },
        {
            "popularity": 41.832,
            "vote_count": 1261,
            "video": false,
            "poster_path": "/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg",
            "id": 443791,
            "adult": false,
            "backdrop_path": "/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg",
            "original_language": "en",
            "original_title": "Underwater",
            "genre_ids": [
                28,
                27,
                878,
                53
            ],
            "title": "Underwater",
            "vote_average": 6.3,
            "overview": "After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.",
            "release_date": "2020-01-08"
        },
        {
            "popularity": 43.343,
            "vote_count": 551,
            "video": false,
            "poster_path": "/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
            "id": 618344,
            "adult": false,
            "backdrop_path": "/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg",
            "original_language": "en",
            "original_title": "Justice League Dark: Apokolips War",
            "genre_ids": [
                28,
                12,
                16,
                14,
                878
            ],
            "title": "Justice League Dark: Apokolips War",
            "vote_average": 8.4,
            "overview": "Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.",
            "release_date": "2020-05-05"
        },
        {
            "popularity": 35.368,
            "vote_count": 9,
            "video": false,
            "poster_path": "/jZIceEQEp3mlwhgT8eLOMdeWFZX.jpg",
            "id": 696007,
            "adult": false,
            "backdrop_path": "/1xYTUpCutAYgpbqC9Gxw7qIbc0T.jpg",
            "original_language": "en",
            "original_title": "Legacy",
            "genre_ids": [
                28,
                53
            ],
            "title": "Legacy",
            "vote_average": 7,
            "overview": "While on a hunting trip in the isolated wilderness, a father and his adopted teenage son are turned into the prey of unknown assailants. They are unexpectedly joined in their fight for survival by a stranger who reveals the disturbing truth about the son's biological father, an international crime lord, and why that crime lord has sent trained assassins to kill the teenager.",
            "release_date": "2020-05-28"
        },
        {
            "popularity": 48.375,
            "vote_count": 96,
            "video": false,
            "poster_path": "/jrIZInArGH7RR7R4MgNJPlitdxA.jpg",
            "id": 565743,
            "adult": false,
            "backdrop_path": "/lVSMgZUBE4XTVaPBEBAczre4f1W.jpg",
            "original_language": "en",
            "original_title": "The Vast of Night",
            "genre_ids": [
                18,
                9648,
                878
            ],
            "title": "The Vast of Night",
            "vote_average": 6.7,
            "overview": "At the dawn of the space-race, two radio-obsessed teens discover a strange frequency over the airwaves in what becomes the most important night of their lives and in the history of their small town.",
            "release_date": "2020-05-15"
        },
        {
            "popularity": 34.181,
            "vote_count": 3241,
            "video": false,
            "poster_path": "/8ZX18L5m6rH5viSYpRnTSbb9eXh.jpg",
            "id": 619264,
            "adult": false,
            "backdrop_path": "/3tkDMNfM2YuIAJlvGO6rfIzAnfG.jpg",
            "original_language": "es",
            "original_title": "El hoyo",
            "genre_ids": [
                18,
                878,
                53
            ],
            "title": "The Platform",
            "vote_average": 7,
            "overview": "A mysterious place, an indescribable prison, a deep hole. An unknown number of levels. Two inmates living on each level. A descending platform containing food for all of them. An inhuman fight for survival, but also an opportunity for solidarity…",
            "release_date": "2019-11-08"
        },
        {
            "popularity": 34.435,
            "vote_count": 74,
            "video": false,
            "poster_path": "/m2rJGjlesDKxugl7ypW8n3Mipjl.jpg",
            "id": 620883,
            "adult": false,
            "backdrop_path": "/prnq2ONhqo9Tga7dOMZKgFJMofs.jpg",
            "original_language": "es",
            "original_title": "La corazonada",
            "genre_ids": [
                80,
                53
            ],
            "title": "Intuition",
            "vote_average": 6,
            "overview": "Police officer Pipa works on her first big case while simultaneously investigating her boss, who is suspected of murder. The prequel to \"Perdida\".",
            "release_date": "2020-05-28"
        },
        {
            "popularity": 27.566,
            "vote_count": 1,
            "video": false,
            "poster_path": null,
            "id": 683395,
            "adult": false,
            "backdrop_path": null,
            "original_language": "en",
            "original_title": "Virgin Bhanupriya",
            "genre_ids": [],
            "title": "Virgin Bhanupriya",
            "vote_average": 1,
            "overview": "an upcoming 2020 Indian Hindi-language comedy-drama film",
            "release_date": "2020-06-12"
        },
        {
            "popularity": 41.539,
            "vote_count": 3,
            "video": false,
            "poster_path": "/5ud97JNxaWXQGqaOv7eddvCNra0.jpg",
            "id": 310583,
            "adult": false,
            "backdrop_path": null,
            "original_language": "en",
            "original_title": "Daddy's Girl",
            "genre_ids": [
                18,
                53
            ],
            "title": "Daddy's Girl",
            "vote_average": 1,
            "overview": "A twisted suspense thriller about a manipulative teenage girl who convinces her widower/alcoholic/over protective father that the boy she asked out on a date beat and raped her, when in fact he turned down her advances. But no amount of facts can persuade this enraged father. No one hurts Daddy's Girl.",
            "release_date": "2020-06-15"
        },
        {
            "popularity": 21.356,
            "id": 565310,
            "video": false,
            "vote_count": 616,
            "vote_average": 7.6,
            "title": "The Farewell",
            "release_date": "2019-07-12",
            "original_language": "en",
            "original_title": "The Farewell",
            "genre_ids": [
                35,
                18
            ],
            "backdrop_path": "/qfB3KR6AuRI3Sqz8jWAOpRaGC0H.jpg",
            "adult": false,
            "overview": "A headstrong Chinese-American woman returns to China when her beloved grandmother is given a terminal diagnosis. Billi struggles with her family's decision to keep grandma in the dark about her own illness as they all stage an impromptu wedding to see grandma one last time.",
            "poster_path": "/7ht2IMGynDSVQGvAXhAb83DLET8.jpg"
        },
        {
            "popularity": 17.125,
            "vote_count": 1,
            "video": false,
            "poster_path": "/lck86UMIvIunTassoVGLVTfDsOI.jpg",
            "id": 681782,
            "adult": false,
            "backdrop_path": null,
            "original_language": "id",
            "original_title": "Backstage",
            "genre_ids": [
                18
            ],
            "title": "Backstage",
            "vote_average": 1,
            "overview": "Plot unknown.",
            "release_date": "2020-06-11"
        }
      ],
    }
  },
  components:{
    singleMovie,
    AppLoading
  },
  computed:{
    ...mapGetters('movies', [
      'getNowPlayinMovies'
    ])
  },
  methods:{
    ...mapActions('movies', [
      'loadLatestMovie'
    ])
  },
  created(){
    //this.$store.dispatch('movies/loadLatestMovie');
    this.loadLatestMovie();
  }
}
</script>
<style lang="scss" scoped>
@import './Banner.scss'
</style>
