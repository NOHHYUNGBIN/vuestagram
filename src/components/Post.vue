<script setup>
import { useStore } from "vuex";

const props = defineProps({
  data: Array,
});
const { data } = props;
const store = useStore();
const handleLike = (id) => {
  data.liked ? store.commit("SUB_LIKE", id) : store.commit("ADD_LIKE", id);
};
</script>
<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${data.userImage})` }"
      ></div>
      <span class="profile-name">{{ data.name }}</span>
    </div>
    <div
      @dblclick="() => handleLike(data.id)"
      :class="`${data.filter} post-body`"
      :style="{ backgroundImage: `url(${data.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ `${data.liked ? "♥" : "♡"} ${data.likes} likes` }}</p>
      <p>
        <strong>{{ data.name }}</strong> {{ data.content }}
      </p>
      <p class="date">{{ data.date }}</p>
    </div>
  </div>
</template>
<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
