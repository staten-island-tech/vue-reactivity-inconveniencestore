<template>
  <div>
    <nav>
      <button @click="currentSection = 'hair'">Hair</button>
      <button @click="currentSection = 'eyes'">Eyes</button>
    </nav>

    <div v-if="currentSection === 'hair'">
      <CardDisplay
        v-for="hair in hairData"
        :key="hair.id"
        :id="hair.id"
        :src="hair.src"
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
import CardDisplay from '@/views/CardDisplay.vue'

const currentSection = ref('hair')
const hairData = ref([
  {
    id: 1,
    src: 'https://i1.wp.com/www.roeselienraimond.com/wp-content/uploads/2016/07/red_fox_portrait.jpg',
  },
  {
    id: 2,
    src: 'https://i1.wp.com/www.roeselienraimond.com/wp-content/uploads/2016/07/red_fox_portrait.jpg',
  },
  {
    id: 3,
    src: 'https://i1.wp.com/www.roeselienraimond.com/wp-content/uploads/2016/07/red_fox_portrait.jpg',
  },
])
</script>
