<template>
  <div class="container__input">
      <input
      class="base__input"
      :placeholder="placeholder"
      :style="{width: width, height: height}"
      v-model.trim="value"
      @input="handleInput"
    />
    <img v-if="imageCheck" src="../assets/images/glass.jpg" alt="" class="search__icon">
  </div>
</template>

<script>
export default {
    name: "BaseAppInput",
    props: {
      placeholder: {
        type: String
      },
      imageCheck: {
        type: Boolean
      },
      width: {
        type: String
      },
      height: {
        type: String
      },
    },
    data() {
    return {
      value: "",
    };
  },
  watch: {
    parentValue: function (val) {
      this.value = val;
    },
  },
  methods: {
    handleInput() {
      this.$emit("input", this.value);
    },
  },
}
</script>

<style lang="scss">

.container__input {
  display: inline-flex;
  align-items: center;
  position: relative;
  .base__input {
   color: #F7F7F8;
   min-width: 510px;
   height: 51px;
   border-radius: 8px;
   border: 0; 
   background-color:#F7F7F8;
   &::placeholder {
     padding-left: 50px;
   }
  }
  .search__icon {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px
}
  }

</style>