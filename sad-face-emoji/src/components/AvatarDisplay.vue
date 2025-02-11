<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['src', 'hue', 'brightness'])
const emit = defineEmits(['toggle-selected'])

function selectItem() {
  emit('toggle-selected', props.src)
  //gets the src from app.vue. emits this event
}
</script>

<template>
  <div class="item-holder" @click="selectItem">
    <h4>{{ props.src }}</h4>
    <img
      :src="props.src"
      alt=""
      :style="{
        filter: `hue-rotate(${props.hue}deg) brightness(${props.brightness}%)`,
      }"
    />
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
  background-color: rgb(255, 0, 0);
}
</style>
