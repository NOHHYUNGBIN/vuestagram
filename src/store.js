import { createStore } from "vuex";
import postData from "./assets/postData";
import axios from "axios";
const store = createStore({
  state() {
    return {
      postData,
      moreData: {},
    };
  },
  mutations: {
    ADD_POST(state, newPost) {
      state.postData.unshift(newPost);
    },
    ADD_LIKE(state, id) {
      const post = state.postData.find((data) => data.id === id);
      post.likes++;
      post.liked = true;
    },
    SUB_LIKE(state, id) {
      const post = state.postData.find((data) => data.id === id);
      post.likes--;
      post.liked = false;
    },
    SET_MORE_DATA(state, payload) {
      state.postData.push(payload);
    },
  },
  actions: {
    moreData({ commit }) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then(({ data }) => {
          commit("SET_MORE_DATA", data);
        });
    },
  },
});
export default store;
