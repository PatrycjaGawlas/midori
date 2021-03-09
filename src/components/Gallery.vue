<template>
  <div class="gallery">
    <BIconX @click="closeGallery" font-scale="3" variant="light" class="gallery__close"/>
    <BIconChevronLeft @click="previousPhoto" font-scale="3" variant="light" class="gallery__chevron gallery__chevron--left"/>
    <img :src="currentPhoto" class="gallery__image"/>
    <BIconChevronRight @click="nextPhoto" font-scale="3" variant="light" class="gallery__chevron gallery__chevron--right"/>
  </div>
</template>

<script>
import { BIconChevronLeft, BIconChevronRight } from 'bootstrap-vue'
export default {
  components: {
    BIconChevronLeft, BIconChevronRight
  },
  props: {
    photos: {
      type: Array,
      required: true
    },
    photo: {
      type: String,
      required: false
    }
  },
  data: () => ({
    currentPhoto: ''
  }),
  methods: {
    nextPhoto() {
      if (this.currentPhotoIndex === this.photos.length - 1 ) {
        this.currentPhoto = this.photos[0].src
      } else {
        this.currentPhoto = this.photos[this.currentPhotoIndex+1].src
      }
    },
    previousPhoto() {
      if (this.currentPhotoIndex === 0) {
        this.currentPhoto = this.photos[this.photos.length - 1].src
      } else {
        this.currentPhoto = this.photos[this.currentPhotoIndex - 1].src
      }
    },
    closeGallery() {
      this.$emit('onClose')
    }
  },
  computed: {
    currentPhotoIndex() {
      return this.photos.findIndex((photo) => {
        return photo.src === this.currentPhoto
      })
    }
  },
  mounted() {
    this.currentPhoto = this.photo || ''
  }
}
</script>

<style lang="scss">
.gallery {
  z-index: 99;
  background: rgba(black, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__image {
    position: relative;
    max-height: 90vh;
    max-width: 100%;
    box-shadow: -1px 5px 9px 1px rgba(0, 0, 0, 0.3);
  }
  &__close {
    position: absolute;
    top: 10px;
    right: 24px;
    z-index: 100;
  }
  &__chevron {
    opacity: 0.4;
    position: absolute;
    z-index: 100;
    &--left {
      left: 0
    }
    &--right {
      right: 15px;
    }
  }
}

</style>