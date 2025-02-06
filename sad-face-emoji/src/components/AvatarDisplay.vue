<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['src'])
const emit = defineEmits(['toggle-selected']) //why is it yellow

const selectItem = () => {
  emit('toggle-selected,', props.src)
}
</script>

<template>
  <div class="item-holder" @click="selectItem">
    <h4>{{ props.src }}</h4>
    <img :src="props.src" alt="" />
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
