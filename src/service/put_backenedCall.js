/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function togglefollowers(loggedInUsername, profileUsername, toggleValue) {
  try {
    const response = await axios.put(
      `http://localhost:4444/putData/changeFollower?loggedInUsername=${loggedInUsername}&profileUsername=${profileUsername}&toggleValue=${toggleValue}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function saveBlog(blog) {
  try {
    const response = await axios.put('http://localhost:4444/putData/saveBLog', blog);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function updateProfileData(formData) {
  try {
    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
  }  
    const response = await axios.put(`http://localhost:4444/putData/updateProfile`, formData, config);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
