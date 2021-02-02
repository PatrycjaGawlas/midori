<template>
  <div class="offer-details">
    <div class="offer-details__header">
      <div class="offer-details__header-title">{{pageTitle}}</div>
      <img class="offer-details__header-image" src="../assets/about-us-stairs.png"/>
    </div>
    <div class="offer-details__body">
      <div class="offer-details__left">
        <div class="offer-details__left-title">Oferta</div>
        <div class="offer-details__menu">
          <div v-for="item in menuItems" :key="item.page" @click="goToDetails(item.page)" class="offer-details__menu-item">
            {{item.title}}
          </div>
        </div>
      </div>
      <div class="offer-details__right">
        <div class="offer-details__right-title">{{pageTitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentComponent: null,
    menuItems: [
      {
        title: 'Systemy Automatycznego Nawadniania',
        page: 'systemy'
      },
      {
        title: 'Projekt',
        page: 'projekt'
      },
      {
        title: 'Oświetlenie ogrodu',
        page: 'oswietlenie'
      },
      {
        title: 'Pielęgnacja',
        page: 'pielegnacja'
      },
      {
        title: 'Sadzenie większych drzew',
        page: 'drzewa'
      },
      {
        title: 'Kamień i drewno',
        page: 'kamien'
      },
      {
        title: 'Rabaty z polnymi kwiatami',
        page: 'rabaty'
      }
    ]
  }),
  computed: {
    pageTitle() {
      let pageTitle = ''
      if (this.currentComponent) {
        const item = this.menuItems.find((item) => {
          return item.page === this.currentComponent
        })
        pageTitle = item.title
      }
      return pageTitle
    }
  },
  mounted() {
    this.currentComponent = this.$route.params.name
  },
  watch:{
    $route (to){
        this.currentComponent = to.params.name
    }
  }, 
  methods: {
    goToDetails(subPage) {
      this.$router.push('/oferta/' + subPage)
    }
  }
}
</script>

<style scope lang="scss">
  .offer-details {
    font-family: 'Montserrat';
    color: #124A2F;
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
      &-title {
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
      }
      &-image {
        width: 100%;
      } 
    }
    &__body {
      display: flex;
    }
    &__left {
      flex-grow: 1;
      // background-color: #f7f7f7;
      padding: 24px 36px;
      &-title {
        font-size: 24px;
        font-weight: bold;
      }
    }
    &__right {
      flex-grow: 4;
      padding: 24px 36px;
      &-title {
        font-size: 22px;
        color: #124A2F;
        font-weight: bold;
      }
    }
  }
</style>