<template>
  <div>
    <nav>
      <button
        v-for="category in Object.keys(data)"
        :key="category"
        @click="currentSection = category"
      >
        {{ category }}
      </button>
    </nav>

    <div
      v-if="
        currentSection === 'frontHair' ||
        currentSection === 'sideBang' ||
        currentSection === 'backHair'
      "
      class="card-display"
    >
      <HairCardDisplay
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

    <div v-else class="card-display">
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
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import CardDisplay from './CardDisplay.vue'
import HairCardDisplay from './HairCardDisplay.vue'
import data from '../data.js'

const emit = defineEmits(['change-section'])
//this is for app.vue to recieve
const currentSection = ref('eyes')
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
.card-display,
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

nav {
  margin: 2rem auto;
}
</style>
