import axios from 'axios';

export async function addLikesId(loggedUsername, blogId, toggle) {
  try {
    const response = await axios.post(
      `http://localhost:4444/postData/addLikesId?loggedUsername=${loggedUsername}&blogId=${blogId}&toggle=${toggle}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function addLikesIntoComments(blogId, loggedUsername, commentId, toggle) {
  try {
    console.log(loggedUsername);
    const response = await axios.post(
      `http://localhost:4444/postData/addLikesIntoComments?loggedUsername=${loggedUsername}&blogId=${blogId}&commentId=${commentId}&toggle=${toggle}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function addComment(blogId, commentContent, loggedUsername) {
  try {
    const response = await axios.post(
      `http://localhost:4444/postData/postComment?blogId=${blogId}&commentContent=${commentContent}&loggedUsername=${loggedUsername}`
    );
    return response.data;
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
