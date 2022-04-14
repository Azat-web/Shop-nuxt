<template>
  <div class="about">
    <div class="about__items" v-for="item in items" :key="item.id">
      <div class="about__item">
        <img :src="getImgUrl(item.img)" alt="icon" class="about__img" />
        <div class="about__title"><span v-html="item.title"></span></div>
        <div class="about__link">{{ item.link }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      items: [
        {
          img: 'delivery.png',
          title: '<b>Бесплатная доставка</b> по Москве и Санкт-Петербургу',
          link: 'Как получить?',
          id: 1,
        },
        {
          img: 'discount.png',
          title: '<b>Индивидуальные скидки</b> при заказе от 3 шт.',
          link: 'Смотреть условия',
          id: 2,
        },
        {
          img: 'ur.png',
          title: 'Для юридических лиц действуют <b>особые условия</b>',
          link: 'Узнать подробнее',
          id: 3,
        },
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/images/' + pic)
    },
  },
  computed: {
  }
}
</script>

<style lang="scss">
.about {
  max-width: 1200px;
  padding-top: 100px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  &__items {
      max-width: 300px;
    .about__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 100%;
      .about__img {
        width: 100px;
        height: 100px;
      }
      .about__title {
       text-align: center;
       font-weight: 500;
       font-size: 21px;
       line-height: 33px;
       padding: 35px 0 13px 0
      }
      .about__link {
        font-family: 'Manrope', sans-serif;
        font-size: 15px;
      }
    }
  }
}
</style>
