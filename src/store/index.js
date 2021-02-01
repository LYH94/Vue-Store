import Vue from 'vue'
import Vuex from 'vuex'
import Persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: '',
      admin: ''
    },
    products: {
      name: '',
      price: '',
      quantity: '',
      description: '',
      type: '',
      file: ''
    },
    orders: {
      payName: '',
      phone: '',
      email: '',
      address: '',
      note: ''
    },
    items: []
  },
  mutations: {
    logout (state) {
      state.user.name = ''
      state.user.id = ''
      state.user.admin = ''
    },
    login (state, data) {
      state.user.name = data.account
      state.user.id = data._id
      state.user.admin = data.admin
    },
    addCart (state, data) {
      const idx = state.items.findIndex(item => {
        return item.name === data.name
      })
      if (idx === -1) {
        state.items.push(data)
      } else {
        state.items[idx].count += 1
      }
    },
    editCart (state, index) {
      state.items.edit = true
    },
    delCart (state, index) {
      state.items.splice(index, 1)
    },
    selectShipping (state, data) {
      state.shipping = data
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    items (state) {
      return state.items
    }
  },
  plugins: [Persistedstate()]
})
