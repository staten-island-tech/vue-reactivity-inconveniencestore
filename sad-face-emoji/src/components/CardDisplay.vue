<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['src', 'selected'])
const emit = defineEmits(['toggle-selected'])
const selectItem = () => {
  emit('toggle-selected', props.src)
}
</script>

<template>
  <div class="item-holder">
    <h4>{{ props.src }}</h4>
    <img :src="props.src" alt="" />
    <input type="checkbox" :checked="props.selected" @click="selectItem" />
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
