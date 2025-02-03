<template>
  <div>
    <nav>
      <button @click="currentSection = 'hair'">Hair</button>
      <button @click="$emit('toggle-checkbox')'">Eyes</button>
    </nav>

    <div v-if="currentSection === 'hair'">
      <CardDisplay
        v-for="hair in data"
        :key="hair.id"
        :id="hair.id"
        :src="hair.src"
        :selected="hair.selected"
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
import CardDisplay from '../views/CardDisplay.vue'
import data from '../data.js'

const currentSection = ref('hair')
</script>
