<script setup>
import axios from "axios";
import Container from "./components/Container.vue";
import postData from "@/assets/postData";
import { ref } from "vue";

const dataList = ref(postData);
const currTab = ref(0);
const uploadUrl = ref("");
const morePost = () => {
  axios
    .get("https://codingapple1.github.io/vue/more0.json")
    .then(({ data }) => {
      dataList.value.push(data);
    });
};
const upload = (e) => {
  const file = e.target.files;
  const setUrl = URL.createObjectURL(file[0]);
  uploadUrl.value = setUrl;
  currTab.value = 1;
};
const handleCancel = () => {
  if (currTab.value === 0) return;
  currTab.value--;
};
const handleNext = () => {
  currTab.value++;
};
</script>

<template>
  <div class="header">
    <ul class="header-button-left" v-if="currTab !== 0">
      <li @click="handleCancel">{{ currTab === 1 ? "Cancel" : "Prev" }}</li>
    </ul>
    <ul class="header-button-right">
      <li @click="handleNext" v-if="currTab !== 2">Next</li>
    </ul>
    <img src="./assets/logo.svg" class="logo" />
  </div>

  <Container :dataList="dataList" :currTab="currTab" :uploadUrl="uploadUrl" />
  <button @click="morePost">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
