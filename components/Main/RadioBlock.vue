<template>
  <div class="radio__wrapper">
    <div class="radio__container">
      <div class="radio__delivery">
        <h1 class="radio__title">Доставка</h1>
        <BaseAppRadio />
      </div>
    </div>
    <div class="radio__container">
      <div class="radio__payment">
        <h1 class="radio__title">Оплата</h1>
        <BaseAppRadio />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.radio__container {
  margin-top: 32px;
  padding: 40px 50px 60px 66px;
  border: 1px solid #f3f4f7;
  border-radius: 8px;
  box-shadow: 0px 20px 52px -8px #00000026;
}
</style>
