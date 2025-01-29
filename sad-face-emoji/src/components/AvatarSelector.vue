<template>
  <div>
    <nav>
      <button @click="currentSection = 'hair'">Hair</button>
      <button @click="currentSection = 'eyes'">Eyes</button>
    </nav>

    <div v-if="currentSection === 'hair'">
      <CardDisplay v-for="hair in hairData" :key="hair.id" :id="hair.id"></CardDisplay>
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
import CardDisplay from '@/views/CardDisplay.vue'

const currentSection = ref('hair')
const hairData = ref([
  { id: 1, src: '' },
  { id: 2, src: '' },
  { id: 3, src: '' },
])
</script>
