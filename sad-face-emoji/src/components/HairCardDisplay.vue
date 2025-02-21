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
  if (sectionData) {
    //it was because props wasn't working before that this had to be here :skull:
    const item = sectionData.find((i) => i.src === props.src)
    if (item) {
      item.hue = Number(event.target.value)
    }
  } else {
    console.log(`hue error: ${error}`)
  }
}

function updateBrightness(event) {
  const sectionData = data[props.currentSection]
  if (sectionData) {
    const item = sectionData.find((i) => i.src === props.src)
    if (item) {
      item.brightness = Number(event.target.value)
    }
  } else {
    console.log(`brightness error: ${error}`)
  }
}

function updateAllValues() {
  const hairCategories = ['frontHair', 'sideBang', 'backHair']
  hairCategories.forEach((category) => {
    const sectionData = data[category]

    const selectedItem = data[props.currentSection].find((i) => i.src === props.src)

    sectionData.forEach((item) => {
      item.hue = selectedItem.hue
      item.brightness = selectedItem.brightness
    })
  })
}
</script>

<template>
  <div class="item-holder">
    <div class="img">
      <img
        :src="props.src"
        alt=""
        :style="{
          filter: `hue-rotate(${props.hue}deg) brightness(${props.brightness}%)`,
        }"
      />
      <input type="checkbox" class="checkbox" :checked="props.selected" @click="selectItem" />
    </div>

    <div class="inputs">
      <label for="">hue</label>
      <input type="range" min="0" max="360" :value="hue" @input="updateHue" />
      <label for="">lustre</label>
      <input type="range" min="0" max="200" :value="brightness" @input="updateBrightness" />
      <!--probably should assosiate the hue rotate with each image and then uhhh.. emit and change the color-->
      <button @click="updateAllValues">color apply all</button>
    </div>
  </div>
</template>

<style scoped>
.img {
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(233, 233, 233);
}
.checkbox {
  position: relative;
  bottom: 1.5rem;
  left: 4rem;
  background-color: white;
  cursor: pointer;
}
img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;

  margin: 0 auto;
  display: flex;
}
.item-holder {
  height: 17rem;
  width: 11rem;
  margin: 2rem;
}
.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.7rem;
}
</style>
