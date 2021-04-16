<template>
    <b-carousel
        id="midori-carousel"
        :interval="5000"
        controls
        img-width="1024"
        img-height="20"
        pause="false"
        ride="carousel"
        no-hover-pause
    >
        <div class="carousel__text">
          <div class="carousel__text--title">OGRODY MIDORI</div>
          <div class="carousel__text--description">POMYSŁ – PROJEKT - WYKONANIE</div>
          <div class="carousel__text__button-wrapper">
            <div class="carousel__text__button" @click="redirectToAbout">O nas</div>
            <div class="carousel__text__button carousel__text__button--primary" @click="redirectToContact">Kontakt</div>
          </div>
        </div>
        <b-carousel-slide img-src="./../assets/1.png"></b-carousel-slide>
        <b-carousel-slide img-src="./../assets/3.png"></b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  methods: {
    redirectToAbout() {
      this.$router.push('/o-nas')
    },
    redirectToContact() {
      this.$router.push('/kontakt')
    }
  }
}

</script>

<style lang="scss" scoped>
  .carousel {
    font-family: 'Montserrat';
    &__text {
      width: 100%;
      text-align: center;
      color: white;
      position: absolute;
      z-index: 1;
      top: 35%;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      flex-direction: column;
      &__button {
        border-radius: 25px;
        border-color: white;
        border: 1px solid white;
        color: white;
        font-size: 10px;
        padding: 10px 22px;
        &:hover {
          cursor: pointer;
        }
        @media (min-width: 768px) {
          font-size: 12px;
          padding: 12px 24px;
        }
        &--primary {
          margin-left: 20px;
          background-color: white;
          color: black;
        }
        &-wrapper {
          display: flex;
          justify-content: center;
        }
      }
      &--title {
        font-size: 24px;
        line-height: 24px;
        font-weight: bold;
        margin-bottom: 5px;
        @media (min-width: 576px) {
          font-size: 36px;
          line-height: 36px;
          margin-bottom: 7px;
        }
        @media (min-width: 768px) {
          font-size: 45px;
          line-height: 45px;
          margin-bottom: 10px;
        }
      }
      &--description {
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 10px;
        @media (min-width: 576px) {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 15px;
        }
        @media (min-width: 768px) {
          font-size: 28px;
          line-height: 28px;
          margin-bottom: 22px;
        }
      }
    }
  }
</style>
