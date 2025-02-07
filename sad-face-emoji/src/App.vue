<script setup>
import TitleItem from './components/TitleItem.vue'
import AvatarDisplay from './components/AvatarDisplay.vue'
import AvatarSelector from './components/AvatarSelector.vue'
import data from './data.js'
import { computed } from 'vue'

// compute tracks items- understand what this means

//emit what category it is currently, let this part of the code recieve what it is, and then filter based on currently selected section.

//figure out how to get
const selectedSection = ref('hair')
const selectedItems = computed(() => data[selectedSection.value].filter((item) => item.selected))

const updateAvatar = (src) => {
  const item = data[selectedSection.value].find((i) => i.src === src)
  if (item) {
    item.selected = !item.selected
  }
}

const updateSection = (newSection) => {
  selectedSection.value = newSection
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
    <!--toggle-selected is emitted from avatardisplay-->
    <AvatarSelector @change-selected="updateSection" />
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
