<template>
  <div class="input__block__container">
    <h1 class="input__block__title">Ваши данные</h1>
    <p class="input__block__description">
      Заполните обязаельно все поля, чтобы мы с вами могли связаться
    </p>
    <div class="input__block__items">
      <div
        class="input__block__item"
        v-for="placeholder in placeholders"
        :key="placeholder.id"
      >
        <BaseAppInput
          :placeholder="placeholder.text"
          :imageCheck="false"
          width="528px"
          height="63px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputBlock',
  data() {
    return {
      placeholders: [
        {
          id: 1,
          text: 'Ваше имя',
        },
        {
          id: 2,
          text: 'Электронная почта',
        },
        {
          id: 3,
          text: 'Телефон',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.input__block__container {
  padding: 40px 50px 60px 66px;
  border: 1px solid #f3f4f7;
  border-radius: 8px;
  box-shadow: 0px 20px 52px -8px #00000026;
  .input__block__title {
    font-size: 26px;
    font-weight: 900;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
  .input__block__description {
    color: #959AAE;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    display: block;
    padding-bottom: 10px;
  }

  .input__block__items {
    display: flex;
    flex-direction: column;
    min-height: 221px;
    justify-content: space-between;
  }
}
</style>
