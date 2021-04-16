<template>
  <div class="offer-item">
    <div>
    <img class="offer-item__image" :src="image"/>
    </div>
    <div class="offer-item__title">{{offer.title}}</div>
    <div>Wiecej
        <BIconChevronRight font-scale="1" variant="dark" />
    </div>
  </div>
</template>

<script>
export default {
    props: {
      offer: {
        required: true,
        type: Object
      }
    },
    computed: {
        image() {
            return require(`../assets/icons/${this.offer.image}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    .offer-item {
        cursor: pointer;
        color: #124A2F;
        font-family: 'Montserrat';
        width: 100%;
        margin-right: 0;
        margin-bottom: 10px;
        border: 1px solid #2a7d2e;
        border-radius: 4px;
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        font-size: 12px;
        &:last-of-type {
          margin-right: 0;
          margin-bottom: 0;
        }
        &:first-of-type {
          @media (min-width: 768px) {
            margin-bottom: 0px;
          }
        }
        &:nth-of-type(2) {
          margin-right: 0;
          margin-bottom: 10px;
          @media (min-width: 768px) {
            margin-right: 10px;
            margin-bottom: 0;
          }
        }
        &:nth-of-type(3) {
          @media (min-width: 576px) {
            margin-bottom: 0;
          }
        }
        @media (min-width: 576px) {
          margin-right: 10px;
          padding: 30px 20px;
          width: calc((100% - 10px) / 2);
          max-width: 250px;
        }
        @media (min-width: 768px) {
          padding: 30px 20px;
          width: 200px;
        }
        @media (min-width: 992px) {
          padding: 40px 30px;
          width: 250px;
        }
        &__image {
          height: 36px;
          width: 36px;
          margin-bottom: 12px;
          @media (min-width: 576px) {
            height: 42px;
            width: 42px;
            margin-bottom: 12px;
          }
          @media (min-width: 768px) {
            margin-bottom: 12px;
            height: 48px;
            width: 48px;
          }
          @media (min-width: 992px) {
            margin-bottom: 16px;
            height: 64px;
            width: 64px;
          }
        }
        &__title {
          font-size: 16px;
          margin-bottom: 12px;
          @media (min-width: 576px) {
            font-size: 18px;
            margin-bottom: 12px;
          }
          @media (min-width: 768px) {
            font-size: 20px;
            margin-bottom: 12px;
          }
          @media (min-width: 992px) {
            margin-bottom: 16px;
            font-size: 24px;
          }
        }
    }
</style>