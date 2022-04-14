<template>
  <div class="container__logo" @click="goToPage">
    <img :style="width" src="../assets/images/logo.png" alt="logo">
  </div>
</template>

<script>
export default {
  name: "BaseAppLogo",
  props: {
    width: {
      type: Object,
      required: true
    },
    /*height: {
      type: String,
      required: true
    }*/
  },
  methods: {
    goToPage () {
      this.$router.push('/')
    }
  }

}
</script>

<style lang="scss">
 .container__logo {
    display: flex;
    justify-content: flex-start;
 }


</style>