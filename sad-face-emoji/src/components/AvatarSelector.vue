<template>
  <div>
    <nav>
      <button @click="currentSection = 'hair'">Hair</button>
      <button @click="currentSection = 'face'">Face</button>
    </nav>

    <div>
      <!-- <AvatarDisplay v-for="item in selectedItems" :src="item.src" /> -->
    </div>

    <div v-if="currentSection === 'hair'">
      <CardDisplay
        v-for="hair in data"
        :src="hair.src"
        :selected="hair.selected"
        @toggle-selected="toggleSelection"
      ></CardDisplay>
      <!-- @toggle-selected listens for emit, then throws it to the function-->
    </div>

    <div v-else-if="currentSection === 'eyes'">
      <h1>eyes</h1>
    </div>
    <div v-else>
      <h1>error</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CardDisplay from './CardDisplay.vue'
import AvatarDisplay from './AvatarDisplay.vue'
import data from '../data.js'

const emit = defineEmits(['change-section'])
const currentSection = ref('hair')
const items = ref(data)

// watch for changes in currentSection and emit event
watch(currentSection, (newSection) => {
  emit('change-section', newSection)
})

const toggleSelection = (src) => {
  const item = items.value.find((i) => i.src === src)
  if (item) item.selected = !item.selected
}

//need to put items on screen
//array of selected objects

//data is the term that i defined it as
//its also the thing that's emitted. probably should define it as when its true
//reactice can hange the array: put in seperate js file??
//put stuff in as props
</script>
