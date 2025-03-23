import { createStore } from "vuex";
import postData from "./assets/postData";
const store = createStore({
  state() {
    return {
      postData,
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
  },
});
export default store;
