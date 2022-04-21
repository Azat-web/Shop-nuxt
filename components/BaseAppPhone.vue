<template>
  <div class="container__phone">
    <div class="phone__icon">
      <img :style="width" src="../assets/images/phone.svg" alt="phone number" />
    </div>
    <div class="phone__number">{{ cityName }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BaseAppPhone',
  data() {
    return {
      phoneNumbers: [
        { id: 1, number: '+7 495 221-06-75' },
        { id: 2, number: '+7 812 221-06-75' },
        { id: 3, number: '+7 343 221-06-75' },
        { id: 4, number: '+7 347 221-06-75' },
      ],
    }
  },
  props: {
    width: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getIsCity: 'сitiesSelect/getIsCity',
    }),
    cityName () {
      return this.phoneNumbers[this.getIsCity - 1].number
    }
  }
}
</script>

<style lang="scss">
.container__phone {
  display: flex;
  align-items: center;
  .phone__number {
    font-size: 19px;
    padding-left: 4px;
  }
}
</style>
