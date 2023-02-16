import axios from 'axios';

const link = `https://blog-v365.onrender.com/api/v1/blog`;

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
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createBlog(formData) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.post(`${link}/create`, formData, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function updateBlog(formData) {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.put(`${link}/update`, formData, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteBlog(blogId) {
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

    const response = await axios.put(`${link}/delete`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
