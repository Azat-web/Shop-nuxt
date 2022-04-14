<template>
  <div class="wrapper___layout">
    <div class="header">
      <div class="header__layout">
        <div class="header__container">
          <BaseAppLogo :width="{ width: '180px' }" />
          <BaseAppInput placeholder="Название модели или артикул" :imageCheck="true"/>
          <BaseAppPhone :width="{ width: '19px' }" />
          <BaseAppButton
            title="Заказать звонок"
            width="188px"
            height="51px"
            borderRadius="8px"
            mode="gray"
          />
        </div>
        <div class="navigation">
          <div class="navigation__block">
            <NavigationItems />
          </div>
          <div class="navigation__block">
            <BaseAppSelect
              :styles="{ minWidth: '55px' }"
              :options="options"
              :layoutCheck="true"
              @changeOption="changeCity"
            />
            <NavigationBasket />
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
    <div class="footer">
      <div class="footer__items">
        <div class="footer__item">
          <div class="footer__logo">
            <BaseAppLogo :width="{ width: '180px' }" />
          </div>
          <div class="footer__mark">
            Политика конфеденциальности 2022 
            &#174 Все права защищены
          </div>
        </div>
        <div class="footer__item">
          <div class="footer__link">О продукте</div>
          <div class="footer__link">Отзывы</div>
          <div class="footer__link">Доставка и оплата</div>
          <div class="footer__link">Контакты</div>
        </div>
        <div class="footer__item">
          <div class="footer__text">
            <BaseAppPhone :width="{ width: '19px' }" />
          </div>
          <div class="footer__text">zakaz@kresla-samurai.ru</div>
          <div class="footer__text">
            ул. Красного курсанта д.25, лит.в, оф. 114, бизнес-центр "RED CADET"
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'default',
  data() {
    return {
      options: [
        { option: 'Москва', id: 1 },
        { option: 'Санкт-Петербург', id: 2 },
        { option: 'Екатеринбург', id: 3 },
        { option: 'Уфа', id: 4 },
      ],
    }
  },
  methods: {
    ...mapActions({
      changeIsCities: "сitiesSelect/changeIsCity"
    }),
    changeCity (value) {
      this.changeIsCities(value)
    }
  }
}
</script>

<style lang="scss">
.header {
  padding-top: 17px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  color: #2b3350;
  font-weight: 500;
  font-size: 16px;
  &__layout {
    max-width: 1200px;
    margin: 0 auto;
  }
  &__container {
    display: flex;
    justify-content: space-between;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 0 0;
    &__block {
      &:first-child {
        width: 100%;
      }
      &:last-child {
        display: flex;
      }
    }
  }
}

.footer {
  margin-top: 150px;
  background-color: #191e32;
  width: 100%;
  color: #e7eaef;

  &__items {
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 51px 0 90px 0;
    .footer__item {
      .footer__logo {
        margin-bottom: 15px;
      }
      &:first-child {
        max-width: 221px;
        font-family: 'Inter', sans-serif;;

        color: #959aae;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
      }
      &:nth-child(2) {
        font-family: 'Manrope', sans-serif;
        font-size: 17px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        height: 100%;
      }
      &:last-child() {
        font-family: 'Inter', sans-serif;;
        font-size: 17px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
      }
      .footer__link {
        padding-bottom: 10px;
      }
      .footer__text {
        padding-bottom: 17px;
      }
    }
  }
}
</style>
