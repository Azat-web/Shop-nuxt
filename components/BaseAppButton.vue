<template>
  <div class="base__button">
    <button
      :type="type"
      class="base-button font-open-sans bold sm-size uppercase"
      :style="{ width: width, height: height, borderRadius: borderRadius }"
      :class="{
        disabled: disabled,
        blue: mode === 'blue',
        gray: mode === 'gray',
        white: mode === 'white',
        complete: mode === 'complete',
        'dark-btn': mode === 'claim' || mode === 'join',
      }"
      @click="$emit('click')"
    >
      <img v-if="img" :src="getImgUrl()" alt="button-icon" />
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseAppButton',
  props: {
    title: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isTurnOn: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: '',
    },
    type: {
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    borderRadius: {
      type: String,
    },
    mode: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  methods: {
    getImgUrl() {
      return require('../assets/images/' + this.img)
    },
  },
}
</script>

<style lang="scss" scoped>
.base__button {
  display: flex;
  align-items: center;
  button {
    border: none;
    border-radius: 8px;
    outline: none;
    img {
      width: 18px;
      height: 18px;
      vertical-align: middle;
      padding: 0 0 2px 1px;
    }
    &:hover {
      cursor: pointer;
      background-color: #e7eaef;
    }
  }
  .blue {
    background-color: #0074d4;
  }
  .gray {
    background-color: #f3f4f7;
  }
  .white {
    background-color: #ffff;
    border: 1px solid #e7eaef;
  }
}
</style>
