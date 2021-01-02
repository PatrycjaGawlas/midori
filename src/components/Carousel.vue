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
          <b-button class="carousel__text__button" pill variant="outline-secondary">O nas</b-button>
          <b-button class="carousel__text__button carousel__text__button--primary" pill variant="primary">Kontakt</b-button>
        </div>
        <b-carousel-slide img-src="./../assets/1.png"></b-carousel-slide>
        <b-carousel-slide img-src="./../assets/2.png"></b-carousel-slide>
        <b-carousel-slide img-src="./../assets/3.png"></b-carousel-slide>
    </b-carousel>
</template>

<style lang="scss" scoped>
  .carousel {
    font-family: 'Montserrat';
    &__text {
      width: 100%;
      text-align: center;
      color: white;
      position: absolute;
      z-index: 20;
      top: 35%;
      left: 50%;
      transform: translate(-50%, 0);
      
      &__button {
        border-color: white;
        color: white;
        font-size: 10px;
        padding: 10px 22px;
        @media (min-width: 768px) {
          font-size: 12px;
          padding: 12px 24px;
        }
        &--primary {
          margin-left: 20px;
          background-color: white;
          color: black;
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
