<template>
  <div class="chairs">
    <div class="chairs__container">
      <div
        class="chairs__block"
        v-for="(chair, index) in chairs"
        :key="chair.id"
      >
        <div
          class="chair"
          @mouseover="addBorder(index)"
          @mouseout="active = -1"
          :class="active == index ? 'border' : ''"
        >
          <div class="chairs__img">
            <img :src="getImgUrl(chair.img)" alt="chair" />
          </div>
          <div class="chairs__name">{{ chair.name }}</div>
          <div class="chairs__price">{{ chair.price }}</div>
          <div class="chairs__outprice">
            <span class="outprice__text">{{ chair.outPrice }}</span>
          </div>
          <div class="chairs__button">
            <BaseAppButton
              width="236px"
              height="62px"
              borderRadius="8px"
              title="Добавить в корзину"
              mode="blue"
              @click="addToCard(chair.id)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="catalog__button">
      <BaseAppButton width="100%" height="73px" borderRadius="8px" title="Показать все" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ChairsBlock',
  data() {
    return {
      buttonCheck: false,
      borderCheck: false,
      active: -1,
      chairs: [
        {
          img: '1.png',
          name: 'Samurai KL-100 Темно-коричневый',
          price: 23000,
          outPrice: 27000,
          back: 'leather',
          seat: 'leather',
          headrest: true,
          armrest: true,
          id: 1,          
          amount: 1
        },
        {
          img: '2.png',
          name: 'Samurai KL-101 Темно-коричневый',
          price: 19000,
          outPrice: 27000,
          back: 'grid',
          seat: 'leather',
          headrest: true,
          armrest: true,
          id: 2,
          amount: 1
        },
        {
          img: '3.jpg',
          name: 'Samurai KL-102 Темно-коричневый',
          price: 17000,
          outPrice: 27000,
          back: 'grid',
          seat: 'textile',
          headrest: false,
          armrest: false,
          id: 3,
          amount: 1
        },
        {
          img: '4.jpg',
          name: 'Samurai KL-103 Темно-коричневый',
          price: 13000,
          outPrice: 27000,
          back: 'leather',
          seat: 'leather',
          headrest: false,
          armrest: false,
          id: 4,
          amount: 1
        },
        {
          img: '5.jpg',
          name: 'Samurai KL-104 Темно-коричневый',
          price: 15000,
          outPrice: 27000,
          back: 'leather',
          seat: 'leather',
          headrest: false,
          armrest: false,
          id: 5,
          amount: 1
        },
        {
          img: '6.jpg',
          name: 'Samurai KL-105 Темно-коричневый',
          price: 16000,
          outPrice: 27000,
          back: 'grid',
          seat: 'leather',
          headrest: true,
          armrest: true,
          id: 6,
          amount: 1
        },
        {
          img: '7.jpg',
          name: 'Samurai KL-106 Темно-коричневый',
          price: 14000,
          outPrice: 27000,
          back: 'grid',
          seat: 'textile',
          headrest: true,
          armrest: true,
          id: 7,
          amount: 1
        },
        {
          img: '8.jpg',
          name: 'Samurai KL-107 Темно-коричневый',
          price: 22000,
          outPrice: 27000,
          back: 'textile',
          seat: 'textile',
          headrest: false,
          armrest: false,
          id: 8,
          amount: 1
        },
        {
          img: '9.jpg',
          name: 'Samurai KL-106 Темно-коричневый',
          price: 14000,
          outPrice: 27000,
          back: 'leather',
          seat: 'leather',
          headrest: false,
          armrest: true,
          id: 9,
          amount: 1
        },
        {
          img: '10.jpg',
          name: 'Samurai KL-107 Темно-коричневый',
          price: 22000,
          outPrice: 27000,
          back: 'leather',
          seat: 'leather',
          headrest: true,
          armrest: true,
          id: 10,
          amount: 1
        },
      ],
    }
  },
  methods: {
    ...mapActions({
      addToChair: "card/changeIsChairs"
    }),
    getImgUrl(pic) {
      return require('../../assets/images/catalog/' + pic)
    },
    addBorder(index) {
      this.active = index
    },
    addToCard (id) {
      const a = this.chairs.filter(item => {
        if(item.id === id) {
          return item
        } })
      this.addToChair(...a)
    }
  },
}
</script>

<style lang="scss">
.chairs {
  max-width: 1200px;
  margin: 0 auto;
  &__container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
    .chairs__block {
      text-align: center;
      margin: 0 auto;
      padding-top: 82px;
      max-width: 278px;
      .chair {
        .chairs__img {
          padding: 23px 0 0 0;
          img {
            width: 100%;
            height: 328px;
          }
        }
        .chairs__name {
          padding-top: 51px;
          max-width: 260px;
          text-align: center;
          line-height: 26px;
          font-size: 20px;
          font-weight: 400;
        }
        .chairs__price {
          padding: 14px 0 14px 0;
          font-size: 28px;
          font-weight: 900;
          line-height: 39px;
          letter-spacing: -0.05em;
          text-align: center;
        }
        .chairs__outprice {
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          text-align: center;
          .outprice__text {
            position: relative;
            &::before {
              content: '';
              border-bottom: 3px solid #fb0808;
              position: absolute;
              width: 100%;
              height: 50%;
              transform: rotate(-8deg);
              position: absolute;
            }
          }
        }
        .chairs__button {
          padding: 22px 0 47px 0;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
  .catalog__button {
    padding-top: 70px;
  }
  .border {
    border: 2px solid #f3f4f7;
    border-radius: 25px;
    margin: -2px;
  }
}
</style>
