import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 仓库里放状态数据,mutation里改变数据
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    setCount (state, b) {
      console.log('increment执行了', b)
      // state.count++
      state.count = b
    }
  },
  actions: {
    acSetCount (context) {
      let newCount = 10
      setInterval(() => {
        newCount++
        context.commit('setCount', newCount)
      }, 1000)
    }
  }
})
// 触发状态变更
// store.commit('increment')

Vue.config.productionTip = false

// 最后将仓库挂载到Vue实例上
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
