<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['src'])
</script>

<template>
  <div class="item-holder">
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
