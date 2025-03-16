<script setup>
import Post from "./Post.vue";
const props = defineProps({
  dataList: Array,
});
</script>
<template>
  <div>
    <Post v-for="(data, idx) in dataList" :key="`post${idx}`" :data="data" />
  </div>
</template>
