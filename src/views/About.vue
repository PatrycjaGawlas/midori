<template>
  <div class="about">
    <div class="about__header">
      <div class="about__header__title">O mnie</div>
      <img class="about__header__image" src="../assets/about-us-stairs.png"/>
    </div>
    <div class="about__content-top">
      <div class="about__content-top--left">
        <p>Godny zaufania partner dla osób prywatnych jak i firm pragnących otoczyć zielenią swój dom lub przedsiębiorstwo.</p>
      </div>
      <div class="about__content-top--right">
        <p>Midori to firma, która zajmuje się profesjonalnym projektowaniem i zakładaniem ogrodów od 2009 roku. Specjalnością firmy jest tworzenie ogrodów naturalistycznych, które dzięki przemyślanemu projektowi, wpisują adaptowaną przestrzeń w otaczający ją krajobraz, przy jednoczesnym uwzględnieniu wszelkich potrzeb inwestora.</p>
      </div>
    </div>
    <div class="about__content-bottom">
      <div class="about__content-bottom--top-mobile">
        <img class="about__content-bottom__image" src="../assets/about-us.png"/>
      </div>
      <div class="about__content-bottom--left">
        <p>Celem firmy jest tworzenie unikalnych projektów ogrodów składających się z określonych stref funkcyjnych.</p>
        <p>Odpowiedni dobór roślin, respektujący ich indywidualne potrzeby oraz warunki panujące w danym terenie to kluczowy punkt wyjścia do każdego projektu. Jest to gwarancją zdrowego i bujnego wzrostu roślin, a ich późniejsza pielęgnacja nie przysparza większych trudności.</p>
        <p>Zastosowanie automatycznych systemów nawadniania i koszenia trawników oraz oryginalnych rozwiązań małej architektury pozwala na stworzenie przestrzeni będącej dla każdego inwestora wizytówką oraz miejscem relaksu, która przy minimalnym nakładzie prac pielęgnacyjnych, będzie cieszyć przez kolejne lata ewoluując wraz ze wzrostem roślin.</p>
      </div>
      <div class="about__content-bottom--right">
        <img class="about__content-bottom__image" src="../assets/about-us.png"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    font-size: 16px;
    color: #124A2F;
    font-family: 'Montserrat';
    @media (min-width: 576px) {
      font-size: 18px;
    }
    @media (min-width: 768px) {
      font-size: 22px;
    }
    &__header {
      position: relative;
      width: 100%;
      margin-top: 74px;

      @media (min-width: 576px) {
        margin-top: 83px;
      }

      @media (min-width: 768px) {
        margin-top: 108px;
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
        z-index: 9;
      }
      &__image {
        width: 100%;
        filter: brightness(50%);
      }
    }
    &__content-top {
      padding: 30px;
      display: flex;
      align-items: center;
      flex-direction: column;
      @media (min-width: 576px) {
        flex-direction: row;
        padding: 40px 50px;
      }
      @media (min-width: 768px) {
        padding: 40px;
      }

      &--left {
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        padding: 0;
        p {
          margin: 0;
        }
        @media (min-width: 576px) {
          font-size: 23px;
          padding-right: 12px;
          width: 50%;
        }
        @media (min-width: 768px) {
          font-size: 28px;
          padding: 30px 50px;
        }
      }
      &--right {
        padding: 0;
        width: 100%;
        @media (min-width: 576px) {
          padding-left: 12px;
          width: 50%;
        }
        p {
          margin: 0;
        }
      }
    }
    &__content-bottom {
      padding: 0;
      background-color:#f5f5f5;
      display: flex;
      align-items: center;
      flex-direction: column;
      @media (min-width: 576px) {
        padding: 50px 0px;
        flex-direction: row;
      }
      &--top-mobile {
        width: 100%;
        @media (min-width: 576px) {
          display: none;
        }
      }
      &--left {
        width: 100%;
        padding: 30px;
        @media (min-width: 576px) {
          width: 45%;
          padding-right: 12px;
          padding-left: 50px;
        }
      }
      &--right {
        display: none;
        padding: 30px;
        width: 100%;
        @media (min-width: 576px) {
          display: block;
          padding-left: 12px;
          padding-right: 0px;
          width: 55%;
        }
      }
      &__image {
        width: 100%
      }
    }
  }
</style>
