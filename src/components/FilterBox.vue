<script setup>
const props = defineProps({
  uploadUrl: String,
  filter: String,
});
</script>
<template>
  <div
    :class="`${filter} filter-item`"
    :style="{ backgroundImage: `url(${uploadUrl})` }"
  ></div>
</template>
<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
