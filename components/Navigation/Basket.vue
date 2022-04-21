<template>
  <div class="basket" @click="goToPage">
    <div class="basket__item">
      <img src="../../assets/images/basket.png" alt="basket" />
    </div>
    <div class="basket__item">
      <span> Моя корзина </span>
    </div>
    <div class="basket__item">
      <div>{{ amountChair }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Basket',
  computed: {
    ...mapGetters({
      chairItems: 'card/getIsChairs'
    }),
    amountChair () {
      return this.chairItems.length
    }
  },
  methods: {
    goToPage () {
      this.$router.push('/basket')
    }
  }
}
</script>

<style lang="scss">
.basket {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 170px;
  cursor: pointer;
 &__item {
  &:first-child {
    img {
      height: 18px;
      width: 18px;
    }
  }
  &:nth-child(2) {
    margin-left: 9px;
  }
  &:last-child {
    width: 24px;
    height: 16px;
    background: #0074d4;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
  }
}
}
</style>
