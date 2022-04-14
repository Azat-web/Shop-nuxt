<template>
  <div class="wrapper__basket">
    <div class="wrapper__title">Ваш заказ</div>
    <div class="basket__items">
      <div class="basket__item">
        <div class="basket__img">
          <img src="../../assets/images/catalog/2.png" alt="chair" />
        </div>
        <div class="basket__name">
          <div class="basket__title">Кресло Самураи</div>
          <div class="basket__description">
            Характеристики, цвет, механизм и прочее Артикул: 266-460
          </div>
        </div>
        <div class="basket__amounts">
          <BaseAppButton
            width="44px"
            height="44px"
            borderRadius="50%"
            img="minus.png"
            mode="white"
          />
          <div class="basket__amount">1</div>
          <BaseAppButton
            width="44px"
            height="44px"
            borderRadius="50%"
            img="plus.png"
            mode="white"
          />
        </div>
        <div class="basket__prices">
          <div class="basket__price">23000</div>
          <div class="basket__price">27000</div>
        </div>
        <div class="basket__delete">
          <BaseAppButton
            width="44px"
            height="44px"
            borderRadius="50%"
            img="delete.png"
            mode="white"
          />
        </div>
      </div>
      <div class="basket__total">Итого: 102000 тысячи</div>
      <MainInputBlock />
      <MainRadioBlock />
      <div class="basket__ordering">
        <BaseAppButton
          width="294px"
          height="80px"
          borderRadius="8px"
          mode="blue"
          title="Оформить заказ"
          img="basket.png"
        />
        <div class="basket__ordering__rules">
          Нажимая «Оформить заказ», вы даете согласие на обработку персональных
          данных и соглашаетесь с политикой конфиденциальности.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wrapper__basket {
  max-width: 1200px;
  margin: 0 auto;
  color: #2b3350;
  .wrapper__title {
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    padding: 26px 0 29px 0;
  }

  .basket__items {
    max-width: 850px;
    .basket__item {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 0.7fr 3.5fr 1fr 0.8fr 1fr;
      gap: 10px 20px;
      border-bottom: 1px solid #f3f4f7;
      padding-bottom: 20px;
      .basket__img {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 107px;
        img {
          width: 107px;
          height: 130px;
        }
      }
      .basket__name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .basket__title {
          font-size: 20px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: left;
          padding: 0 0 5px 0;
        }
        .basket__description {
          font-size: 16px;
          font-weight: 400;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          color: #959aae;
        }
      }
      .basket__amounts {
        display: flex;
        justify-content: center;
        align-items: center;
        .basket__amount {
          font-size: 22px;
          font-weight: 400;
          line-height: 31px;
          letter-spacing: 0em;
          text-align: center;
          padding: 0 12px 0 12px;
        }
      }
      .basket__prices {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
        .basket__price {
          letter-spacing: -0.05em;
          &:first-child {
            font-size: 22px;
            font-weight: 700;
            line-height: 31px;
          }
          &:last-child {
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            position: relative;
            &::before {
              content: '';
              border-bottom: 3px solid #fb0808;
              position: absolute;
              width: 100%;
              height: 50%;
              transform: rotate(-8deg);
              position: absolute;
            }
          }
        }
      }
      .basket__delete {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .basket__total {
      font-size: 26px;
      font-weight: 900;
      line-height: 36px;
      letter-spacing: -0.05em;
      text-align: right;
      padding: 30px 0 61px 0;
    }
    .basket__ordering {
      display: flex;
      padding: 83px 0 0 0;
      max-width: 750px;
      margin: 0 auto;
      &__rules {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 22px;
        color: #959AAE;
;
      }
    }
  }
}
</style>
