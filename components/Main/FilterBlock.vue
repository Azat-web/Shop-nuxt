<template>
  <div class="filter">
    <div class="filter__selects" v-for="select in selects" :key="select.id">
      <BaseAppSelect
        :styles="{ width: '281px', height: '65px' }"
        :options="selects[select.id].options"
        :title="selects[select.id].title"
        :layoutCheck="false"
        :titleCheck="true"
        mode="border"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBlock',
  data() {
    return {
      selects: [
        {
          title: 'Спинка',
          options: [
            { option: 'Сетка', id: 1 },
            { option: 'Кожа', id: 2 },
            { option: 'Текстиль', id: 3 },
          ],
          id: 0,
        },
        {
          title: 'Сидение',
          options: [
            { option: 'Сетка', id: 1 },
            { option: 'Кожа', id: 2 },
            { option: 'Текстиль', id: 3 },
          ],
          id: 1,
        },
        {
          title: 'Подголовник',
          options: [
            { option: 'С подголовником', id: 1 },
            { option: 'Без подголовника', id: 2 }
          ],
          id: 2,
        },
        {
          title: 'Подлокотник',
          options: [
            { option: 'Все', id: 2 },
            { option: 'С подлокотником', id: 1 },
            { option: 'Без подлокотника', id: 2 },
          ],
          id: 3,
        }
      ],
    }
  },
}
</script>

<style lang="scss">
.filter {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
