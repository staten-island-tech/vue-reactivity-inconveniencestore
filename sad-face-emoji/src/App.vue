<script setup>
import TitleItem from './components/TitleItem.vue'
import AvatarDisplay from './components/AvatarDisplay.vue'
import AvatarSelector from './components/AvatarSelector.vue'
import data from './data.js'
import { computed, ref } from 'vue'

// compute tracks items- understand what this means
//emit what category it is currently, let this part of the code recieve what it is, and then filter based on currently selected section.

const selectedSection = ref('eyes')
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
  <body>
    <div class="body">
      <div class="title"><TitleItem /></div>
      <div class="avatar-display">
        <AvatarDisplay
          v-for="item in selectedItems"
          :key="item.src"
          :src="item.src"
          :brightness="item.brightness"
          :hue="item.hue"
          :zIndex="item.zIndex"
          @toggle-selected="updateAvatar"
        />
      </div>

      <AvatarSelector @change-section="updateSection" />

      <!--toggle-selected is emitted from avatardisplay-->

      <!--avatarselector-->
    </div>
  </body>
</template>

<style scoped>
* {
  font-family: 'Times New Roman', Times, serif;
  font-weight: lighter;
}

header {
  margin: 0;
}
.avatar-display {
  width: 16rem;
  height: 16rem;
  position: relative;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}
</style>
