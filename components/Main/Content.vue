<template>
  <div class="content">
    <div class="content__container">
      <div class="content__title">
        <span class="content__text">
          Кресла Samurai на выгодных условиях по всей стране
        </span>
        <img src="../../assets/images/flag.png" alt="flag" />
        <p>
          Здесь вам не придется покупать товар в слепую — проведите тест-драйв перед покупкой
        </p>
        <BaseAppButton title="Запись на тест драйв" width="297px" height="78px" borderRadius="8px" mode="blue" />
      </div>
      <div class="content__images">
        <img
          src="../../assets/images/armchair2.png"
          alt="armhair"
          class="content__img"
        />
        <img
          src="../../assets/images/armchair2.png"
          alt="armhair"
          class="content__img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.content {
  margin-top: 27px;
  background: url('../../assets/images/content.jpg') no-repeat;
  background-position: 45% 65%;
  width: 100%;
  height: 641px;
  color:#2B3350;
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    .content__title {
      .content__text {
        font-size: 52px;
        font-weight: 900;
      }
      img {
        width: 80px;
        height: 52px;
      }
      p {
          font-size: 21px;
          padding-bottom: 32px;
      }
    }
    .content__images {
      display: flex;
      justify-content: center;
      align-items: center;
      .content__img {
        &:first-child {
          margin-top: 40px;
          width: 530px;
          height: 580px;
        }
        &:last-child {
          width: 318px;
          height: 414px;
          opacity: 0.2;
          transform: scale(-1, 1);
          margin-top: 80px;
          margin-left: -150px;
        }
      }
    }
  }
}
</style>
