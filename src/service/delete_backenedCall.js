import axios from 'axios';

export default async function deleteBlog(blogId) {
  try {
    const response = await axios.delete(`http://localhost:4444/deleteData/deleteBlog/${blogId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
