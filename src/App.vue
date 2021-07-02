<template>
  <div id="app">
    <essay :info="info"></essay>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      info:{
        title:'网页标题',
        content:'文章正文'
      }
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
