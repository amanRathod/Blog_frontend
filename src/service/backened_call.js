import axios from 'axios';

export async function getUserByUserId(followers) {
  try {
    const responseObject = await axios.get(`http://localhost:4444/getData/userId/${followers}`);
    return responseObject.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllPosts() {
  try {
    const responseObject = await axios.get(`http://localhost:4444/getData/allPosts`);
    return responseObject.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getSingleUser(username) {
  try {
    const response = await axios.get(`http://localhost:4444/getData/singleUserData/${username}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserByUsername(username) {
  try {
    const response = await axios.get(`http://localhost:4444/getData/UserByUsername/${username}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function isUserFollow(loggedInUser, profileId) {
  try {
    const response = await axios.get(
      `http://localhost:4444/getData/UserFollow?loggedInUsername=${loggedInUser}&profileId=${profileId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getPostByPostId(Id) {
  try {
    const response = await axios.get(`http://localhost:4444/getData/postById/${Id}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
