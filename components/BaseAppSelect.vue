<template>
  <div class="base-select">
    <img
      src="../assets/images/country.png"
      alt="country-logo"
      v-if="layoutCheck"
    />
    <div class="title-select" v-if="titleCheck">{{ title }}</div>
    <select
      class="select"
      :style="styles"
      :class="{
        border: mode === 'border',
      }"
      v-model="selectedValue"
      @change="changeOptions"
    >
      <option v-for="(option, index) in options" :key="option.id" :value="index+1">
        {{ option.option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseAppSelect',
  data() {
    return {
      selectedValue: 1
    }
  },
  props: {
    styles: {
      type: Object,
    },
    options: {
      type: Array,
    },
    selects: {
      type: Array,
    },
    layoutCheck: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    titleCheck: {
      type: Boolean,
    },
    mode: {
      type: String,
    },
  },
  methods: {
    changeOptions () {
      this.$emit('changeOption', this.selectedValue)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.base-select {
  display: flex;
  align-items: center;
  padding: 0 10px 2px 10px;
  position: relative;
  .title-select {
    font-size: 11px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    position: absolute;
    color: #959AAE;
    //top: -9px;
    bottom: 59px;
    left: 30px;
    background-color: #ffffff;
    padding: 0 10px 0 10px;
  }
  img {
    width: 12px;
    height: 12px;
  }
  .select {
    font-size: 16px;
    border: none;
    padding-left: 2px;
    color: #2b3350;
    &:focus,
    &:hover {
      border: none;
      outline: none;
      border: transparent;
      cursor: pointer;
      color: #2b3350;
    }
  }
  option {
    &:hover {
      border: none;
      outline: none;
      border: transparent;
      cursor: pointer;
    }
  }

  .border {
    border: 1px solid #e7eaef;
    border-radius: 8px;
    &:hover,
    :focus {
      border: 1px solid #e7eaef;
    }
  }
}
</style>
