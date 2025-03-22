<script setup>
import FilterBox from "./FilterBox.vue";
import Post from "./Post.vue";
import filters from "@/assets/filters";
const props = defineProps({
  dataList: Array,
  currTab: Number,
  uploadUrl: String,
});
const emit = defineEmits(["write"]);
</script>
<template>
  <div>
    <div v-if="currTab === 0">
      <Post v-for="(data, idx) in dataList" :key="`post${idx}`" :data="data" />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="currTab === 1">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="filter in filters"
          :key="filter"
          :uploadUrl="uploadUrl"
          :filter="filter"
          >{{ filter }}</FilterBox
        >
      </div>
    </div>
    <!-- 글작성페이지 -->
    <div v-if="currTab === 2">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadUrl})` }"
      ></div>
      <div class="write">
        <textarea
          placeholder="내용을 작성해주세요."
          class="write-box"
          @input="emit('write', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  /* border: none; */
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
