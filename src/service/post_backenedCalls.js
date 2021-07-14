/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function addLikesId(userId, blogId) {
  try {
    const response = await axios.post(
      `http://localhost:4444/postData/addLikesId?userId=${userId}&blogId=${blogId}`
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function addLikesIntoComments(blogId, userId) {
  try {
    const response = await axios.post(
      `http://localhost:4444/postData/addLikesforComments?userId=${userId}&blogId=${blogId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateComment(blogId, comment, loggedInUserId) {
  try {
    const response = await axios.post(
      `http://localhost:4444/postData/postComment?blogId=${blogId}&comment=${comment}&loggedInUserId=${loggedInUserId}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
