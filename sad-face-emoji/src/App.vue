<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TitleItem from './components/TitleItem.vue'
import AvatarDisplay from './components/AvatarDisplay.vue'
</script>

<template>
  <header>
    <div><TitleItem /></div>
  </header>
  <div>
    <AvatarDisplay />
  </div>
  <nav>
    <!-- <RouterLink to="/">Home</RouterLink> -->
    <RouterLink to="/face">face</RouterLink>
    <RouterLink to="/eyes">eyes</RouterLink>
    <RouterLink to="/clothes">clothes</RouterLink>
    <RouterLink to="/hair">hair</RouterLink>
    <RouterLink to="/accessories">accessories</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
