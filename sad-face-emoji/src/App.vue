<script setup>
import TitleItem from './components/TitleItem.vue'
import AvatarDisplay from './components/AvatarDisplay.vue'
import AvatarSelector from './components/AvatarSelector.vue'
import data from './data.js'
import { computed, ref } from 'vue'

// compute tracks items- understand what this means
//emit what category it is currently, let this part of the code recieve what it is, and then filter based on currently selected section.

const selectedSection = ref('hair')
const selectedItems = computed(() => {
  return Object.values(data) // get all category arrays
    .flat() // flatten them into a single array
    .filter((item) => item.selected) // get only selected items
})

function updateAvatar(src) {
  const item = data[selectedSection.value].find((i) => i.src === src)
  if (item) item.selected = !item.selected
}

//recieved emitted variable = newsection
function updateSection(newSection) {
  selectedSection.value = newSection
}
</script>

<template>
  <header>
    <div><TitleItem /></div>
  </header>
  <body>
    <h1>{{ selectedSection }}</h1>
    <div>
      <AvatarDisplay
        v-for="item in selectedItems"
        :key="item.src"
        :src="item.src"
        :brightness="item.brightness"
        :hue="item.hue"
        @toggle-selected="updateAvatar"
      />
    </div>
    <!--toggle-selected is emitted from avatardisplay-->

    <!--avatarselector-->
    <AvatarSelector @change-section="updateSection" />
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
