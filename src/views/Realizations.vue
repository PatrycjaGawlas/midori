<template>
  <div class="realizations">
    <div class="realizations__wrapper">
        <div @click="openGallery(realization)" class="realizations__image-container" 
          v-for="realization in realizations"
          :key="realization.title" >
          <img  
            :src="realization.mainPhoto" 
            class="realizations__image"
          />
          <div class="realizations__image-text">
            <div>{{realization.title}}</div>
            <BIconChevronRight font-scale="1" variant="light" class=""/>
          </div>
          <div class="realizations__image-overlay">
            <div class="realizations__image-overlay-bg"></div>
            <div class="realizations__image-overlay-title">
              <BIconArrowsAngleExpand font-scale="2" variant="light" class="realizations__image-overlay-icon"/>
            </div>
          </div>
        </div>
    </div>
    <Gallery v-if="isGalleryOpen" @onClose="closeGallery" :photos="galleryPhotos" :photo="galleryFirstPhoto" />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
export default {
  components: {
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
    }
  },
  data: () => ({
    isGalleryOpen: false,
    galleryPhotos: [],
    galleryFirstPhoto: '',
    realizations: [
      {
        title: 'Żory',
        mainPhoto: require('../assets/realizations/zory/1.jpg'),
        photos: [
          {src: require('../assets/realizations/zory/1.jpg')},
          {src: require('../assets/realizations/zory/2.jpg')},
          {src: require('../assets/realizations/zory/3.jpg')},
          {src: require('../assets/realizations/zory/4.jpg')},
          {src: require('../assets/realizations/zory/4a.jpg')},
          {src: require('../assets/realizations/zory/5.jpg')},
          {src: require('../assets/realizations/zory/5a.jpg')},
          {src: require('../assets/realizations/zory/6.jpg')},
          {src: require('../assets/realizations/zory/6a.jpg')},
          {src: require('../assets/realizations/zory/7.jpg')},
          {src: require('../assets/realizations/zory/7a.jpg')},
          {src: require('../assets/realizations/zory/8.jpg')},
          {src: require('../assets/realizations/zory/8a.jpg')},
          {src: require('../assets/realizations/zory/9.jpg')},
          {src: require('../assets/realizations/zory/10.jpg')},
          {src: require('../assets/realizations/zory/11.jpg')},
          {src: require('../assets/realizations/zory/12.jpg')}
        ]
      },
      {
        title: 'Żory II',
        mainPhoto: require('../assets/realizations/zory2/1.jpg'),
        photos: [
          {src: require('../assets/realizations/zory2/1.jpg')},
          {src: require('../assets/realizations/zory2/2.jpg')},
          {src: require('../assets/realizations/zory2/3.jpg')},
          {src: require('../assets/realizations/zory2/4.jpg')},
          {src: require('../assets/realizations/zory2/5.jpg')},
          {src: require('../assets/realizations/zory2/7.jpg')},
          {src: require('../assets/realizations/zory2/8.jpg')},
          {src: require('../assets/realizations/zory2/8a.jpg')},
          {src: require('../assets/realizations/zory2/9.jpg')},
          {src: require('../assets/realizations/zory2/9a.jpg')},
          {src: require('../assets/realizations/zory2/10.jpg')},
          {src: require('../assets/realizations/zory2/10a.jpg')},
          {src: require('../assets/realizations/zory2/11.jpg')},
          {src: require('../assets/realizations/zory2/11a.jpg')},
          {src: require('../assets/realizations/zory2/12.jpg')},
          {src: require('../assets/realizations/zory2/12a.jpg')},
          {src: require('../assets/realizations/zory2/13.jpg')},
          {src: require('../assets/realizations/zory2/14.jpg')},
          {src: require('../assets/realizations/zory2/14a.jpg')},
          {src: require('../assets/realizations/zory2/15.jpg')},
          {src: require('../assets/realizations/zory2/16.jpg')},
          {src: require('../assets/realizations/zory2/17.jpg')},
          {src: require('../assets/realizations/zory2/18.jpg')},
          {src: require('../assets/realizations/zory2/19.jpg')},
          {src: require('../assets/realizations/zory2/20.jpg')},
          {src: require('../assets/realizations/zory2/21.jpg')},
          {src: require('../assets/realizations/zory2/22.jpg')},
          {src: require('../assets/realizations/zory2/23.jpg')},
          {src: require('../assets/realizations/zory2/23a.jpg')},
          {src: require('../assets/realizations/zory2/24.jpg')},
          {src: require('../assets/realizations/zory2/25.jpg')},
          {src: require('../assets/realizations/zory2/26.jpg')},
          {src: require('../assets/realizations/zory2/27.jpg')},
          {src: require('../assets/realizations/zory2/28.jpg')},
          {src: require('../assets/realizations/zory2/29.jpg')},
          {src: require('../assets/realizations/zory2/30.jpg')},
          {src: require('../assets/realizations/zory2/31.jpg')},
          {src: require('../assets/realizations/zory2/32.jpg')},
          {src: require('../assets/realizations/zory2/33.jpg')},
          {src: require('../assets/realizations/zory2/34.jpg')},
          {src: require('../assets/realizations/zory2/35.jpg')},
          {src: require('../assets/realizations/zory2/36.jpg')},
          {src: require('../assets/realizations/zory2/37.jpg')},
          {src: require('../assets/realizations/zory2/38.jpg')},
          {src: require('../assets/realizations/zory2/39.jpg')},
          {src: require('../assets/realizations/zory2/40.jpg')},
          {src: require('../assets/realizations/zory2/41.jpg')},
          {src: require('../assets/realizations/zory2/42.jpg')},
          {src: require('../assets/realizations/zory2/43.jpg')},
          {src: require('../assets/realizations/zory2/44.jpg')},
          {src: require('../assets/realizations/zory2/45.jpg')},
          {src: require('../assets/realizations/zory2/46.jpg')},
          {src: require('../assets/realizations/zory2/47.jpg')},
          {src: require('../assets/realizations/zory2/48.jpg')},
          {src: require('../assets/realizations/zory2/49.jpg')},
          {src: require('../assets/realizations/zory2/50.jpg')},
          {src: require('../assets/realizations/zory2/51.jpg')},
          {src: require('../assets/realizations/zory2/52.jpg')},
          {src: require('../assets/realizations/zory2/53.jpg')},
          {src: require('../assets/realizations/zory2/54.jpg')},
          {src: require('../assets/realizations/zory2/55.jpg')},
          {src: require('../assets/realizations/zory2/56.jpg')},
          {src: require('../assets/realizations/zory2/57.jpg')},
          {src: require('../assets/realizations/zory2/59.jpg')},
          {src: require('../assets/realizations/zory2/61.jpg')},
          {src: require('../assets/realizations/zory2/62.jpg')},
          {src: require('../assets/realizations/zory2/63.jpg')},
        ]
      },
      {
        title: 'Żory III',
        mainPhoto: require('../assets/realizations/zory3/2.jpg'),
        photos: [
          {src: require('../assets/realizations/zory3/1.jpg')},
          {src: require('../assets/realizations/zory3/2.jpg')},
          {src: require('../assets/realizations/zory3/3.jpg')},
          {src: require('../assets/realizations/zory3/4.jpg')},
          {src: require('../assets/realizations/zory3/5.jpg')},
          {src: require('../assets/realizations/zory3/5a.jpg')},
          {src: require('../assets/realizations/zory3/6.jpg')},
          {src: require('../assets/realizations/zory3/6a.jpg')},
          {src: require('../assets/realizations/zory3/7.jpg')},
          {src: require('../assets/realizations/zory3/7a.jpg')},
          {src: require('../assets/realizations/zory3/8.jpg')},
          {src: require('../assets/realizations/zory3/10.jpg')},
          {src: require('../assets/realizations/zory3/11.jpg')},
          {src: require('../assets/realizations/zory3/12.jpg')},
          {src: require('../assets/realizations/zory3/14.jpg')},
          {src: require('../assets/realizations/zory3/14.jpg')},
          {src: require('../assets/realizations/zory3/15.jpg')},
          {src: require('../assets/realizations/zory3/16.jpg')},
          {src: require('../assets/realizations/zory3/18.jpg')},
          {src: require('../assets/realizations/zory3/19.jpg')}
        ]
      },
      {
        title: 'Czeladź',
        mainPhoto: require('../assets/realizations/czeladz/8.jpg'),
        photos: [
          {src: require('../assets/realizations/czeladz/1.jpg')},
          {src: require('../assets/realizations/czeladz/2.jpg')},
          {src: require('../assets/realizations/czeladz/3.jpg')},
          {src: require('../assets/realizations/czeladz/4.jpg')},
          {src: require('../assets/realizations/czeladz/5.jpg')},
          {src: require('../assets/realizations/czeladz/6.jpg')},
          {src: require('../assets/realizations/czeladz/7.jpg')},
          {src: require('../assets/realizations/czeladz/8.jpg')},
          {src: require('../assets/realizations/czeladz/9.jpg')},
          {src: require('../assets/realizations/czeladz/10.jpg')},
          {src: require('../assets/realizations/czeladz/11.jpg')},
          {src: require('../assets/realizations/czeladz/12.jpg')},
        ]
      },
      {
        title: 'Hotel Jastrzębie',
        mainPhoto: require('../assets/realizations/dabrowka/2a.jpg'),
        photos: [
          {src: require('../assets/realizations/dabrowka/1.jpg')},
          {src: require('../assets/realizations/dabrowka/1a.jpg')},
          {src: require('../assets/realizations/dabrowka/2.jpg')},
          {src: require('../assets/realizations/dabrowka/2a.jpg')},
          {src: require('../assets/realizations/dabrowka/3.jpg')},
          {src: require('../assets/realizations/dabrowka/4.jpg')},
          {src: require('../assets/realizations/dabrowka/5.jpg')},
          {src: require('../assets/realizations/dabrowka/6.jpg')},
        ]
      },
      {
        title: 'Hotel Jastrzębie II',
        mainPhoto: require('../assets/realizations/dabrowka2/4a.jpg'),
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
      {
        title: 'Rybnik II',
        mainPhoto: require('../assets/realizations/rybnik2/16.jpg'),
        photos: [
          {src: require('../assets/realizations/rybnik2/2.jpg')},
          {src: require('../assets/realizations/rybnik2/3.jpg')},
          {src: require('../assets/realizations/rybnik2/4.jpg')},
          {src: require('../assets/realizations/rybnik2/5.jpg')},
          {src: require('../assets/realizations/rybnik2/5a.jpg')},
          {src: require('../assets/realizations/rybnik2/6.jpg')},
          {src: require('../assets/realizations/rybnik2/6a.jpg')},
          {src: require('../assets/realizations/rybnik2/7.jpg')},
          {src: require('../assets/realizations/rybnik2/7a.jpg')},
          {src: require('../assets/realizations/rybnik2/8.jpg')},
          {src: require('../assets/realizations/rybnik2/8a.jpg')},
          {src: require('../assets/realizations/rybnik2/9.jpg')},
          {src: require('../assets/realizations/rybnik2/9a.jpg')},
          {src: require('../assets/realizations/rybnik2/10.jpg')},
          {src: require('../assets/realizations/rybnik2/10a.jpg')},
          {src: require('../assets/realizations/rybnik2/11.jpg')},
          {src: require('../assets/realizations/rybnik2/12.jpg')},
          {src: require('../assets/realizations/rybnik2/13.jpg')},
          {src: require('../assets/realizations/rybnik2/14.jpg')},
          {src: require('../assets/realizations/rybnik2/15.jpg')},
          {src: require('../assets/realizations/rybnik2/16.jpg')},
        ]
      },
      {
        title: 'Rybnik III',
        mainPhoto: require('../assets/realizations/slawikow/12a.jpg'),
        photos: [
          {src: require('../assets/realizations/slawikow/1.jpg')},
          {src: require('../assets/realizations/slawikow/2.jpg')},
          {src: require('../assets/realizations/slawikow/3.jpg')},
          {src: require('../assets/realizations/slawikow/4.jpg')},
          {src: require('../assets/realizations/slawikow/5.jpg')},
          {src: require('../assets/realizations/slawikow/6.jpg')},
          {src: require('../assets/realizations/slawikow/7.jpg')},
          {src: require('../assets/realizations/slawikow/8.jpg')},
          {src: require('../assets/realizations/slawikow/8a.jpg')},
          {src: require('../assets/realizations/slawikow/9.jpg')},
          {src: require('../assets/realizations/slawikow/9a.jpg')},
          {src: require('../assets/realizations/slawikow/11.jpg')},
          {src: require('../assets/realizations/slawikow/11a.jpg')},
          {src: require('../assets/realizations/slawikow/12.jpg')},
          {src: require('../assets/realizations/slawikow/12a.jpg')},
          {src: require('../assets/realizations/slawikow/13.jpg')},
          {src: require('../assets/realizations/slawikow/13a.jpg')},
          {src: require('../assets/realizations/slawikow/14.jpg')},
          {src: require('../assets/realizations/slawikow/14a.jpg')},
          {src: require('../assets/realizations/slawikow/15.jpg')},
          {src: require('../assets/realizations/slawikow/15a.jpg')},
          {src: require('../assets/realizations/slawikow/16.jpg')},
          {src: require('../assets/realizations/slawikow/16a.jpg')},
          {src: require('../assets/realizations/slawikow/17.jpg')},
          {src: require('../assets/realizations/slawikow/17a.jpg')},
          {src: require('../assets/realizations/slawikow/18.jpg')},
          {src: require('../assets/realizations/slawikow/18a.jpg')},
          {src: require('../assets/realizations/slawikow/19.jpg')},
          {src: require('../assets/realizations/slawikow/20.jpg')},
          {src: require('../assets/realizations/slawikow/21.jpg')},
          {src: require('../assets/realizations/slawikow/23.jpg')},
          {src: require('../assets/realizations/slawikow/24.jpg')},
          {src: require('../assets/realizations/slawikow/25.jpg')},
        ]
      },
      {
        title: 'Wodzisław',
        mainPhoto: require('../assets/realizations/wodzislaw/16a.jpg'),
        photos: [
          {src: require('../assets/realizations/wodzislaw/1.jpg')},
          {src: require('../assets/realizations/wodzislaw/2.jpg')},
          {src: require('../assets/realizations/wodzislaw/3.jpg')},
          {src: require('../assets/realizations/wodzislaw/4.jpg')},
          {src: require('../assets/realizations/wodzislaw/5.jpg')},
          {src: require('../assets/realizations/wodzislaw/5a.jpg')},
          {src: require('../assets/realizations/wodzislaw/6.jpg')},
          {src: require('../assets/realizations/wodzislaw/6a.jpg')},
          {src: require('../assets/realizations/wodzislaw/7.jpg')},
          {src: require('../assets/realizations/wodzislaw/7a.jpg')},
          {src: require('../assets/realizations/wodzislaw/8.jpg')},
          {src: require('../assets/realizations/wodzislaw/8a.jpg')},
          {src: require('../assets/realizations/wodzislaw/9.jpg')},
          {src: require('../assets/realizations/wodzislaw/10.jpg')},
          {src: require('../assets/realizations/wodzislaw/11.jpg')},
          {src: require('../assets/realizations/wodzislaw/12.jpg')},
          {src: require('../assets/realizations/wodzislaw/13.jpg')},
          {src: require('../assets/realizations/wodzislaw/14.jpg')},
          {src: require('../assets/realizations/wodzislaw/15.jpg')},
          {src: require('../assets/realizations/wodzislaw/16.jpg')},
          {src: require('../assets/realizations/wodzislaw/16a.jpg')},
          {src: require('../assets/realizations/wodzislaw/17.jpg')},
          {src: require('../assets/realizations/wodzislaw/18.jpg')},
          {src: require('../assets/realizations/wodzislaw/18a.jpg')},
          {src: require('../assets/realizations/wodzislaw/21.jpg')}
        ]
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.realizations {
  font-family: 'Montserrat';
  margin-top: 74px;
  @media (min-width: 576px) {
    margin-top: 83px;
  }
  @media (min-width: 768px) {
    margin-top: 108px;
  }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 576px) {
      padding: 24px;
    }
    @media (min-width: 992px) {
      padding: 32px 56px;
    }
    @media (min-width: 1200px) {
       padding: 32px 72px;
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
        width: calc((100% - 16px) / 2);
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
        .realizations__image-overlay-bg {
          opacity: 0.6;
        }
        .realizations__image-overlay-title {
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
</style>