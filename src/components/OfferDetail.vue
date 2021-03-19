<template>
  <div class="offer-details">
    <div class="offer-details__header">
      <div class="offer-details__header-overlay"></div>
      <div class="offer-details__header-title">
        <span>{{pageTitle}}</span>
      </div>
      <img class="offer-details__header-image" :src="pagePhoto"/>
    </div>
    <div class="offer-details__body">
      <div class="offer-details__left">
        <div class="offer-details__left-title">Oferta</div>
        <div class="offer-details__menu">
          <div v-for="item in menuItems" 
            :key="item.page" 
            @click="goToDetails(item.page)" 
            class="offer-details__menu-item"
            :class="{'offer-details__menu-item--selected': currentPageData.page === item.page}">
            {{item.title}}
          </div>
        </div>
        <div class="offer-details__menu-projects" @click="goToRealizations">
          Wszystkie realizacje
          <BIconArrowRightCircleFill font-scale="1" variant="light"/>
        </div>
      </div>
      <div class="offer-details__right">
        <!-- <div class="offer-details__right-title">{{pageTitle}}</div> -->
        <div class="offer-details__right-text">
          <div v-for="paragraph in pageText" :key="paragraph" class="offer-details__right-text-paragraph">
            {{paragraph}}
          </div>
        </div>
        <div class="offer-details__right-title">Realizacje</div>
        <div class="offer-details__right-image-container">
          <div class=""></div>
          <img v-for="photo in pagePhotos" 
          :key="photo.src" @click="openGallery(photo.src)" 
          :src="photo.src" 
          class="offer-details__right-image"
          :class="{'offer-details__right-image--vertical' : photo.isVertical}"/>
        </div>
        <Gallery v-if="isGalleryOpen" @onClose="closeGallery" :photos="pagePhotos" :photo="currentPhoto" />
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
export default {
  components: {
    Gallery
  },
  data: () => ({
    currentComponent: null,
    isGalleryOpen: false,
    currentPhoto: null,
    menuItems: [
      {
        title: 'Automatyczne Nawadnianie',
        page: 'systemy',
        text: [
          'W coraz bardziej suchym klimacie Polski odpowiedzialne wykorzystanie wody w ogrodzie jest bardzo istotne.  Ze względu na środowisko oraz finanse warto zaopatrzyć ogród w system automatycznego nawadniania. Pozwala to zoptymalizować zużycie wody potrzebnej do nawadniania trawników i rabat. Nasza firma zapewni doradztwo, projekt i montaż systemu w Państwa ogrodzie.'
        ],
        mainPhoto: require('../assets/offers/water/1.jpg'),
        photos: [
          {src: require('../assets/offers/water/2.jpg'), isVertical: true},
          {src: require('../assets/offers/water/1.jpg')},
          {src: require('../assets/offers/water/3.jpg')},
          {src: require('../assets/offers/water/4.jpg')},
          {src: require('../assets/offers/water/6.jpg')}
        ]
      },
      {
        title: 'Projekt',
        page: 'projekt',
        text: [
            'Prawidłowo zaprojektowany ogród będzie tańszy i łatwy w utrzymaniu ale przede wszystkim coraz piękniejszy z biegiem lat.',
            'Oferuję Państwu projekt uwzględniający warunki wzrostu roślin, budżet, stopień zaangażowania przy późniejszej pielęgnacji oraz Państwa własne założenia i pomysły. Do każdego projektu podchodzę indywidualnie dzięki czemu nasze ogrody są unikalne.',
            'Dobry projekt ogrodu pozwala zaplanować i zoptymalizować koszty oraz uniknąć wielu błędów.',
            'Projekt zawiera: dobór roślin, plan oświetlenia, plan automatycznego nawadniania, wycenę robocizny, wycenę materiałów oraz opcjonalnie wizualizacje 3d'
        ],
        mainPhoto: require('../assets/offers/project/1.jpg'),
        photos: [
          {src: require('../assets/offers/project/1.jpg')},
          {src: require('../assets/offers/project/2.jpg')},
          {src: require('../assets/offers/project/3(1).jpg')},
          {src: require('../assets/offers/project/3(2).jpg')},
          {src: require('../assets/offers/project/3(3).jpg')},
          {src: require('../assets/offers/project/3(4).jpg')},
          {src: require('../assets/offers/project/3(5).jpg')},
          {src: require('../assets/offers/project/3(6).jpg')},
          {src: require('../assets/offers/project/4.jpg')},
          {src: require('../assets/offers/project/4a.jpg')},
          {src: require('../assets/offers/project/5.jpg')},
          {src: require('../assets/offers/project/5a.jpg')},
          {src: require('../assets/offers/project/6.jpg')},
          {src: require('../assets/offers/project/6a.jpg')},
          {src: require('../assets/offers/project/6b.jpg')},
          {src: require('../assets/offers/project/7.jpg')},
          {src: require('../assets/offers/project/8.jpg')},
          {src: require('../assets/offers/project/9.jpg')},
          {src: require('../assets/offers/project/10.jpg')},
          {src: require('../assets/offers/project/11.jpg')},
          {src: require('../assets/offers/project/12.jpg')},
          {src: require('../assets/offers/project/13.jpg')},
          {src: require('../assets/offers/project/14.jpg')},
          {src: require('../assets/offers/project/15.jpg')},
        ]
      },
      {
        title: 'Oświetlenie ogrodu',
        page: 'oswietlenie',
        text: [
          'Oświetlając ogród nadajemy mu zupełnie innego charakteru oraz wydłużamy czas , w którym możemy z niego korzystać na przykład podczas spotkań ze znajomymi. Światło, choćby najskromniejsze,  ułatwia wieczorną komunikację i poprawia bezpieczeństwo a podświetlone rośliny to żywe rzeźby stanowiące wizytówkę posesji. '
        ],
        mainPhoto: require('../assets/offers/light/3.jpg'),
        photos: [
          {src: require('../assets/offers/light/1.jpg'), isVertical: true},
          {src: require('../assets/offers/light/2.jpg')},
          {src: require('../assets/offers/light/3.jpg')},
          {src: require('../assets/offers/light/4.jpg'), isVertical: true},
          {src: require('../assets/offers/light/5.jpg')},
          {src: require('../assets/offers/light/6.jpg')},
          {src: require('../assets/offers/light/7.jpg'), isVertical: true},
          {src: require('../assets/offers/light/8.jpg'), isVertical: true},
          {src: require('../assets/offers/light/9.jpg'), isVertical: true}
        ]
      },
      {
        title: 'Pielęgnacja',
        page: 'pielegnacja',
        text: [
          'Każdy, nawet najmniej wymagający ogród wymaga od nas ciągłej troski. Chcąc uzyskać efekt bujnej, zdrowej zieleni musimy zapewnić każdej roślinie odpowiednie stanowisko, podłoże, ściółkę, nawadnianie ale też późniejszą pielęgnację. Szeroki zakres wiedzy ogrodniczej i doświadczenie w pracy ma tu kluczowe znaczenie dlatego polecam Państwu nasze usługi pielęgnacji. ',
          'Są to między innymi:',
          'Cięcia zimowe drzew owocowych, cięcia odmładzające drzew i krzewów, kompleksowa pielęgnacja trawników, cięcie obrzeży trawnika, dzielenie bylin, sadzenie roślin jednorocznych, przesadzanie roślin, nawożenie, strzyżenie żywopłotów i formowanie roślin, odchwaszczanie, opryski roślin i trawników, ściółkowanie, kompostowanie i wywóz odpadów, sprzątanie liści, czyszczenie oczek wodnych, czyszczenie i impregnacja kamienia oraz drewna, naprawy ścieżek i elementów małej architektury, zabezpieczenie roślin przed zimą.'
        ],
        mainPhoto: require('../assets/offers/caring/21.jpg'),
        photos: [
          {src: require('../assets/offers/caring/1.jpg')},
          {src: require('../assets/offers/caring/2.jpg')},
          {src: require('../assets/offers/caring/3.jpg')},
          {src: require('../assets/offers/caring/4.jpg')},
          {src: require('../assets/offers/caring/5.jpg'), isVertical: true},
          {src: require('../assets/offers/caring/5a.jpg')},
          {src: require('../assets/offers/caring/5b.jpg')},
          {src: require('../assets/offers/caring/6.jpg')},
          {src: require('../assets/offers/caring/7.jpg'), isVertical: true},
          {src: require('../assets/offers/caring/8.jpg')},
          {src: require('../assets/offers/caring/11.jpg')},
          {src: require('../assets/offers/caring/11ab.jpg'), isVertical: true},
          {src: require('../assets/offers/caring/12.jpg')},
          {src: require('../assets/offers/caring/13.jpg'), isVertical: true},
          {src: require('../assets/offers/caring/14.jpg')},
          {src: require('../assets/offers/caring/15.jpg'), isVertical: true},
          {src: require('../assets/offers/caring/16.jpg')},
          {src: require('../assets/offers/caring/17.jpg')},
          {src: require('../assets/offers/caring/18.jpg'), isVertical: true},
          {src: require('../assets/offers/caring/19.jpg')},
          {src: require('../assets/offers/caring/20.jpg')},
          {src: require('../assets/offers/caring/21.jpg')},
          {src: require('../assets/offers/caring/22.jpg')},
          {src: require('../assets/offers/caring/23.jpg')},
          {src: require('../assets/offers/caring/24.jpg')},
          {src: require('../assets/offers/caring/25.jpg')},
        ]
      },
      {
        title: 'Sadzenie większych drzew',
        page: 'drzewa',
        text: [
          'Sadząc większe drzewa, oszczędzamy czas który musi upłynąć do uzyskania finalnego wyglądu ogrodu.',
          'Duże drzewo to duży koszt i odpowiedzialność. Dlatego przy sadzeniu większych roślin polecam skorzystać  z naszych usług. Pomożemy dobrać drzewo do danego stanowiska. Zadbamy o wzbogacenie podłoża, automatyczne nawadnianie i zabezpieczenie przed wiatrem. Ułatwi to roślinie przyjęcie się i zagwarantuje szybszy wzrost.'
        ],
        mainPhoto: require('../assets/offers/tree/2.jpg'),
        photos: [
          {src: require('../assets/offers/tree/1.jpg'), isVertical: true},
          {src: require('../assets/offers/tree/3.jpg')},
          {src: require('../assets/offers/tree/5.jpg'), isVertical: true},
          {src: require('../assets/offers/tree/6.jpg')},
          {src: require('../assets/offers/tree/10.jpg'), isVertical: true},
          {src: require('../assets/offers/tree/4.jpg')},
          {src: require('../assets/offers/tree/8.jpg'), isVertical: true},
          {src: require('../assets/offers/tree/2.jpg')},
          {src: require('../assets/offers/tree/7.jpg'), isVertical: true},
          {src: require('../assets/offers/tree/9.jpg'), isVertical: true}
        ]
      },
      {
        title: 'Kamień i drewno',
        page: 'kamien',
        text: [
          'Kamień i drewno to ekologiczne, trwałe i zawsze modne materiały, z których można wykonać wszystkie elementy małej architektury pasujące do każdego ogrodu.',
          'Chętnie wykonamy dla Państwa: ścieżki, podesty, obrzeża, tarasy, altany, wiaty, pergole, trejaże, podpory, ogrodzenia, ławki, stoły, donice, schody, kompozycje kamienne, murki oporowe i inne.'
        ],
        mainPhoto: require('../assets/offers/wood/1.jpg'),
        photos: [
          {src: require('../assets/offers/wood/1.jpg')},
          {src: require('../assets/offers/wood/2.jpg'), isVertical: true},
          {src: require('../assets/offers/wood/3.jpg')},
          {src: require('../assets/offers/wood/4.jpg'), isVertical: true},
          {src: require('../assets/offers/wood/5.jpg')},
          {src: require('../assets/offers/wood/6.jpg')},
          {src: require('../assets/offers/wood/7.jpg')},
          {src: require('../assets/offers/wood/8.jpg')},
          {src: require('../assets/offers/wood/9.jpg')},
          {src: require('../assets/offers/wood/10.jpg')},
          {src: require('../assets/offers/wood/11.jpg')},
          {src: require('../assets/offers/wood/12.jpg')},
          {src: require('../assets/offers/wood/13.jpg')},
          {src: require('../assets/offers/wood/14.jpg'), isVertical: true},
          {src: require('../assets/offers/wood/17.jpg')},
          {src: require('../assets/offers/wood/18.jpg')},
          {src: require('../assets/offers/wood/19.jpg'), isVertical: true},
          {src: require('../assets/offers/wood/20.jpg')},
          {src: require('../assets/offers/wood/21.jpg')},
          {src: require('../assets/offers/wood/22.jpg')},
          {src: require('../assets/offers/wood/23.jpg'), isVertical: true},
          {src: require('../assets/offers/wood/24.jpg')},
          {src: require('../assets/offers/wood/25.jpg'), isVertical: true},
          {src: require('../assets/offers/wood/26.jpg')},
          {src: require('../assets/offers/wood/27.jpg')},
          {src: require('../assets/offers/wood/28.jpg')},
          {src: require('../assets/offers/wood/15.jpg')},
          {src: require('../assets/offers/wood/16.jpg')},
        ]
      },
      {
        title: 'Rabaty z polnymi kwiatami',
        page: 'rabaty',
        text: [
          'Chcąc mieć zdrowy ogród warto zadbać o różnorodność nie tylko flory ale też fauny. Obecność wielu gatunków owadów, gadów, płazów i ptaków znacznie przyczynia się do naturalnego eliminowania szkodników ogrodowych . Aby zaprosić do ogrodu nowych mieszkańców warto przeznaczyć dla nich choćby niewielki fragment rabaty obsiewając ją roślinami jednorocznymi. Takie „dzikie rabaty” mogą być bardzo dekoracyjne przez cały sezon, nawet zimą. ',
          'Poza zakładaniem łąk kwietnych, zajmiemy się też doborem i montażem budek lęgowych oraz domków dla owadów'
        ],
        mainPhoto: require('../assets/offers/flowers/2.jpg'),
        photos: [
          {src: require('../assets/offers/flowers/1.jpg'), isVertical: true},
          {src: require('../assets/offers/flowers/2.jpg')},
          {src: require('../assets/offers/flowers/3.jpg'), isVertical: true},
          {src: require('../assets/offers/flowers/4.jpg')},
          {src: require('../assets/offers/flowers/5.jpg')},
          {src: require('../assets/offers/flowers/6.jpg'), isVertical: true},
          {src: require('../assets/offers/flowers/7.jpg')},
          {src: require('../assets/offers/flowers/8.jpg'), isVertical: true},
        ]
      }
    ],
  }),
  computed: {
    currentPageData(){
      let pageData = null
      if (this.currentComponent) {
        pageData = this.menuItems.find((item) => {
          return item.page === this.currentComponent
        })
      }
      return pageData
    },
    pagePhotos() {
      let pagePhotos = []

      if (this.currentPageData) {
        pagePhotos = this.currentPageData.photos
      }

      return pagePhotos
    },
    pageTitle() {
      let pageTitle = ''

      if (this.currentPageData) {
        pageTitle = this.currentPageData.title
      }

      return pageTitle
    },
    pageText() {
      let pageText = ''

      if (this.currentPageData) {
        pageText = this.currentPageData.text
      }

      return pageText
    },
    pagePhoto() {
      let pagePhoto = ''

      if (this.currentPageData) {
        pagePhoto = this.currentPageData.mainPhoto
      }

      return pagePhoto
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
    },
    goToRealizations() {
      this.$router.push('/realizacje')
    },
    openGallery(currentPhoto) {
      this.currentPhoto = currentPhoto
      this.isGalleryOpen = true;
    },
    closeGallery() {
      this.isGalleryOpen = false;
    }
  }
}
</script>

