<template>
  <div>
    <nav>
      <button @click="currentSection = 'hair'">Hair</button>
      <button @click="currentSection = 'face'">Face</button>
    </nav>

    <div>
      <!-- <AvatarDisplay v-for="item in selectedItems" :src="item.src" /> -->
    </div>

    <div class="card-display" v-if="currentSection === 'hair'">
      <CardDisplay
        v-for="item in data[currentSection]"
        :key="item.src"
        :src="item.src"
        :selected="item.selected"
        :brightness="item.brightness"
        :hue="item.hue"
        :currentSection="currentSection"
        @toggle-selected="toggleSelection"
      />
      <!-- @toggle-selected listens for emit, then throws it to the function-->
    </div>

    <!--i feel like i dont need to pass these things bc it can just read from the array right???? im not going insane rigght??-->
    <div class="card-display" v-else-if="currentSection === 'face'">
      <CardDisplay
        v-for="item in data[currentSection]"
        :key="item.src"
        :src="item.src"
        :selected="item.selected"
        :brightness="item.brightness"
        :hue="item.hue"
        :currentSection="currentSection"
        @toggle-selected="toggleSelection"
      />
    </div>
    <div v-else>
      <h1>error</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import CardDisplay from './CardDisplay.vue'
import data from '../data.js'

const emit = defineEmits(['change-section'])
//this is for app.vue to recieve
const currentSection = ref('hair')
const items = data //data is alr reactive

// watch for changes in currentSection and emit event
watch(currentSection, (newSection) => {
  emit('change-section', newSection)
})

function toggleSelection(src) {
  const item = items[currentSection.value].find((i) => i.src === src)
  if (item) item.selected = !item.selected
}
//need to put items on screen
//array of selected objects

//data is the term that i defined it as
//its also the thing that's emitted. probably should define it as when its true
//reactice can hange the array: put in seperate js file??
//put stuff in as props
</script>

<style scoped>
.card-display {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
