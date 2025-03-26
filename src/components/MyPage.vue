<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    let followers = ref([]);
    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        followers.value = res.data;
      });
    });
    return { followers };
  },
};
</script>
<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div
      class="post-header"
      v-for="(follower, i) in followers"
      :key="follower.id"
    >
      <div
        class="profile"
        :style="`background-image:url(${follower.image})`"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>
<style scoped></style>
