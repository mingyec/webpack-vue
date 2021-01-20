<template>
  <div id="app">
    <p>eeee {{txt}}</p>
    <button @click="onHandler">change</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      txt: 'v1'
    }
  },
  methods: {
    onHandler() {
      this.txt = 'v2'
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
