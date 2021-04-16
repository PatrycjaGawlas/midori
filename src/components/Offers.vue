<template>
  <div class="offer">
    <div class="offer__header-title">Oferta</div>
    <div class="offer__section">
      <img class="offer__image" src="../assets/watering.png"/>
      <div class="offer__section__text">
        <div class="offer__section__text__title">Systemy Automatycznego Nawadniania</div>
        <div class="offer__section__text__description">Ze względu na środowisko oraz finanse warto zaopatrzyć ogród w system automatycznego nawadniania. </div>
        <div @click="goToDetails('systemy')" class="offer__section__text__button">Wiecej</div>
      </div>
    </div>
    <div class="offer__section">
      <img class="offer__image offer__image-order" src="../assets/project.png"/>
      <div class="offer__section__text">
        <div class="offer__section__text__title">Projekt</div>
        <div class="offer__section__text__description">Prawidłowo zaprojektowany ogród będzie tańszy i łatwy w utrzymaniu ale przede wszystkim coraz piękniejszy z biegiem lat.</div>
        <div @click="goToDetails('projekt')" class="offer__section__text__button">Wiecej</div>
      </div>
    </div>
    <div class="offer__section">
      <img class="offer__image" src="../assets/light.png"/>
      <div class="offer__section__text">
        <div class="offer__section__text__title">Oświetlenie ogrodu</div>
        <div class="offer__section__text__description">Oświetlając ogród nadajemy mu zupełnie innego charakteru oraz wydłużamy czas , w którym możemy z niego korzystać na przykład podczas spotkań ze znajomymi. </div>
        <div @click="goToDetails('oswietlenie')" class="offer__section__text__button">Wiecej</div>
      </div>
    </div>
    <div class="offer__section">
      <img class="offer__image offer__image-order" src="../assets/caring.png"/>
      <div class="offer__section__text">
        <div class="offer__section__text__title">Pielęgnacja</div>
        <div class="offer__section__text__description">Każdy, nawet najmniej wymagający ogród wymaga od nas ciągłej troski.</div>
        <div @click="goToDetails('pielegnacja')" class="offer__section__text__button">Wiecej</div>
      </div>
    </div>
    <div class="offer__section">
      <img class="offer__image" src="../assets/tree.png"/>
      <div class="offer__section__text">
        <div class="offer__section__text__title">Sadzenie większych drzew</div>
        <div class="offer__section__text__description">Sadząc większe drzewa, oszczędzamy czas który musi upłynąć do uzyskania finalnego wyglądu ogrodu.</div>
        <div @click="goToDetails('drzewa')" class="offer__section__text__button">Wiecej</div>
      </div>
    </div>
    <div class="offer__section">
      <img class="offer__image offer__image-order" src="../assets/wood.png"/>
      <div class="offer__section__text">
        <div class="offer__section__text__title">Kamień i drewno</div>
        <div class="offer__section__text__description">Kamień i drewno to ekologiczne, trwałe i zawsze modne materiały, z których można wykonać wszystkie elementy małej architektury pasujące do każdego ogrodu.</div>
        <div @click="goToDetails('kamien')" class="offer__section__text__button">Wiecej</div>
      </div>
    </div>
    <div class="offer__section">
      <img class="offer__image" src="../assets/flowers.png"/>
      <div class="offer__section__text">
        <div class="offer__section__text__title">Rabaty z polnymi kwiatami</div>
        <div class="offer__section__text__description">Chcąc mieć zdrowy ogród warto zadbać o różnorodność nie tylko flory ale też fauny. Obecność wielu gatunków owadów, gadów, płazów i ptaków znacznie przyczynia się do naturalnego eliminowania szkodników ogrodowych.</div>
        <div @click="goToDetails('rabaty')" class="offer__section__text__button">Wiecej</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToDetails(subPage) {
      this.$router.push('/oferta/' + subPage)
    }
  }
}
</script>

<style scoped lang="scss">
  .offer {
    font-family: 'Montserrat';
    padding: -0;
    margin-top: 74px;

    @media (min-width: 576px) {
      margin-top: 83px;
    }

    @media (min-width: 768px) {
      margin-top: 108px;
    }

    &__header-title {
      color: #124A2F;
      font-size: 32px;
      padding: 16px 32px;
      @media (min-width: 576px) {
        font-size: 48px;
      }
      @media (min-width: 768px) {
        font-size: 56px;
      }
    }

    &__section {
      display: flex;
      flex-direction: column;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      &__text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px;
        width: 100%;
        @media (min-width: 768px) {
          width: 50%;
        }
        &__title {
          text-align: center;
          font-weight: 700;
          color: #124A2F;
          font-size: 18px;
          letter-spacing: 2px;
          margin-bottom: 16px;
          @media (min-width: 576px) {
            font-size: 22px;
          }
          @media (min-width: 992px) {
            font-size: 28px;
          }
        }
        &__description {
          text-align: center;
          margin-bottom: 24px;
          @media (min-width: 576px) {
            font-size: 14px;
          }
          @media (min-width: 992px) {
            font-size: 16px;
          }
        }
        &__button {
          border-radius: 25px;
          border: 1px solid #2a7d2e;
          color: #2a7d2e;
          font-size: 10px;
          padding: 10px 22px;
          font-weight: 600;
          &:hover {
            cursor: pointer;
          }
          @media (min-width: 768px) {
            font-size: 12px;
            padding: 12px 24px;
          }
        }
      }
    }

    &__image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: top;
      @media (min-width: 768px) {
        width: 50%;
      }
    }
    &__image-order {
      @media (min-width: 768px) {
        order: 2;
      }
    }
  }
</style>