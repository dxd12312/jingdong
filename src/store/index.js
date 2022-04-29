import Vuex from 'vuex'
const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (e) {
    return {}
  }
}

export default Vuex.createStore({
  state: {
    cartList: getLocalCartList()
  },
  getters: {
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productIinfo } = payload
      const shopCartList = state.cartList[shopId] || {
        productList: {}
      }
      let product = shopCartList.productList[productId]
      if (!product) {
        productIinfo.count = 0
        product = productIinfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      shopCartList.productList[productId] = product
      state.cartList[shopId] = shopCartList
      setLocalCartList(state)
    },
    changeShop (state, shopId) {
      const shopCartList = state.cartList[shopId] || {
        productList: {}
      }
      state.cartList[shopId] = shopCartList
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
