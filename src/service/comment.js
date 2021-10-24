import axios from 'axios';

const link = 'http://localhost:4444/api/v1/blog/comment';

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

    const response = await axios.post(`${link}/create`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function toggleLikesIntoComments(commentId, blogId) {
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
      blogId
    };

    const response = await axios.post(`${link}/addLike`, state, config);
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

    const response = await axios.post(`${link}/getComments`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteComment(commentId, blogId) {
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
      blogId
    };

    const response = await axios.put(`${link}/delete`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
