import axios from 'axios';

export async function addLikesId(userId, blogId) {
  try {
    const response = await axios.post(
      `http://localhost:4444/postData/addLikesId?userId=${userId}&blogId=${blogId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function addLikesIntoComments(blogId, userId, commentId, liketoggle) {
  try {
    const response = await axios.post(
      `http://localhost:4444/postData/addLikesforComments?userId=${userId}&blogId=${blogId}&commentId=${commentId}&liketoggle=${liketoggle}`
    );
    return response;
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

export async function addBlog(blog) {
  try {
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };
    const response = await axios.post(`http://localhost:4444/postData/addblog`, blog, config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
