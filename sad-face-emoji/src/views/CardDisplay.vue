<script setup>
defineProps(['id', 'src', 'selected'])
</script>

<template>
  <div class="item-holder">
    <h4>{{ id }}</h4>
    <img :src="src" alt="" />
    <input type="checkbox" @click="selected = true" />
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
