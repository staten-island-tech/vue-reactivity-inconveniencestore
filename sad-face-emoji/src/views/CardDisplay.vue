<script setup>
defineProps(['id'], ['src'])
</script>

<template>
  <div class="item-holder">
    <h4>{{ id }}</h4>
    <img src="{{ src }}" alt="" />
  </div>
</template>

<style scoped>
img {
  height: 10rem;
  width: 10rem;
}
.item-holder {
  height: 12rem;
  width: 11.5rem;
}
</style>
