<template>
  <div class="home container">
    <section>
      <appBanner></appBanner>
    </section>
    <section>
      <appSlider></appSlider>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import appBanner from '@/components/Banner/Banner';
import appSlider from '@/components/Slider/Slider';
export default {
  name: 'Home',
  components: {
    appBanner,
    appSlider
  },
};
</script>

