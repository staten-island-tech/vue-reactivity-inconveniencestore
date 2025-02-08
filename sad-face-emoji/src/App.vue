<script setup>
import TitleItem from './components/TitleItem.vue'
import AvatarDisplay from './components/AvatarDisplay.vue'
import AvatarSelector from './components/AvatarSelector.vue'
import data from './data.js'
import { computed, ref } from 'vue'

// compute tracks items- understand what this means
//emit what category it is currently, let this part of the code recieve what it is, and then filter based on currently selected section.

const selectedSection = ref('hair')
const selectedItems = computed(() => data[selectedSection.value].filter((item) => item.selected))

const updateAvatar = (src) => {
  //what in the world does find i mean
  const item = data[selectedSection.value].find((i) => i.src === src)
  if (item) {
    item.selected = !item.selected
  }
}

//recieved emitted variable = newsection
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
    <!--use v-if here to change the section of update section is called? wait its reactive i can change it in avatar selector question mark-->
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