<style scoped lang="scss">
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 24px;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          text-align: left;
          @media (min-width: 576px) {
            width: 500px;
          }
        }
        @media (min-width: 576px) {
          font-size: 36px;
        }
        @media (min-width: 768px) {
          font-size: 54px;
        }
      }
      &-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        @media (min-width: 768px) {
          height: 300px;
        }
      }
      &-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
      }
    }
    &__body {
      display: flex;
      width: 100%;
      flex-direction: column;
      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
    &__menu {
      &-item {
        cursor: pointer;
        padding: 12px 0;
        border-bottom: 1px solid grey;
      }
      &-item {
        &--selected {
          font-weight: 600;
        }
      }
      &-projects {
        background-color: #124A2F;
        color: white;
        padding: 20px 30px;
        margin-top: 56px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: underline;
      }
    }
    &__left {
      width: 100%;
      padding: 0 12px 36px 12px;
      font-weight: 200;
      order: 1;
      @media (min-width: 576px) {
        padding: 24px 36px;
      }
      &-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      @media (min-width: 768px) {
        width: 30%;
      }
    }
    &__right {
      width: 100%;
      padding: 24px 12px;
      @media (min-width: 576px) {
        padding: 24px 36px;
      }
      @media (min-width: 768px) {
        width: 70%;
      }
      &-title {
        font-size: 24px;
        color: #124A2F;
        font-weight: bold;
        margin-bottom: 16px;
      }
      &-text {
        line-height: 1.7;
        font-weight: 200;
        &-paragraph {
          margin-bottom: 16px;
        }
      }
      &-image {
        cursor: pointer;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
        margin-bottom: 12px;
        height: 250px;
        @media (min-width: 576px) {
          height: 190px;
          margin-bottom: 16px;
        }
        @media (min-width: 992px) {
          height: 250px;
        }
        &-container {
          @media (min-width: 576px) {
            column-count: 2;
          }
          width: 100%;
        }
        &--vertical {
          @media (min-width: 576px) {
            height: 396px;
          }
          @media (min-width: 992px) {
            height: 516px;
          }
        }
      }
    }
  }
</style>