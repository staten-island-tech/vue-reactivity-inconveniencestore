<script setup>
import TitleItem from './components/TitleItem.vue'
import AvatarDisplay from './components/AvatarDisplay.vue'
import AvatarSelector from './components/AvatarSelector.vue'
</script>

<template>
  <header>
    <div><TitleItem /></div>
  </header>
  <body>
    <!-- <div>
    <AvatarDisplay />
  </div> -->
    <AvatarSelector />
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
