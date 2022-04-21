export const state = () => ({
  chairs: [],
})

export const getters = {
  getIsChairs: (state) => state.chairs,
}

export const mutations = {
  setIsChairs(state, chair) {
    if (state.chairs.length === 0) {
      state.chairs.push(chair)
    } else {
      let checkAmount = false
      state.chairs.forEach((item) => {
        if (item.id === chair.id) {
          item.amount++
          checkAmount = true
        }
      })
      if (!checkAmount) state.chairs.push(chair)
    }
  },
  setIsAmountPlus(state, amount) {
    let { id, plusOrMinus } = amount
    state.chairs.forEach((item, index) => {
      if (item.id === id && item.amount) {
        if (plusOrMinus) {
          item.amount++
        } else {
          item.amount--
        }
      }
      if (item.id === id && !item.amount) {
        state.chairs.splice(index, 1)
      }
    })
  },
  setDeleteChair(state, id) {
    state.chairs.forEach((item, index) => {
      if (item.id === id) {
        state.chairs.splice(index, 1)
      }
    })
  },
}

export const actions = {
  changeIsChairs({ commit }, chair) {
    commit('setIsChairs', chair)
  },
  changeIsAmount({ commit }, amount) {
    commit('setIsAmountPlus', amount)
  },
  deleteChair({ commit }, id) {
    commit('setDeleteChair', id)
  },
}
