<script setup>
import postData from "@/assets/postData";
import Post from "./Post.vue";
import { ref } from "vue";
const dataList = ref(postData);
</script>
<template>
  <div>
    <Post v-for="(data, idx) in dataList" :key="`post${idx}`" :data="data" />
  </div>
</template>
