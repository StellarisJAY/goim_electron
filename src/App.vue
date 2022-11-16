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
  background-color: rgb(227, 227, 227);
}
</style>
