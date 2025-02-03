<template>
  <div>
    <nav>
      <button @click="currentSection = 'hair'">Hair</button>
    </nav>

    <div v-if="currentSection === 'hair'">
      <CardDisplay
        v-for="hair in data"
        :src="hair.src"
        :selected="hair.selected"
        @user-clicked="handleUserClick"
      ></CardDisplay>
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
import { ref } from 'vue'
import CardDisplay from './CardDisplay.vue'
import data from '../data.js'

//data is the term that i defined it as
//its also the thing that's emitted. probably should define it as when its true
const handleUserClick = (data) => {
  alert(`User ${data} clicked!`)
}
//reactice can hange the array: put in seperate js file??
//put stuff in as props
const currentSection = ref('hair')
</script>
