<template>
  <div id="app">
    {{this.$store.state.count}}
    {{count}}
    <child></child>
    <button @click="setCount">按钮</button>
    <button @click="acSetCount">按钮2</button>
  </div>
</template>

<script>
import Child from './views/child'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  components: {
    Child
  },
  computed: {
    ...mapState(['count'])
    // 上面的用法和下面的一样,就是下面的代码较多
    // count () {
    //   return this.$store.state.count
    // }
  },
  methods: {
    // setCount () {
    //   this.$store.commit('setCount', 100)
    // }
    // 这里方法和上面的是一样的,触发mutions中的setCount方法
    ...mapMutations(['setCount']),
    ...mapActions(['acSetCount'])
  }
}
</script>

<style lang="less">
</style>
