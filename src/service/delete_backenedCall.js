import axios from 'axios';

export async function deleteBlog(blogId) {
  try {
    const response = await axios.delete(`http://localhost:4444/deleteData/deleteBlog/${blogId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteComment(commentId, blogId) {
  try {
    const response = await axios.delete(
      `http://localhost:4444/deleteData/deleteComment?commentId=${commentId}&blogId=${blogId}`
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
