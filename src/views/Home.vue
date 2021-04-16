<template>
  <div class="home">
    <div class="home__carousel-container">
      <Carousel></Carousel>
    </div>
    <div class="home__offers">
      <div class="home__offers-cards">
        <OfferItem v-for="offer in offerItems" @click.native="redirectToOffer(offer)" :offer="offer" :key="offer.title"/>
      </div>
      <div class="home__button-row">
        <div class="home__button" @click="redirectToOffers">Wszystkie uslugi</div>
      </div>
    </div>
    <div class="home__about-us">
      <img class="home__about-us-image" src="../assets/2.png"/>
      <div class="home__about-us-body">
      <div class="home__about-us-title">Witamy w Midori</div>
      <div class="home__about-us-text">
        <div class="home__about-us-text-wrapper">
          <div>Nasza oferta skierowana jest do wszystkich osób prywatnych oraz firm pragnących otoczyć zielenią swój dom lub przedsiębiorstwo. Od 2009 roku profesjonalnie zajmuję się projektowaniem i zakładaniem ogrodów.</div>
          <div class="home__about-us--button" @click="redirectToAbout">Wiecej</div>
        </div>
      </div>
      </div>
    </div>
    <div class="home__realizations-wrapper">
      <div class="home__realizations-title">Realizacje</div>
      <div class="home__realizations">
        <div @click="openGallery(realization)" class="home__realizations__image-container" 
            v-for="realization in realizations"
            :key="realization.title" >
          <img  
            :src="realization.mainPhoto" 
            class="home__realizations__image"
          />
          <div class="home__realizations__image-text">
            <div>{{realization.title}}</div>
            <BIconChevronRight font-scale="1" variant="light" class=""/>
          </div>
          <div class="home__realizations__image-overlay">
            <div class="home__realizations__image-overlay-bg"></div>
            <div class="home__realizations__image-overlay-title">
              <BIconArrowsAngleExpand font-scale="2" variant="light" class="home__realizations__image-overlay-icon"/>
            </div>
          </div>
        </div>
      </div>
      <div class="home__button-row">
        <div class="home__button" @click="redirectToRealizations">Wszystkie realizacje</div>
      </div>
    </div>
    <Gallery v-if="isGalleryOpen" @onClose="closeGallery" :photos="galleryPhotos" :photo="galleryFirstPhoto" />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import OfferItem from '@/components/OfferItem.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    OfferItem,
    Gallery
  },
  methods: {
    closeGallery() {
      this.isGalleryOpen = false
    },
    openGallery(realization) {
      this.galleryPhotos = realization.photos
      this.galleryFirstPhoto = realization.mainPhoto
      this.isGalleryOpen = true
    },
    redirectToRealizations() {
      this.$router.push('/realizacje')
    },
    redirectToAbout() {
      this.$router.push('/o-nas')
    },
    redirectToOffers() {
      this.$router.push('/oferta')
    },
    redirectToOffer(offer) {
      let page = ''
      switch (offer.title) {
        case 'Nawadnianie':
          page = '/oferta/systemy'
          break;
        case 'Projekt':
          page = '/oferta/projekt'
          break;
        case 'Oświetlenie':
          page = '/oferta/oswietlenie'
          break;
        case 'Pielęgnacja':
          page = '/oferta/pielegnacja'
          break;
      }

      this.$router.push(page)
    }
  },
  data: () => ({
    isGalleryOpen: false,
    galleryPhotos: [],
    galleryFirstPhoto: '',
    offerItems: [
      {
        title: 'Nawadnianie',
        description: 'Ze względu na środowisko oraz finanse warto zaopatrzyć ogród w system automatycznego nawadniania.',
        image: 'irrigation-system.svg'
      },
      {
        title: 'Projekt',
        description: 'Prawidłowo zaprojektowany ogród będzie tańszy i łatwy w utrzymaniu ale przede wszystkim coraz piękniejszy z biegiem lat.',
        image: 'calendar.svg'
      },
      {
        title: 'Oświetlenie',
        description: 'Oświetlając ogród nadajemy mu zupełnie innego charakteru oraz wydłużamy czas , w którym możemy z niego korzystać na przykład podczas spotkań ze znajomymi.',
        image: 'lantern.svg'
      },
      {
        title: 'Pielęgnacja',
        description: 'Każdy, nawet najmniej wymagający ogród wymaga od nas ciągłej troski.',
        image: 'farming.svg'
      }
    ],
    realizations: [
      {
        title: 'Dąbrówka',
        mainPhoto: require('../assets/realizations/dabrowka2/5a.jpg'),
        photos: [
          {src: require('../assets/realizations/dabrowka2/1.jpg')},
          {src: require('../assets/realizations/dabrowka2/1a.jpg')},
          {src: require('../assets/realizations/dabrowka2/2.jpg')},
          {src: require('../assets/realizations/dabrowka2/2a.jpg')},
          {src: require('../assets/realizations/dabrowka2/3.jpg')},
          {src: require('../assets/realizations/dabrowka2/3a.jpg')},
          {src: require('../assets/realizations/dabrowka2/4.jpg')},
          {src: require('../assets/realizations/dabrowka2/4a.jpg')},
          {src: require('../assets/realizations/dabrowka2/5.jpg')},
          {src: require('../assets/realizations/dabrowka2/5a.jpg')},
          {src: require('../assets/realizations/dabrowka2/6.jpg')},
          {src: require('../assets/realizations/dabrowka2/6a.jpg')},
          {src: require('../assets/realizations/dabrowka2/7.jpg')},
          {src: require('../assets/realizations/dabrowka2/7a.jpg')},
          {src: require('../assets/realizations/dabrowka2/8.jpg')},
          {src: require('../assets/realizations/dabrowka2/8a.jpg')},
          {src: require('../assets/realizations/dabrowka2/9.jpg')},
          {src: require('../assets/realizations/dabrowka2/9a.jpg')},
          {src: require('../assets/realizations/dabrowka2/10.jpg')},
          {src: require('../assets/realizations/dabrowka2/10a.jpg')},
          {src: require('../assets/realizations/dabrowka2/11.jpg')},
          {src: require('../assets/realizations/dabrowka2/11a.jpg')},
          {src: require('../assets/realizations/dabrowka2/12.jpg')},
          {src: require('../assets/realizations/dabrowka2/12a.jpg')},
          {src: require('../assets/realizations/dabrowka2/13.jpg')},
          {src: require('../assets/realizations/dabrowka2/13a.jpg')},
          {src: require('../assets/realizations/dabrowka2/14.jpg')},
          {src: require('../assets/realizations/dabrowka2/15.jpg')},
          {src: require('../assets/realizations/dabrowka2/16.jpg')},
          {src: require('../assets/realizations/dabrowka2/17.jpg')},
          {src: require('../assets/realizations/dabrowka2/18.jpg')},
          {src: require('../assets/realizations/dabrowka2/19.jpg')},
          {src: require('../assets/realizations/dabrowka2/20.jpg')},
          {src: require('../assets/realizations/dabrowka2/21.jpg')},
        ]
      },
      {
        title: 'Pszczyna',
        mainPhoto: require('../assets/realizations/pszczyna/2.jpg'),
        photos: [
          {src: require('../assets/realizations/pszczyna/1.jpg')},
          {src: require('../assets/realizations/pszczyna/2.jpg')},
          {src: require('../assets/realizations/pszczyna/3.jpg')},
          {src: require('../assets/realizations/pszczyna/4.jpg')},
          {src: require('../assets/realizations/pszczyna/5.jpg')},
          {src: require('../assets/realizations/pszczyna/6.jpg')},
          {src: require('../assets/realizations/pszczyna/7.jpg')},
          {src: require('../assets/realizations/pszczyna/8.jpg')},
          {src: require('../assets/realizations/pszczyna/9.jpg')},
          {src: require('../assets/realizations/pszczyna/10.jpg')},
          {src: require('../assets/realizations/pszczyna/11.jpg')},
          {src: require('../assets/realizations/pszczyna/12.jpg')},
          {src: require('../assets/realizations/pszczyna/13-2.jpg')},
          {src: require('../assets/realizations/pszczyna/13-3.jpg')},
          {src: require('../assets/realizations/pszczyna/13-4.jpg')},
          {src: require('../assets/realizations/pszczyna/13.jpg')},
          {src: require('../assets/realizations/pszczyna/14.jpg')},
          {src: require('../assets/realizations/pszczyna/14a.jpg')},
          {src: require('../assets/realizations/pszczyna/15.jpg')},
          {src: require('../assets/realizations/pszczyna/15a.jpg')},
          {src: require('../assets/realizations/pszczyna/16.jpg')},
          {src: require('../assets/realizations/pszczyna/16a.jpg')},
          {src: require('../assets/realizations/pszczyna/17.jpg')},
          {src: require('../assets/realizations/pszczyna/17a.jpg')},
          {src: require('../assets/realizations/pszczyna/18.jpg')},
          {src: require('../assets/realizations/pszczyna/18a.jpg')},
          {src: require('../assets/realizations/pszczyna/19.jpg')},
          {src: require('../assets/realizations/pszczyna/19a.jpg')},
          {src: require('../assets/realizations/pszczyna/20.jpg')},
          {src: require('../assets/realizations/pszczyna/20a.jpg')},
          {src: require('../assets/realizations/pszczyna/21.jpg')},
          {src: require('../assets/realizations/pszczyna/21a.jpg')},
        ]
      },
      {
        title: 'Rybnik',
        mainPhoto: require('../assets/realizations/rybnik/14a.jpg'),
        photos: [
          {src: require('../assets/realizations/rybnik/1.jpg')},
          {src: require('../assets/realizations/rybnik/2.jpg')},
          {src: require('../assets/realizations/rybnik/2a.jpg')},
          {src: require('../assets/realizations/rybnik/3.jpg')},
          {src: require('../assets/realizations/rybnik/3a.jpg')},
          {src: require('../assets/realizations/rybnik/4.jpg')},
          {src: require('../assets/realizations/rybnik/4a.jpg')},
          {src: require('../assets/realizations/rybnik/5.jpg')},
          {src: require('../assets/realizations/rybnik/6.jpg')},
          {src: require('../assets/realizations/rybnik/7.jpg')},
          {src: require('../assets/realizations/rybnik/8.jpg')},
          {src: require('../assets/realizations/rybnik/9.jpg')},
          {src: require('../assets/realizations/rybnik/10.jpg')},
          {src: require('../assets/realizations/rybnik/11.jpg')},
          {src: require('../assets/realizations/rybnik/12.jpg')},
          {src: require('../assets/realizations/rybnik/13.jpg')},
          {src: require('../assets/realizations/rybnik/13a.jpg')},
          {src: require('../assets/realizations/rybnik/14.jpg')},
          {src: require('../assets/realizations/rybnik/14a.jpg')},
          {src: require('../assets/realizations/rybnik/15.jpg')},
          {src: require('../assets/realizations/rybnik/16.jpg')},
          {src: require('../assets/realizations/rybnik/17.jpg')},
          {src: require('../assets/realizations/rybnik/18.jpg')},
          {src: require('../assets/realizations/rybnik/19.jpg')},
        ]
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
  .home {
    font-family: 'Montserrat';
    background-color: #f7f6f2;
    &__carousel-container {
      margin-top: 74px;

      @media (min-width: 576px) {
        margin-top: 83px;
      }
      @media (min-width: 768px) {
        margin-top: 0;
      }
    }
    &__button {
      &-row {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0 40px 0;
      }
      background: #2a7d2e;
      font-size: 16px;
      padding: 10px 40px;
      border-radius: 25px;
      color: white;
      letter-spacing: 1px;
      cursor: pointer;
    }
    &__offers {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-top:10px;
      @media (min-width: 576px) {
        margin-top: -50px;
      }
      &-cards {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 10px;
        @media (min-width: 576px) {
          padding: 0 50px;
        }
        @media (min-width: 768px) {
          padding: 0;
          flex-wrap: nowrap;
        }
      }
    }
    &__about-us {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 30px;
      &-image {
        width: 100%;
        height: 350px;
        object-fit: cover;
        filter: brightness(40%);
      }
      &-body {
        position:absolute;
      }
      &-title {
        font-size: 32px;
        font-weight: 500;
        color: white;
        margin-bottom: 12px;
        text-align: center;
        @media (min-width: 576px) {
          font-size: 36px;
        }
        @media (min-width: 768px) {
          font-size: 48px;
        }
        @media (min-width: 992px) {
          font-size: 64px;
        }
      }
      &-text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: white;
        &-wrapper {
          width: 95%;
          @media (min-width: 576px) {
            width: 70%;
          }
          @media (min-width: 768px) {
            width: 50%;
          }
          @media (min-width: 992px) {
            width: 40%;
          }
        }
      }
      &--button {
        font-size: 16px;
        text-decoration: underline;
        color: white;
        line-height: 24px;
        margin-top: 8px;
        cursor: pointer;
      }
    }
    &__realizations {
      display: flex;
      flex-wrap: wrap;
      padding-top: 24px;
      @media (min-width: 576px) {
        padding: 24px 24px 0 24px;
      }
      @media (min-width: 992px) {
        padding: 32px 56px 0 56px;
      }
      @media (min-width: 1200px) {
        padding: 32px 72px 0 72px;
      }
      &-title {
        font-size: 36px;
        display: flex;
        justify-content: center;
        color: #124A2F;
        @media (min-width: 576px) {
          font-size: 48px;
        }
      }
      &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
        @media (min-width: 576px) {
          border-radius: 4px;
        }
        &-container {
          position: relative;
          margin-right: 0px;
          margin-bottom: 8px;
          width: 100%;
          height: 300px;
          cursor: pointer;
          @media (min-width: 576px) {
            height: 400px;
          }
          @media (min-width: 768px) {
            margin-right: 4px;
            margin-left: 4px;
            width: calc((100% - 24px) / 3);
            height: 250px;
          }
          @media (min-width: 992px) {
            margin-right: 4px;
            margin-left: 4px;
            width: calc((100% - 24px) / 3);
            height: 300px;
          }
          @media (min-width: 1200px) {
            height: 400px;
          }
        }
        &-text {
          position: absolute;
          top: 12px;
          margin-top: 24px;
          font-size: 16px;
          color: white;
          z-index:11;
          font-weight: bold;
          display: flex;
          align-items: center;
          padding: 8px;
          background-color: #124A2F;
          svg {
            margin-left: 8px;
          }
        }
        &-overlay {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 10;
          &-bg {
            position: absolute;
            background-color: #3E4A3C;
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
            height: 100%;
            width: 100%;
            @media (min-width: 576px) {
              border-radius: 4px;
            }
          }

          &:hover {
            .home__realizations__image-overlay-bg {
              opacity: 0.6;
            }
            .home__realizations__image-overlay-title {
              transform: scale(1);
            }
          }
          &-title {
            transition: all .7s ease;
            transform: scale(0);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            top: -15px;
            position: relative;
          }
        }
    }
  }
}
</style>
