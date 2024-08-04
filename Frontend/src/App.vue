
<template>
  <!-- <h1>Hello Anantha</h1> -->
   <NavBar></NavBar>
  <div class="page-wrap">
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
</style>