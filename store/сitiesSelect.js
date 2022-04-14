export const state = () => ({
    city: 1,
  })
  
export const getters = {
    getIsCity: (state) => state.city,
  }
  
  export const mutations = {
    setIsCity(state, city) {
      state.city = city
    },
  }
  
  export const actions = {
    changeIsCity({ commit }, city) {
      commit('setIsCity', city)
    },
  }