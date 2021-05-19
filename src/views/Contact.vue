<template>
  <div class="contact">
    <div class="contact__header">
      <div class="contact__header__title">Kontakt</div>
      <img class="contact__header__image" src="../assets/garden.png"/>
    </div>
    <!-- <div class="contact__title">Kontakt</div> -->
    <div class="contact__body">
      <div class="contact__box">
        <BIconGeoAlt class="contact__icon"/>
        <div>Marek Domański</div>
        <div>Żory</div>
      </div>
      <div class="contact__box">
        <BIconPhoneVibrate class="contact__icon"/> 
        +48 730 815 700
      </div>
      <div class="contact__box">
        <BIconEnvelope class="contact__icon"/>
        kontakt@ogrody-midori.pl
      </div>
      <div class="contact__box">
        <BIconFacebook class="contact__icon"/> 
        @MidoriMilosnicyRoslin
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .contact {
    font-family: 'Montserrat';
    padding: -0;
    &__header {
      position: relative;
      width: 100%;
      margin-top: 74px;

      @media (min-width: 576px) {
        margin-top: 83px;
      }
      @media (min-width: 768px) {
        margin-top: 0;
      }

      &__title {
        font-weight: bold;
        color: white;
        position: absolute;
        top: 50%;
        font-size: 24px;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (min-width: 576px) {
          font-size: 42px;
        }
        @media (min-width: 768px) {
          font-size: 54px;
        }
        z-index: 1;
      }
      &__image {
        width: 100%;
        filter: brightness(50%);
      }
    }
    &__title {
      color: #124A2F;
      font-size: 32px;
      padding: 16px 50px;
      @media (min-width: 576px) {
        font-size: 48px;
      }
      @media (min-width: 768px) {
        font-size: 56px;
      }
    }
    &__body {
      color: #2a7d2e;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      padding: 0 20px 20px 20px;
      margin-top: 20px;
      z-index: 10;
      @media (min-width: 576px) {
        padding: 0 50px 50px 50px;
        margin-top: -30px;
      }
      @media (min-width: 992px) {
        margin-top: -80px;
      }

    }
    &__icon {
      height: 40px;
      width: 40px;
      margin-bottom: 8px;
    }
    &__box {
      width: 100%;
      border: 1px solid #2a7d2e;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 60px 0;
      margin-bottom: 10px;
      background-color: white;
      z-index: 20;
      &:nth-of-type(2) {
        margin-right: 0;
      }
      &:last-of-type {
        margin-right: 0px;
      }
      @media (min-width: 576px) {
        width: calc((100% - 10px) / 2);
        margin-right: 10px;
      }
      @media (min-width: 992px) {
        width: calc((100% - 30px) / 4);
        margin-bottom: 0px;
        &:nth-of-type(2) {
          margin-right: 10px;
        }
      }
    }
  }
</style>