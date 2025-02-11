<script setup>
import { defineProps, defineEmits } from 'vue'
import data from '../data.js'

const props = defineProps(['src', 'selected', 'hue', 'brightness', `currentSection`])
const emit = defineEmits(['toggle-selected'])
function selectItem() {
  emit('toggle-selected', props.src)
}

function updateHue(event) {
  const sectionData = data[props.currentSection]
  console.log(props.currentSection)
  if (sectionData) {
    //it was because props wasn't working before that this had to be here :skull:
    const item = sectionData.find((i) => i.src === props.src)
    if (item) {
      item.hue = Number(event.target.value)
    }
  }
}

function updateBrightness(event) {
  const sectionData = data[props.currentSection]
  if (sectionData) {
    const item = sectionData.find((i) => i.src === props.src)
    if (item) {
      item.brightness = Number(event.target.value)
    }
  }
}
</script>

<template>
  <div class="item-holder">
    <h4>{{ props.src }}</h4>
    <img
      :src="props.src"
      alt=""
      :style="{
        filter: `hue-rotate(${props.hue}deg) brightness(${props.brightness}%)`,
      }"
    />
    <input type="checkbox" :checked="props.selected" @click="selectItem" />
    <input type="range" min="0" max="360" :value="hue" @input="updateHue" />

    <input type="range" min="0" max="200" :value="brightness" @input="updateBrightness" />
    <!--probably should assosiate the hue rotate with each image and then uhhh.. emit and change the color-->
  </div>
</template>

<style scoped>
img {
  height: 10rem;
  width: 10rem;
  object-fit: contain;
}
.item-holder {
  height: 12rem;
  width: 11.5rem;
  margin: 4rem;
  background-color: rgb(123, 255, 0);
}
</style>
