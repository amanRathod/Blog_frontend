/* eslint-disable no-empty-function */
import axios from 'axios';

const link = 'http://localhost:4444/api/v1/blog';

const token = localStorage.getItem('token');

export async function toggleLike(blogId, toggle) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const state = {
      toggle,
      blogId
    };

    const response = await axios.post(`${link}/toggle-like`, state, config);
    console.log('rererer', response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

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

export async function toggleLikesIntoComments(commentId, toggle) {
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
      toggle
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
    console.log('bbb', blogId);

    const response = await axios.get(`${link}/comment`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
