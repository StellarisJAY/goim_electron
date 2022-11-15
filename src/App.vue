<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.$router.push({path: "/login"})
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
