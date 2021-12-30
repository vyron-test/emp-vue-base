<template>
  <div id="app">
    <HelloWorld />
    <CompositionApi />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CompositionApi from './components/compositionApi.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CompositionApi
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
