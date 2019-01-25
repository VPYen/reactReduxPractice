import { FETCH_POSTS, NEW_POST } from "./types";
import axios from 'axios';

export let fetchPosts = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => dispatch ({
    type: FETCH_POSTS,
    payload: response.data
  }))
  .catch(error => {
    console.log(error);
  });
}

export let createPost = (postData) => (dispatch) => {
  axios ({
    method: 'post',
    url: "https://jsonplaceholder.typicode.com/posts",
    data: postData
  })
  .then(response => dispatch({
    type: NEW_POST,
    payload: response.data
  }))
  .catch(error => {
    console.log(error);
  })
}
