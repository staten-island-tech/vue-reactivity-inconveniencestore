<script setup>
import { defineProps } from 'vue'

const props = defineProps(['src', 'hue', 'brightness', 'zIndex'])
</script>

<template>
  <div class="item-holder">
    <!--<h4>{{ props.src }}</h4>-->
    <img
      :src="props.src"
      alt=""
      :style="{
        filter: `hue-rotate(${props.hue}deg) brightness(${props.brightness}%)`,
        zIndex: props.zIndex,
      }"
    />
  </div>
</template>

<style scoped>
.item-holder {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
}
img {
  height: 15rem;
  width: 15rem;
  object-fit: cover;
}
.item-holder {
  height: 15rem;
  width: 15rem;
  margin: 1rem;
}
</style>
