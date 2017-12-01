<template>
  <div id="app">

    <router-link to="/">
      <img src="http://www.eglsf.info/wp-content/uploads/submit_news.jpg" alt="News List" height="120" />
    </router-link>

    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
