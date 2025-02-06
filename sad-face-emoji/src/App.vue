<script setup>
import TitleItem from './components/TitleItem.vue'
import AvatarDisplay from './components/AvatarDisplay.vue'
import AvatarSelector from './components/AvatarSelector.vue'
import data from './data.js'
import { computed } from 'vue'

// compute tracks items- understand what this means
const selectedItems = computed(() => data.filter((item) => item.selected))

const updateAvatar = (src) => {
  const item = data.find((i) => i.src === src)
  if (item) {
    item.selected = !item.selected
  }
}
</script>

<template>
  <header>
    <div><TitleItem /></div>
  </header>
  <body>
    <div>
      <AvatarDisplay
        v-for="item in selectedItems"
        :key="item.src"
        :src="item.src"
        @toggle-selected="updateAvatar"
      />
    </div>
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
