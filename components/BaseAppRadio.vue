<template>
  <div class="base-radio">
    <form class="form__radio">
      <label
        v-for="radioItem in radioItems"
        :key="radioItem.id"
        class="label__radio"
      >
        <input type="radio" name="question" class="input__radio" />
        <span class="radio__block">
          <span class="radio__body">{{ radioItem.body }}</span>
          <span class="radio__description">{{ radioItem.description }}</span>
        </span>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BaseAppRadio',
  data() {
    return {
      radioItems: [
        {
          id: 1,
          body: 'Самовывоз',
          description: 'Краснобогатырская , д. 6 строение 5 - БЦ «ВИЛЛА-РИВА»',
        },
        {
          id: 2,
          body: 'Доставка курьером',
          description: 'Стоимость — 750 рублей, от 3 дней',
        },
        {
          id: 3,
          body: 'Транспортной компании',
          description:
            'По всей стране, услуги ТК оплачиваются отдельно при получении',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.base-radio {
  .form__radio {
    display: flex;
    flex-direction: column;
    .label__radio {
      height: 82px;
      width: 749px;
      border-radius: 8px;
      border: 1px solid #e7eaef;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      &:hover {
        cursor: pointer;
      }
      .input__radio {
        display: block;
        margin: 0 26px 0 24px;
      }

      .radio__block {
        display: flex;
        flex-direction: column;
        .radio__body {
          display: block;
          font-size: 18px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: 0em;
        }
        .radio__description {
          display: block;
          font-size: 16px;
          font-weight: 400;
          line-height: 21px;
          letter-spacing: 0em;
          color: #959AAE;
        }
      }
    }
  }
}
</style>
