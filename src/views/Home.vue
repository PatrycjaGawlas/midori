<template>
  <div class="home__carousel-container">
    <Carousel></Carousel>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>

<style lang="scss" scoped>

  .carousel {
    top: 74px;
    @media (min-width: 576px) {
      top: 83px;
    }
    @media (min-width: 768px) {
      top: 0;
    }
  }
</style>
