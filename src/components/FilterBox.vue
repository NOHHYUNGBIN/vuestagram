<script setup>
import { getCurrentInstance } from "vue";

const { appContext } = getCurrentInstance();
const emitter = appContext.config.globalProperties.emitter;
const props = defineProps({
  uploadUrl: String,
  filter: String,
});

const sendFilterName = (filterName) => {
  emitter.emit("filterName", filterName);
};
</script>
<template>
  <div
    @click="() => sendFilterName(filter)"
    :class="`${filter} filter-item`"
    :style="{ backgroundImage: `url(${uploadUrl})` }"
  >
    <slot name="filterName"></slot>
  </div>
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
