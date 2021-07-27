import axios from 'axios';

export async function togglefollowers(loggedInUsername, profileUsername, toggleValue) {
  try {
    const response = await axios.put(
      `http://localhost:4444/putData/changeFollower?loggedInUsername=${loggedInUsername}&profileUsername=${profileUsername}&toggleValue=${toggleValue}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function saveBlog(blog) {
  try {
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };
    const response = await axios.put('http://localhost:4444/putData/saveBLog', blog, config);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function updateProfileData(formData) {
  try {
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };
    const response = await axios.put(
      `http://localhost:4444/putData/updateProfile`,
      formData,
      config
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
