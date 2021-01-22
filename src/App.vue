<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <p>change text xx {{txt}}</p>
    <button :style="{
      color
    }" @click="onHandler">change</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      txt: 'v1',
      color: '#aa05cc'
    }
  },
  methods: {
    onHandler() {
      this.txt = 'v2'
      console.info('change');
    }
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
