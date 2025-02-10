<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['src', 'selected', 'hue', 'brightness'])
const emit = defineEmits(['toggle-selected'])
function selectItem() {
  emit('toggle-selected', props.src)
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
    <input type="range" min="0" max="360" class="hue-shift" :value="props.hue" />
    <input type="range" min="0" max="360" class="brightness" :value="props.brightness" />
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
  margin: 1rem;
  background-color: rgb(123, 255, 0);
}
</style>
