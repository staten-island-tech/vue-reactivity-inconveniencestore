<script setup>
import TitleItem from './components/TitleItem.vue'
import AvatarDisplay from './components/AvatarDisplay.vue'
import AvatarSelector from './components/AvatarSelector.vue'
import data from './data.js'
import { ref } from 'vue'

const items = ref(data)

const updateAvatar = (src) => {
  const item = items.value.find((i) => i.src === src)
  if (item) item.selected = !item.selected
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
