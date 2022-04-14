<template>
  <div>
    <div class="nav__links">
      <div class="nav__link" v-for="link in links" :key="link.id">
        <div class="burger__catalog">
          <div class="burger__catalog__item" v-if="link.id === 1"></div>
          <div class="burger__catalog__item" v-if="link.id === 1"></div>
          <div class="burger__catalog__item" v-if="link.id === 1"></div>
        </div>
        <div>
          <span> {{ link.name }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationItems',
  data() {
    return {
      links: [
        { name: 'Каталог', id: 1 },
        { name: 'О продукте', id: 2 },
        { name: 'Отзывы', id: 3 },
        { name: 'Доставка и оплата', id: 4 },
        { name: 'Контакты', id: 5 },
      ],
    }
  },
}
</script>

<style lang="scss">
.nav__links {
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 700px;
  .nav__link {
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
     width: 158px;
    }
    .burger__catalog {
      height: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 14px;
    .burger__catalog__item {
      background: #ffff;
      height: 1px;
      border-radius: 1px;
      
      &:first-child {
        width: 14px;
      }
      &:nth-child(2) {
        width: 18px;
      }
      &:last-child {
        width: 9px;
      }
    }
    }
    &:first-child {
      background: #2b3350;
      color: #ffff;
      border-radius: 0px 12px 12px 12px;
    }
  }
}
</style>
