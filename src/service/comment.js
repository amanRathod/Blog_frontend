/* eslint-disable no-empty-function */
import axios from 'axios';

const link = 'http://localhost:4444/api/v1/blog';

export async function addComment(content, blogId) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const state = {
      content,
      blogId
    };

    const response = await axios.post(`${link}/comment`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function toggleLikesIntoComments(commentId, toggle, blogId) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const state = {
      commentId,
      toggle,
      blogId
    };

    const response = await axios.post(`${link}/comment/addLike`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllComments(blogId) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const state = {
      blogId
    };

    const response = await axios.get(`${link}/comment`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
