<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>image goes here</div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
